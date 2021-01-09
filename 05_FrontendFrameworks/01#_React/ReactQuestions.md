# React Questions

1. Why this.setState is undefined in React ES6 class ?
- React components using ES6 classes no longer autobind this to non React methods. In your constructor, add
```JAVASCRIPT
...constructor,
this.onChange = this.onChange.bind(this)
```

- The value of this primarily depends on how the function is called.
- Given d.speak();, this will refer to d because the function is called as an "object method".
- But in <div>{this.renderElements}</div> you are not calling the function. You are passing the function to React which will call it somehow. When it is called, React doesn't know which object the function "belonged" to so it cannot set the right value for this. Binding solves that


- Functions in ES6 Classes, Every time you call a function on an object, this points to the object.
- Lifecycle methods in React.Component - whenever React instantiates your component like myComponent = new MyComponent() it knows which object to call the lifecycle methods on, namely myComponent. So a simple call myComponent.componentDidUpdate() makes this available in the componentDidUpdate lifecycle method. Same for the other lifecycle methods.
- Handlers & Bound in React.Component - this.state is undefined, because this is actually window - log it and see. The reason is that React invokes handlers on the global context, unless you have the handler bound to another context which overrides window

- Ref
  - [https://reactjs.org/docs/react-without-es6.html](Reactjs-without-es6)
  - [https://daveceddia.com/react-es5-createclass-vs-es6-classes/](react-es5vses6)
  - [https://stackoverflow.com/questions/39552536/why-do-i-have-to-bindthis-for-methods-defined-in-react-component-class-but-n](stackoverflow)


1. What is Reconcilliation ?
- Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.