# DOM

## Table of Contents
- [DOM with Javascript](#dom-with-js)
- [Accessing Html elements](#accessing-html-elements)
- [Changing HTML Elements](#changing-html-elements)
- [Creating new HTML Elements](#creating-new-html-elements)
- [DOM Properites and Methods](#dom-properites-and-methods)
- [Events](#events)
  - [HTML DOM Events](#html-dom-events)
  - [Event Handlers](#event-handlers)
  - [The this keyword in event](#the-this-keyword-in-event)
- [Event Listeners](#event-listeners)
  - [Event Propagation](#event-propagation)
  
# Dom with JS
What is the DOM?
The Document Object Model (DOM) represents the document as nodes and objects. That way, programming languages can connect to the page

The HTML DOM (Document Object Model)
- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM model is constructed as a tree of Objects
- The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

![alt DOM](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

When the page loads, each elements are considered **nodes**. let's say we have this example, a H1 element.
```html
<h1>Javascript</h1>
```
We have two different nodes, we have the parent node **h1**, and then we've got the **child node** which is the text. **javascript**

Let's use the console see our document
Use **console.dir** to list out the directory that's contained in the page.
```console.dir(document)```

## Node 

Let's access our html elements via console
```html
<!DOCTYPE html>
<html>

<head>
    <title>JavaScript DOM Course</title>
</head>

<body>
    <div id="output">DOM (Document Object Model)</div>
    <h1>What is the DOM???</h1>
    <p>Treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document.</p>
    <ul>
        <li>Describes how all the HTML elements are related</li>
        <li>Allows JavaScript to call into the DOM select elements and influcence elements</li>
        <li>DOM is created when the web page loads</li>
        <li>Elements within the page can be accessed and changed</li>
    </ul>
    <p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg"></p>
    <div>some text
        <h1>Hello world</h1>
    </div>
    <script>
        console.dir(document);
        console.log(document.URL);
    </script>
</body>
</html>
```
Type console.dir(document) to see the directory of the page

**document > children > html > head, body > div......**

Try to target the h1 element via nodes
```javascript
document.children[0].children[1].children[5].children[0].childNodes[0].nodeValue
// document > html > body > div,p,ul,p,h1
```
**remember, childnodes can be accessed by parent**

## Window object model
Just like what we did when logged to console directory for the dom we can console.dir window, So the window basically contains the dom within it. so you cany say windows is the parent of the dom


### document write method
Use document.write method to write text on document, but it's not a efficent way, 

if u write ```document.write``` inside script tag, the content gets added.

```html
<script>
	document.write('Hello world 2');
</script>
```

# Accessing Html elements
If you want to access any element in an HTML page, you always start with accessing the document object.

- Find an element by element **id**
```javascript
document.getElementById(id)
```
- Find an element by element **class name**
```javascript
document.getElementsByClassName(name)
```
- Find elements by **tag name**, it's returns a list of elements, so use index[] to access.
```javascript 
document.getElementsByTagName('name')
document.getElementsByTagName('p')[0];
```
- The **querySelector()** method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
```javascript
document.querySelector('.demo');	
document.querySelector('#demo');
```
- The **querySelectorAll()** method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object. 
  - The nodes can be accessed by index numbers.	
  - You can use the length property of the NodeList object to determine the number of elements that matches the specified selector, then you can loop through all elements and extract the info you want.
**Note**: Use **for loop** to access the list elements u get from **querySelectorAll** coz it returns **nodeList**
```javascript
document.querySelectorAll('h2')[0].setAttribute('class','color');
```
querySelector uses **CSS selectors**, which means, we can access html elements as we acess css to style elements
```javascript
// styling a list of elements using querySelector All
var menu = document.querySelectorAll('#menu li');
for (var i in menu) {
  menu[i].style.color = 'violet';
}

// we have a better way to style, add class with certain style and toggle it as needed.
  for(var i = 0; i < menu.length; i++) {
    menu[i].classList.add('color');
  }
```

## DOM Navigation via nodes 
According to the W3C HTML DOM standard, everything in an HTML document is a node. The nodes in the node tree have a hierarchical relationship to each other, the terms parent, child, and sibling are used to describe the relationships.
- In a node tree, the top node is called the root (or root node)
- Every node has exactly one parent, except the root (which has no parent)
- A node can have a number of children
- Siblings (brothers or sisters) are nodes with the same parent
- Nodes count whitespaces/linebreaks as a node

**Nodes:**

- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

**We'll use this html as an example**

```html
<body>
<h1>This is h1</h1>
<P>This is p tag</P>
</body>
```
```javascript
document.body.childNodes[1].firstChild.nodeValue; // this is h1
document.body.childNodes[1].textContent; // this is h1

document.body.firstChild.nextSibling; // <h1>this is h1</h1>
document.body.firstChild.textContent; // this is h1
```

**DOM Root Nodes:** There are two special properties that allow access to the full document:
- document.body - The body of the document
- document.documentElement - The full document

**The nodeName Property:** The nodeName property specifies the name of a node.
```document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;```
The nodeValue Property
- The nodeValue property specifies the value of a node.

## DOM Navigation via element 
HTML
```html
<h1>This is h1</h1>
<P>This is p tag</P>
```
- parentElement - returns the parentElement
```javascript
document.body.children[0].parentElement.nodeName;
//"BODY"
```
- Children - returns a list of child. Use index and to access to a child.
```javascript
document.body.children[0].textContent;
// "This is h1"
document.body.children[0].childNodes[0].nodeValue;
// "This is h1"
```
- firstElementChild - returns the first element of body
```javascript
document.body.firstElementChild.textContent;
//"This is h1"
document.body.firstElementChild.childNodes[0].nodeValue;
//"This is h1"
```
- nextElementSibling - returns the next element sibling
```javascript
document.body.firstElementChild.nextElementSibling.childNodes[0].nodeValue;
// This is p tag
```
Other nav listed
- element.previousElementSibling 
- element.lastElementChild

# Changing HTML Elements

**Elements**:

For this, We are gonne use this as example.
```css
css
#head {
color:red;	
}
```
```html
<h1 id="title">This is h1</h1>
<p class="demo">This is p <span>this is span</span></p>
```
**innerHTML:**  Sets or returns the content of an element
- changes the inner html of an element, changes completely even if any element inside.
```javascript
document.querySelector('.demo').innerHTML = 'hello world!';
//hello world
// note : span element got removed
```
**textContent:** Sets or returns the textual content of a node and its descendants
- changes the content inside of a element
```javascript
document.querySelector('.demo').textContent = ' hello world!'
// helloworld
```
Use **+=** to concatenate strings
```
```javascript
document.querySelector('.demo').innerHTML += 'hello world!'
document.querySelector('.demo').textContent += 'hello world!'
// This is p this is span Hello world
// This is p this is span Hello world
```

## Attributes 

#### getAttribute
The getAttribute() method returns the value of the attribute with the specified name, of an element.

**Syntax**

```javascript
element.getAttribute(attributename)
```
Get the value of the class attribute of an <h1> element:

```javascript
var x = document.getElementsByTagName("H1")[0].getAttribute("class");
// The result of x will be:
// democlass
```

#### To change a element's ID attribute

```javascript
document.querySelector('#title').id = 'head'
// changed h1 tag color to red.
```

#### To change a element's Class attribute

```javascript
document.querySelector('.title').className = 'new-class'
```

#### setAttribute
set a new attribute for a element

```javascript
document.querySelector('.demo').setAttribute('class','lead');
```

#### setAttributeNode

The setAttributeNode() method adds the specified attribute node to an element.
If the specified attribute already exists, this method replaces it.

**Syntax**

```element.setAttributeNode(attributenode)```

```javascript
var addClass = document.createAttribute('class');
addClass.value = 'myClass';

h1.setAttributeNode(addClass);
```

#### Changing HTML Style
To change the style of an HTML element, use this syntax:

```javascript
document.getElementById("p2").style.color = "blue"; 
```

## Creating new HTML Elements
To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

Syntax To create a html element, with text and attributes
- Create html element using ```document.create('element');```. store it in a variable ``` var anchor = document.create('a');```
- define attributes for element using set attribute ```element.setAttribute('prop','value');```
- to add text u need to create textNode, use ```document.createTextNode('text');```, store this as wel ```var anchorText = document.createTextNode('Google');```
- Append the textNode to the element ```anchor.appendChild(anchorText);```
- Append the element to the doc using, ```document.body.appendChild(anchor);```

**Creating a Anchor object** 
```javascript
//let's create anchor tag
var a = document.createElement('a');
// defining the text
var anchorTextnode = document.createTextNode('Home');
// setting the attributes
a.setAttribute('href', 'https://www.google.com');
// appending the text varaible, 'anchorTextnode' to anchor tag
a.appendChild(anchorTextnode);
// finally appending the anchor tag to the document
document.body.appendChild(a);
```
**Creating a button**
```javascript
// create button element
var btn = document.createElement('button');
// set attribute
btn.setAttribute('type', 'button');
// create textNode
var textNode = document.createTextNode('button');
// append textnode to button
btn.appendChild(textNode);
// append to document
document.body.appendChild(btn);
```
**document.appendChild:** Add an HTML element 
```javascript
var p = document.createElement('p');
var pText = document.createTextNode('this is a p tag');
p.appendChild(pText);
document.body.appendChild(p);
```

**document.replaceChild:** replace an HTML element 
```html
<h1 class="h1">This is h1</h1>
```
```javascript
// selecting h1 
var h1 = document.querySelector('.h1');
// creating p tag
var p = document.createElement('p');
// creating text node for p tag
var ptext = document.createTextNode('p tag');
// appending textnode to p tag
p.appendChild(ptext);
// replaceChild(newChild, oldchild)
document.body.replaceChild(p,h1);
```

**delete**

removeChild() Method
The removeChild() method removes a specified child node of it's parent element.
```javascript
<div class="container">
  <h1>This is hl</h1>
</div>
<h2>This is h2 tag</h2>

// selecting the parent
var parent = document.querySelector('.container');

// selecting the child
var child = document.querySelector('h1');
// h1 will be removed from the DOM

// targetting a outside element
var notChild = document.querySelector('h2');

// selecting a element which is not inside the container (parent)
parent.removeChild(notChild);
// fails 
```
**removeChild:** 

The removeChild() method removes a specified child node of the specified element.
Returns the removed node as a Node object, or null if the node does not exist.

Logic :  Select parent and add the remove child method, inside the parenthesis add the child node.
```javascript
<ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
// result 
```


# DOM Properites and Methods

### className method 
- To a single element. 

```javascript
var el = document.getElementById('#foo');
el.className = 'my-class';
```
appends it to the old classes:
```javascript
el.className += ' my-class';
```

### classList method:
- classList is pretty smart and sweet, it is definitely the future of class name manipulation! 
- The classList property returns the class name(s) of an element, as a DOMTokenList object.
- This property is useful to add, remove and toggle CSS classes on an element.

```javascript
<div id="myDIV" class="mystyle anotherClass thirdClass">I am a DIV element</div>

var x = document.getElementById("myDIV").classList;
// result: mystyle anotherClass thirdClass

var x = document.getElementById("myDIV").classList.length;
// result : 3;
```

#### classList Methods
- AddClass
```javasript
// Add multiple classes to a `<div>` element:
document.getElementById("myDIV").classList.add("mystyle", "anotherClass", "thirdClass");
```
- RemoveClass
```javascript
// Remove a class from a `<div>` element:
document.getElementById("myDIV").classList.remove("mystyle");
```
- Remove multiple classes
```
// Remove multiple classes from a `<div>` element:
document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");
```
- Toggleclass
```
// Toggle between two classes for a `<div>` element:

document.getElementById("myDIV").classList.toggle("newClassName");
```

**HTML DOM insertBefore() Method**
The insertBefore() method inserts a node as a **child**, right before an **existing child**, which you specify.
If you want to create a new list item, with text, remember to create the text as a Text node which you append to the <li> element, then insert <li> to the list.

```javascript
<ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
</ul>

var newItem = document.createElement("LI");
var textnode = document.createTextNode("Water");
newItem.appendChild(textnode);

var list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);
```

**HTML DOM id Property**
The id property sets or returns the id of an element (the value of an element's id attribute).

Get ID
```
var x = document.getElementById("myAnchor").id;
```
Set ID
```javascript
var x = document.getElementById("myAnchor") = 'newID';
```

**Contains**
The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node

```javascript
//Find out if an element has a "mystyle" class. If so, remove another class name:
var x = document.getElementById("myDIV");

if (x.classList.contains("mystyle")) {
    x.classList.remove("anotherClass");
} else {
    alert("Could not find it.");
}
```

#### element.insertAdjacentElement
We have three options in insertAdjacent
- element.insertAdjacentElement
- element.insertAdjacentHTML
- element.insertAdjacentText
For more info refer [docs.w3cub insertadjacentelement](http://docs.w3cub.com/dom/element/insertadjacentelement/)

The insertAdjacentElement() method inserts a given element node at a given position relative to the element it is invoked upon.

```javascript
targetElement.insertAdjacentElement(position, element);
```

#### Parameters
position
A DOMString representing the position relative to the targetElement; must be one of the following strings:
- 'beforebegin': Before the element itself.
- 'afterbegin': Just inside the element, before its first child.
- 'beforeend': Just inside the element, after its last child.
- 'afterend': After the element itself.

#### element
The element to be inserted into the tree.

#### Return value
The element that was inserted, or null, if the insertion failed.

#### Visulization
```html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

## Events

### HTML DOM Events
- HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
- Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

#### click events
- onclick : The event occurs when the user clicks on an element 
- oncontextmenu : The event occurs when the user right-clicks on an element to open a context menu  
- ondblclick : The event occurs when the user double-clicks on an element  
- onmousedown : The event occurs when the user presses a mouse button over an element 
- onmouseenter : The event occurs when the pointer is moved onto an element  
- onmouseleave : The event occurs when the pointer is moved out of an element  
- onmousemove : The event occurs when the pointer is moving while it is over an element 
- onmouseover : The event occurs when the pointer is moved onto an element, or onto one of its children 
- onmouseout :  The event occurs when a user moves the mouse pointer out of an element, or out of one of its children 
- onmouseup : The event occurs when a user releases a mouse button over an element  

#### keyboard events
- onkeydown : The event occurs when the user is **pressing** a key  
```<input type="text" onkeydown="myFunction()">```

- onkeypress : The event occurs when the user **presses** a key  
```<input type="text" onkeypress="myFunction()">```

- onkeyup  : The event occurs when the user **releases** a key
```<input type="text" onkeyup="myFunction()">```

#### Object Events
- onload Event : The onload event occurs when an object has been loaded. onload is most often used within the body element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.). 

The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

``` <body onload="myFunction()"> ```

window.onload waits to load the document, then execute the script

```javascript
window.onload = function () {
  document.body.children[0].onclick=function(){this.style.color = 'red'}
}
```

**Another example on onload**
window.onload waits to load the document, then execute the script
```javascript
window.onload = function () {
  document.body.children[0].onclick=function(){this.style.color = 'red'}
}
```

- onscroll Event:  The onscroll event occurs when an element's scrollbar is being scrolled.
```<div onscroll="myFunction()">```

- onresize Event: The onresize event occurs when the browser window has been resized.
To get the size of an element, use the clientWidth, clientHeight, innerWidth, innerHeight, outerWidth, outerHeight, offsetWidth and/or offsetHeight properties.
```<body onresize="myFunction()">```

#### Form Events
- onblur : The event occurs when an element loses focus  
- onchange : The event occurs when the content of a form element, the selection, or the checked state have changed (for input, select, and textarea) 
- onfocus : The event occurs when an element gets focus 
- onfocusin : The event occurs when an element is about to get focus  
- onfocusout : The event occurs when an element is about to lose focus 
- oninput : The event occurs when an element gets user input  
- oninvalid : The event occurs when an element is invalid 
- onreset : The event occurs when a form is reset 
- onsearch : The event occurs when the user writes something in a search field (for input="search")  
- onselect : The event occurs after the user selects some text (for input and textarea)  
- onsubmit : The event occurs when a form is submitted

#### Event Object
**Properties**
- bubbles : Returns whether or not a specific event is a bubbling event 
- cancelable : Returns whether or not an event can have its default action prevented 
- currentTarget : Returns the element whose event listeners triggered the event 
- defaultPrevented : Returns whether or not the preventDefault() method was called for the event 
- eventPhase : Returns which phase of the event flow is currently being evaluated  
- isTrusted : Returns whether or not an event is trusted  
- target : Returns the element that triggered the event  
- timeStamp : Returns the time (in milliseconds relative to the epoch) at which the event was created 
- type : Returns the name of the event 
- view : Returns a reference to the Window object where the event occured  

**Methods**
- preventDefault() : Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur 
- stopImmediatePropagation() : Prevents other listeners of the same event from being called  
- stopPropagation() : Prevents further propagation of an event during event flow

### Event Handlers
Events are that happen to your website and you can react to it by adding events or by invoking a function 

**inline event handlers** 
- Event handlers are also called inline event handlers. That’s because they are put right into the html elements.
```javascript
<div class="demo" onclick="alert('attaching event directly to html')">Some context</div>
```

As you can see here, the onClick handler is put right onto the the anchor element. It will alert ‘welcome’ if it is clicked. Seems pretty straightforward.

wel, when we have **multiple div elements** with onclick alert and if you want to change the event, it would be difficult to change on each element. So let's use **id** and attach the event to it

```javascript
var demo = document.querySelector('.demo');

demo.onclick = function(){
  alert('add event via id/class, demo.onclick');
}
``` 
- **Examples:** creating a **function declartion** and adding it to the **event**
```javascript
demo.onclick = individualFunction;

function individualFunction () {
  alert('individual function')
}
```
- **Examples:** creating a function seperately with **arguments** and passing it
```javascript
function individualFunction (arg) {
  alert(argu +' '+ 'individual function')
}

// adding the individualFunction to onclick event with a arugment
demo.onclick = function(){
  individualFunction('Shaktish\'s');
}

```
so what are the disadvantages of this approach?

**Disadvantages:**
- Mixing markup with functionality
You generally want to keep JavaScript separate from HTML and not mix the two. This also applies to inline styling with CSS (inline styling is generally bad).

- HTML file size
Putting event handlers in your HTML is going to make your pages a lot heavier.

- Difficult code maintenance
If you need to make changes to your event handlers you’re going to have to do so on every single element vs. changing things once in a Javascript file.

So event handlers were what came first and they work but there’s many drawbacks. Event listeners offer us a much better way to do this.

### The this keyword in event

how to identify the element which invoked the event ?
the answer is **this**

We will create a function that changes font color using style when we mousover the element.
```javascript
var demo = document.querySelector('.demo');
demo.onmouseover = changeColor;

function changeColor () {
  // targeting the demo id and styling it
  demo.style.color = 'red';
}
```
but what if we need change font color of another element ? 
Here comes the 'this' keyword, **this is gonna change the style color of the element that invoked it** 
```
function changeColor () {
  // targeting the demo id and styling it
  this.style.color = 'red';
}
```
**To style html elements, always use classes/id, define it in css and toggle it** 
let's try it now
```javascript

//css
.color {
  color:red;
}

//js
demo.onmouseover = changeColor;
demo.onmouseleave = changeColorOut;

function changeColor () {
  // adding class name using className
  this.className = 'color';
}

function changeColorOut() {
  //this.className = '';

  //using classList.remove to remove class
  this.classList.remove('color');
}
```

**Another example of toggling using classList**
```javascript
var ele = document.querySelector('h2');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  if(ele.className === 'hide') {
    ele.classList.remove('hide');
    ele.classList.add('show');
  } else if (ele.className === 'show' ) {
    ele.classList.remove('show');
    ele.classList.add('hide');
  }
})

```

## Event Listeners
This event pattern relies on something called the “observer model”. The observer is the browser. The developer registers event listeners with the browser and says “hey browser, listen up. If this particular action happens, do this (aka run this function)”.

- So event listeners are clearly an improvement over events handlers. So what are the downsides of using them?
Performance
- Event listeners are not free. Your page/app will slow down when you have to attach Event Listeners to several hundred or thousand nodes.
Tedium


**Why eventListeners?**

Cleaner and Descriptive code, Events are attached sepeartely so can be removed easily using removeEventListener

- **Inline events:** Attaching event directly to html elements is not good pratice because if we need to change, we mite need to do to all the elements which had event.

```<button onclick=someFun()> </button>``` 

  - **Attaching events to ID** could help to make changes in easier way but we can't attach more than one event. The current event overrides the prev element. 

```document.querySelector('.demo').onclick=function(){alert(someText)}```

  - but we can create **init function** and define the other functions eg **changeColor and changeFontSiz**e and call them but the problem is we can't stop the methods directly, we just hafta stop the event that **invoked** it.
```
document.querySelector('.demo').onclick=init();
init(){
  function changeColor();
  function changeFontSize();
}
```
- **addEventListeners** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With this method we can,
  - add multiple events, 
  - make the events descriptive,
  - and can use the removeEventListener to remove events easily.

```javascript
<p class="lead">This is paragraph tag</p>
<button id="btn">Stop</button>

//getting elements
var lead = document.querySelector('.lead');
var btn = document.querySelector('#btn');

//addevents
lead.addEventListener('mouseover', changeColor);
lead.addEventListener('mouseover', changeFontSize);
lead.addEventListener('mouseout', changeColorOut);

btn.addEventListener('click', function(){
  lead.removeEventListener('mouseover', changeFontSize);
})
function changeColor(){
  this.style.color = 'red';
}

function changeColorOut () {
  this.style.color = '#000';
}

function changeFontSize(){
  // increase fontsize every time when mouseover
  var fontSize = parseInt(window.getComputedStyle(this).getPropertyValue('font-size'));
  this.style.fontSize = (++fontSize) + 'px';

}
```

##### Reference links
- [javascript-events](https://appendto.com/2016/03/javascript-events-101/ "Eventlistener reference")

### Event Propagation

The standard DOM Events describes 3 phases of event propagation:
- Capturing phase : the event goes down to the element. 
- Target phase : the event reached the target element.
- Bubbling phase : the event bubbles up from the element.

Each handler can access event object properties:
- **event.target**  the deepest element that originated the event.
- **event.currentTarget** (=this) the current element that handles the event (the one that has the handler on it) the value referenced by the this keyword.
- **event.eventPhase**  the current phase (capturing=1, bubbling=3).

EventPhase give us one of three values 
- 1 = Capturing 
- 2 = Target
- 3 = Bubbling
- 0 = None (There is no event occuring);

#### Capturing
- The capture phase, where everything about the element is notified.
- Handlers added using onevent-property or using HTML attributes or using addEventListener(event, handler) don’t know anything about capturing, they only run on the 2nd and 3rd phases. 
- To catch an event on the capturing phase, we need to set the 3rd argument of addEventListener to true.

#### event.target
- The most deeply nested element that caused the event is called a target element, accessible as event.target.

**Note the differences from this (=event.currentTarget):**
- **event.target** is the target element that initiated the event, it doesn’t change through the bubbling process.
- **this** is the current element, the one that has a currently running handler on it.

#### bubbling
- The bubbling principle is simple.
  - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Phase Image:
![Phase](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1495534508eventflow.svg)


#### Stopping propagtion

**stopPropagation**

The event propagation can be stopped in any listener by invoking the stopPropagation method of the event object. This means that all the listeners registered on the nodes on the propagation path that follow the current target will not be called. Instead, all the other remaining listeners attached on the current target will still receive the event.

stopPropagation will prevent any parent handlers from being executed 

```e.stopPropagation()```

**stopImmediatePropagation**

- If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
- To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.



**Pratical Code**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Events</title>
  <style type="text/css">
    * {
      box-sizing: border-box;
    }
    .container {
      display: block;
      border:solid 1px;
      text-align: center;
      padding: 8px;
    }
    #one {
      width: 100px;
      height: 180px;
    }
    #two {
      width: 80px;
      height: 120px;
    }
    #three {
      width: 60px;
      height: 60px;
    }
  </style>
</head>
<body>
<h1>Dom events with javascript</h1>
<div class="content">
  <div id="one" class="container">
    1
  <div id="two" class="container">
      2
    <div id="three" class="container">
        3
    </div>
  </div>
</div>
<script type="text/javascript">

var content =   document.querySelector('.content');
var container =   document.querySelectorAll('.container');

container.forEach(function (ele){

  //bubbling phase by default, it is set to false
  //ele.addEventListener('click', displayEventPhase, false)

  //capturing phase, set to true
  ele.addEventListener('click', displayEventPhase, true)
})

function displayEventPhase (e) {

  // get eventPhase
  var phase = e.eventPhase;

  // for testing
  //alert(this.id);

  //@@ to stop bubbling/capturing use, e.stopPropagation
  //e.stopPropagation();

  if(1 === phase) {
    phase = 'Capturing';
  } else if (2 === phase) {
    phase = 'At target'
  } else if (3 === phase) {
    phase = 'Bubbling'
  }
    // returns the id which was clicked
    console.log('Box : ' + this.id + ' - ' + phase);
    // returns the targetID where you clicked/which invoked the event
    console.log('Box : ' + e.target.id + ' - ' + phase);

}

</script>
</body>
</html>
```


##### Reference links
- [javascript.info bubbling and capturing](https://javascript.info/bubbling-and-capturing)
- [sitepoint event bubbling javascript](https://www.sitepoint.com/event-bubbling-javascript/)
- [this vs event.target](https://stackoverflow.com/questions/12077859/difference-between-this-and-event-target)

### Event delegation
Capturing and bubbling allow to implement one of most powerful event handling patterns called event delegation.

The idea is that if **we have a lot of elements handled in a similar way**, then instead of assigning a handler to **each** of them we put a **single handler** on their **common ancestor/parent**.

In the handler we get event.target, see where the event actually happened and handle it.

The HTML is like this:
```html
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>
```
Let's also say that something needs to happen when each child element is clicked.  You could add a separate event listener to each individual LI element, but what if LI elements are frequently added and removed from the list?  Adding and removing event listeners would be a nightmare, especially if addition and removal code is in different places within your app.  The better solution is to add an event listener to the parent UL element.  But if you add the event listener to the parent, how will you know which element was clicked?

Simple:  when the event bubbles up to the UL element, you check the event object's target property to gain a reference to the actual clicked node.  Here's a very basic JavaScript snippet which illustrates event delegation:

```javascript
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if(e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
  }
});
```
Start by adding a click event listener to the parent element.  When the event listener is triggered, check the event element to ensure it's the type of element to react to.  If it is an LI element, boom:  we have what we need!  If it's not an element that we want, the event can be ignored.  This example is pretty simple -- UL and LI is a straight-forward comparison.  Let's try something more difficult.  Let's have a parent DIV with many children but all we care about is an A tag with the classA CSS class:
```javascript
// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
  // e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
  }
});
```
