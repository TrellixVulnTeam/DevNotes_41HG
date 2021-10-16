- [Javascript](#javascript)
  - [The Role of Javascript in Web Development](#the-role-of-javascript-in-web-development)
- [Object and Primitives](#object-and-primitives)
- [A brief history of Javascript](#a-brief-history-of-javascript)
  - [Modern Javascript Today](#modern-javascript-today)
    - [ES5](#es5)
    - [ES6](#es6)
- [Javascript Fundamentals](#javascript-fundamentals)
  - [Strict Mode](#strict-mode)
  - [Functions](#functions)
    - [Function Anatomy](#function-anatomy)

# Javascript
Javascript is a High-level, Object oriented, Multi-paradigm programming language 

Programming Language
- Instructs computer to do things 
Hight-level 
- We don't have to work about complex stuff like memory management 
Object Oriented
-  Based on Objects for storing most kinds of data 
Multi-paradigm 
- We can use different styles of programming such as imperative and declarative programming
  - Imperative programming is a programming paradigm that uses statements that change a program’s state
  - Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow.

```javascript
// imperative example
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);

// declartive example

class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```
The differences here may be subtle. We still have logic that says if red then blue, but there’s one huge difference. The React example never actually touches an element. it simply declares an element should be rendered given our current state. It does not actually manipulate the DOM itself.

When writing React, it’s often good not to think of how you want to accomplish a result, but instead what the component should look like in it’s new state. 


## The Role of Javascript in Web Development
Javascript is a scripting/programming language that allows you to implement complex features on web pages.
- Display timely content updates 
- Interactive maps
- Animated 2d/3d graphics 
- Scrolling video jukeboxex etc

HTML + CSS + JS = Web Page

# Object and Primitives
- Object 
- Primitive 

The 7 Primitive Data types
- Number : Floating point numbers (Used for Decimals and integers )
- String : Sequence of characters 
- Boolean : Logical type that can be true or false
- Undefined : Value taken by a variable that is not yet defined ('empty value') 
- Null : Also means 'empty value'
- Symbol (ES2015) : Value that is unique and cannot be cahnges (Not useful for now)
- BigInt(ES2020) : Larger Integers tahn the Number type can hold

# A brief history of Javascript 
- 1995 : Brendan Eich creates the very first version of Javascript in just 10 Days. It was called Mocha but already had many fundamental of modern javascript 
- 1996 : Mocha changes to LiveScript and then to JavaScript, in order to attarct Java developers. However Javascript has almost nothign to do with Java
  - Microsoft launches IE, copying Javascript from Netsacpe and calling it Jscript
- 1997 : With a need to standarize the language, ECMA release ECMAScript 1(ES1) the first official standard for Javascript 
- 2009 : ES5 is released with lots of greate new features
- 2015 : ES6 was released, the biggest update to the language ever!
  - EcmaScript changes to an annual release cylce in order to ship less features per update 
- 2016 : Release of ES2016 / ES2017 / ES2018 / ES2019 / ES2020 / ES2021 / … / ES2089

Backwards Compatibility
- Dont break the Web 
- Old features are never removed

## Modern Javascript Today
- Use Chrome during devlopment
- Use Babel to transpile and polyfull your code (converting back to es5 to ensure browser compatibility for all users)
  
### ES5
- Fully supported in all browsers (down to IE9 from 2011);
- Ready to be used today 

### ES6
- ES6+ Well supported in all modern browsers 
- No support in older browsers
- Can use most features in production with transpiling and polyfilling 

# Javascript Fundamentals 

## Strict Mode 
JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript

To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other statements.

```javascript 
// Whole-script strict mode syntax
'use strict';
```

Strict mode makes several changes to normal JavaScript semantics:
- Eliminates some JavaScript silent errors by changing them to throw errors.

Example 
- Strict mode makes it impossible to accidentally create global variables. 
- Strict mode reserves private, undefined words 
```javascript 
'use strict';      
// Assuming no global variable mistypeVariable exists
// this line throws a ReferenceError                                        
mistypeVariable = 17;  

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError
```


## Functions 
Function is simple piece of code that we can reuse over and over again.

Function Declarations 
```javascript
function calcAge (birthYear)  {
  return 2037 - birthYear
}
```

Function expression
```javascript
const calcAge = function (birthYear)  {
  return 2037 - birthYear
}
```

Arrow functions
```javascript
const calcAge = (birthYear) => return 2037 - birthYear
```

### Function Anatomy 
![alt text](https://github.com/shaktish/DevNotes/blob/master/01_Javascript/images/functionAnatomy.PNG?raw=true "FunctionAnatomy")

