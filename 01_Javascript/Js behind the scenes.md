# How javascript works behind the scenes
## Table of Contents
1. [How our code is Executed](#how-our-code-is-executed)
2. [Execution context and Execution stack](#execution-context-and-execution-stack)
3. [Hoisting in Practice](#hoisting-in-practice)
4. [The 'this' keyword](#the-this-keyword)


## How our code is Executed

- Js runs in some environment, most typically in browser such as google chrome, safari etc
- The host/browser which runs javascript has **javascript engine** that takes our code and execute it.
- A javascript engine executes js code
- first, our code is parsed by a parser, which reads our code line by line, check if it's correct.
- so this means the parser knows the js rules, so if u make mistakes, it throws errors.
- If everything is correct though, then the parser produces a data structure known as **Abstract syntax tree,** which is then translated into **machine code**, which means this is no longer js code, it's just a set of instructions that can be executed directly computer's processor.

### What happens to our code?

Inside the **JS Engine**

| Our code | Parser | Coversion to machine code | Code Runs   |
| :--------: |:--------:| :-------------------------: |----- |
| `var x = 6;` | Abstract syntax tree |Machine code | `var x = 6;` |

- Different engines do things in a slightly different way
---

## Execution context and Execution stack
All js codes has to be run in an environment and these environments are called execution context 

- **Execution context** A box/container or a wrapper which store variables and which a peice of your code evaluated and executed.
- The default execution context is always **Global Execution context**
	- Code that is not inside any function
	- Associated with the global object 
	- In the browser, that's the window object.
- Everything we declare in the global context is attached to window object in the browser. 	
```javascript
var lastName = 'kumar';
lastName === window.lastName;
//true
```
- It's like ```lastName``` is a property of a window object. **(properties are just variables attached to objects)**
- Each time we call a function, it gets it's own brand-new execution context. Let me show that by an example.
```javascript
var name = 'shaktish';

function sayHello () {
	var greets = ' says hello'
	console.log(name + greets);
}

sayHello ()
```
- ```var name = 'shaktish'```, this var declaration is not in any function so we are in global context so this variable is stored in global object.  
- next this function ```sayHello``` declaration is also in global context so we are still in global execution context.
- next, ``sayHello()``` function is called, so a new function gets new execution context so what happens is this new execution context is put up on top of the current context forming **the execution stack**.
	- Execution Context: sayHello ()
	- Global Execution Context 
- now we're inside the ```sayHello``` function, the variable ```greets``` gets stored and console.log get printed in console and the function returns and it gets removed of the execution stack and we are back to global execution context.

### Execution Context Object in Detail
We can associate an execution context with an object, and this object has three properties.
- **Variable Object (vo)** (which contains function arguments, inner variable declarations as well as function declartions)
- **Scope chain** (contains the current variable objects as well as var objects of all its parents)
- **this object**

When a **function** is called a **new execution context** is put on top of the **execution stack**, and this happens in two phases.
- **Creation Phase** 
	- Creation of the Variable Object (vo).
	- Creation of the scope chain
	- Determine the 'this'value.

- **Execution Phase**	
	- then in the execution phase, the code and function that generated the current execution context is run line by line and all the variables are defined.
	- If it's global context, then it's global code. 
		
### Let's look at the creation of the variable object, in the creation phase.
- The argument object is created, containing all the arguments that were passed into the function.
- Code is scanned for **function declartions:** for each function, a property is created in the Variable object, **pointing to the function**.
	- This means all the functions will be store inside the variable object even before the code starts executing
		
- and lastly, the code is scanned for variable declartions, for each variable a property is created in the variable object and set to undefined. and these last two points are called **Hoisting**.
- Functions and Variables are hoisted in js, which means they are available before the execution phase actually starts, they are hoisted different way, though.
- The difference btw variable and function hoisting is functions are already defined **(pointing to the function)** before the execution phase starts while variables are set up to **"undefined"** and will only be defined in the **execution phase**. 

## Hoisting in Practice

### Function declartion
- let's declare getName function and return a name. 
```javascript
function getName (){
	return 'shaktish'
}

console.log(getName());
// shaktish
```
- now, let's call getName() first and function declartion before the creation phase of the execution.

```javascript
getName()

function getName (){
	return 'shaktish'
}
console.log(getName());
// shaktish
```
- and it still works ! How ?
- getName() is stored in the variable object and even before the code is executed
- this only works for **function declartions**

### Function expression 

```javascript
var getName = function () {
	return 'shaktish';
}

console.log(getName());
// shaktish
```
- Let's try like we done it in function declartion, calling the function before the creation phase.
```javascript
console.log(getName());
var getName = function () {
	return 'shaktish';
}
// "TypeError: getName is not a function"
```
- hoisting function only works for function declartions 

### Variable hoisting 

```javascript
console.log(lastName) // undefined
var lastName = 'kumar'
console.log(lastName) // kumar
```
- we are accessing the variable before we declare in our code. thats why we get ```undefined```
- remember, in the **creation phase**. variables are scanned for variable declartions and set to undefined. 

### Another example 
``` javascript
/* 1. */console.log(age);
var age = 23;
function bar () {

	/* 2. */console.log(age);
	var age = 50;. 
	/* 3. */console.log(age);
}
bar ();
/* 4. */console.log(age);

/*
tries to print the first console, which is in global context. accordin to var hositing, it s set to undefined.
1. undefined
- bar function is called, gets its new context, and variables get hoisted, var age, and is set to undefined.
- tries to print the second console.
2. undefined
- now, age is set to 50, third console prints the age, 
3. 50
- gets out of bar function execution context and back to global context
4. tries to print the fourth console, it prints the age, 23 which is declared in globally.
*/
```

## Scoping and the scope chain
- we talked hoisting which is the first phase, creation phase. Now let's talk about the second phase, the creation of the scoping chain. 
- scoping answers the question, where we can access a certain variable/function.
- **Each new function creates a scope:** the space/environment in which the variables, it defined are accessible. 
	- In many languages, scopes are created by if blocks, for blocks & why bocks but not in js
	- the only way to create scope in js is by creating a function
- **Lexical Scoping:** a function that is lexically within another function gets access to the scope of the outer function. 
	- In js, we have lexical scoping which means "something is written in the code", so its about the position of something witnin our code.

```javascript 
var a = 'hello';
first();

function first () {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		console.log(a+b+c);
	}
}
```	
#### Execution Stack
- Global Scope (var a, first function) [VO Global]
	- First() scope [VO1] + [VO Global]
		- Second() scope [VO2] + [VO1] + [VO Global]
#### SUMMARY
- Like said, According to lexical scoping, the variables have access to **parent function.**
- Example: here, in second() has a ```var c = 'hey!'``` and has access to ```var b and var a```, this is exactly called **scope chain**.

## The 'this' keyword
**'this'** variable is a variable that each and every execution context gets and it is stored in the execution context object.
- **In regular function call:** the 'this' keyword points at the global object. (the window object, in the browser). [default]
- **Method call:** A method is a function that is attached to an object, the **'this'** variable points to the **object** that is calling the method.
	- the this keyword is not assigned a value until a function where it is defined is acutally called.

### Let's Pratice
- Let's check 'this' keyword in console, function and in an object
```javascript
// type in console
console.log(this) //points to window object

// function declartion
function getName () {
	console.log('shaktish');
	console.log(this);
}
getName();
// 'shaktish'
// 'window object'

// object
var person = {
	name : 'shaktish',
	age : 24,
	getName : function () {
		console.log(this)
		console.log(this.name)
	}
}

person.getName();
// Object{name:'shaktish',age:24}
// 'shaktish'
```
- In an object, the 'this' variable now is the Person object, as mentioned. The 'this' keyword refers to the object that called the method, in this case it was Person object. 

```javascript
var person2 = {
	name : 'srinivas',
	age : 24
}
```
- the person2 object doesn't have a method, lets use the **borrow-method** in action.
```javascript
// defining getName method to person2 from person.
person2.getName = person.getName;
// calling person2.getName method
person2.getName();
``` 
- So again, the **'this'** keyword only becomes something as soon as the method gets called. 

### Borrow method
How will u get d value to c ?
```javascript
c = 10
d = 15
```
Ans : by assigning d value to c 
```
d = c;
```

Object
```javascript
var myObj = {
  name : 'Shaktish',
  age : 24,
  getInfo : function () {
    console.log('Returns: Name and Age  '+this.name + this.age);
  }
}

var myObj2 = {
  name : 'Santhosh',
  age : 100
}

//property : value 
myObj2.getInfo = myObj.getInfo;
myObj2.getInfo();
```

## Fast summary
Execution Context Object

- Variable obj : scans var/functions : Hoisting happens, variables are set to undefined. funcs are hoisted
- Scope chain : where var are accesible, functions create scope, js has lexical scoping, childrens have access to parents 
- this keyword : is determined in exection phase, when can as method from an object. this == object




