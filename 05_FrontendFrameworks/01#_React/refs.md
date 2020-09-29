## React Ref

Refs provide a way to access DOM nodes or React elements created in the render method.

### When to Use Refs
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

##  Trigger focus on an input element using Ref
https://stackblitz.com/edit/react-ref-explained

Class based components

- Create Ref via this
``` nameRef =  React.createRef();```
- Add the ref to a dom node
``` <input type="text" ref={this.nameRef} placeholder="Name"/> ```
- Add a click handlers to a button to trigger focus to the input element.
``` this.nameRef.current.focus(); ```

Function based 
- Create Ref using a const.
 ``` const phoneRef =  React.createRef();```
- Refer ref by binding it to the input
``` <input type="text" ref={phoneRef} placeholder="Phone"/> ```
- Add a click handlers to a button to trigger focus to the input element.
``phoneRef.current.focus();``

# Forwarding Refs
Ref forwarding is a technique for automatically passing a [ref](https://reactjs.org/docs/refs-and-the-dom.html) through a component to one of its children.

### Creating Ref in parent component and passing it to child component and Triggering it
Function and class based example below. 
https://stackblitz.com/edit/react-forward-ref-explained

Function based
- Create Ref 
``const fancyInputRef =  React.createRef();``
- Create a function component called IndexComponent,
	- Write a trigger Handler, to focus the input 
	- Create a button, that has onClick event that triggers our Target ref FancyBtn Component
-  Now create two Function based component, HomeComp and FancyButton Comp 
	-  Import HomeComp in IndexComponent
	-  Import FancyButton Component in HomeComp
- In HomeComp, pass the ref
	 - ``<Homepage fancyInputRef={fancyInputRef} />``
- Repeat for FancyButton component
	- ``<FancyInput ref={props.fancyInputRef} />``
- FancyButton component will use React.forwardRef, see below
````javascript
//javascript
const  FancyButton  =  React.forwardRef((props, ref)  =>  (
<button ref={ref} onClick={fancyBtnHandler} className="FancyButton">

{props.children}

</button>

));
````



