# Objects in Javascript

## Table of Contents
1. [Inheritance and the prototype chain](#inheritance-and-the-prototype-chain)
2. [Creating objects - Function constructors](#creating-objects---function-constructors)
3. [Prototype chain in the console](#prototype-chain-in-the-console)
4. [Creating Object - Object.create](#creating-object---object-create)
5. [Primitives vs Objects](#primitives-vs-objects)
6. [First Class Functions: Passing Functions as Arguments](#first-class-functions--passing-functions-as-arguments)
7. [First Class Functions: Functions Returning Functions](#first-class-functions--functions-returning-functions)
8. [Immediately Invoked Function Expressions](#immediately-invoked-function-expressions)
9. [Closures](#closures)
10. [Bind, call and apply](#bind-call-and-apply)


## Inheritance and the prototype chain
Everything is an object, almost everything

- Primitives
	- Numbers
	- Strings
	- Booleans
	- Undefined
	- Null
- Everything else is an object
	- Arrays
	- Functions
	- Objects
	- Dates
	- Wrappers strings, booleans 

### Object-oriented programming
- Objects interacting with one another through method and properties.
- Used to store data, structure, applications into modules and keeping code clean.

#### Constructor (blue print)
Imagine a blueprint, from where we can generate as many objects as we want.

```javascript
//Constructor
function Person = (name,yearOfBirth,job, calculateAge) {
	name = this.name;
	yearOfBirth = this.yearOfBirth;
	job = this.job;
	calculateAge = function () {
		return 2017 - this.yearOfBirth;
	};
}
```
- This is a special person object dat we can basically use as a blueprint to create a lot of person object
```javascript
// creating a instance from Person constructor 
var shaktish = new Person ('shaktish',1992,Developer);

//console
shaktish.name //'shaktish'
```

#### Inheritance
Now,lets take one step further with inhertiance, to simplify, when one object is based on another object. It's when one object gets access to another object's properties and methods 

#### Javascript is a prototype based language 
- Inhertiance works by using something called prototype, It means each and every js object has a **prototype property** which makes inheritance possible in js.
- We have prototype chain, this is how it works, wen we try to access a certain **method or property** on an object javasript wil try to find dat method on that **exact object** bt if it cannot find it will look in the object's prototype which is prototype property of its **parent.** So it moves up in the prototype chain if the method is still not there, it continues until ther is no more prototype to look at, which is **null**


## Creating objects - Function constructors 

Let's create a normal object. 
```javascript
// object
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};
```
Lets create a **Function constructor** to create an object.
```javascript
// Function constructor
var Person  = function (name,yearOfBirth,job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth,
  this.job = job;
  // method
  this.calculateAge = function () {
    return 2017 - this.yearOfBirth;
  }
}

// create an instance of an object, Person object
var john = new Person('John', 1990,'teacher');
var jane = new Person('Jane', 1969,'desginer');
var mark = new Person('Mark', 1948,'retired');	
```

- To understand how **instance works**,  we need to first understand what the **new** operator does. 
- when we use a new operator, a brand **new empty object is created**, then after that the constructor function which in this case is Person, is called with the arguments we specified. 
- so calling a function creates a new execution context that also has a this variable.  now we now dat in a regular func call, **this** points to global object but by using the **new operator** it makes the **this** variable points to the empty object that was created in the beginning by the new operator 

#### Time for inheritance 

```javascript
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
```

- So in our Person object, we have a method **calculateAge**, when we make a new instance, the method is attached to all instances, which can avoided throught inhertaince.

```javascript
// adding a method via prototype
Person.prototype.calculateAge = function () {
	return 2017 - this.yearOfBirth;
}
john.calculateAge(); // 26
jane.calculateAge(); // 47
mark.calculateAge(); // 68

```
- now all the instances have access to calculateAge method because it's in prototype. 

## Prototype chain in the console
The javascript console in our browser is very poweful tool to inspect objects and the prototype chain

Let's inpsect our object, John object that we declared earlier.
- Type 'john' in console, u ll see the constructor name and properties 
- U can see a small arrow, click on the arrow to view the additional information about the object
- Properites wil be listed, down below you can see **__proto__** and this is in fact the prototype of the john object, here u can find the calculateAge method that we added in Person prototype.
- Person.prototype has the same proto of john
```javascript
Person.prototype === john.proto
```
- console.log john, inside john proto, u can find another proto, it's prototype of the **object constructor**
- All of the objects are instances of the object object.
- **hasOwnProperty**, this is a object constructor property, it is used to check if an object has a own property
```javascript
john.hasOwnProperty('job');
// true
john.hasOwnProperty('hobbies');
// false
```
- **instanceof**, to check if an object is a instanceof a object.
```javascript
john instaneof Person
//true
```

- Lets create an array
```javascript
 var arr = [1,2,3];
 console.info(arr);
```
- **console.info(arr)** to get info about of a object, see inside u have a property length and see proto, and inside that u have a list of array methods such as slice, pop, join etc

## Creating Object - Object-create
We have seen the pattern constructor to create objects from a blueprint but there are more ways to create objects and inheritance, lets see object.create method now

- In object.create method, we first defined an object that will act as the prototype and then create a new object based on that very prototype

```javascript
//object.create
var personProto = {
	calculateAge : function () {
		console.log(2017 - this.yearOfBirth);
	}
}

var john = Object.create(personProto);
john.name = 'john';

```
- First, we have to write the prototype as a simple object.
- then create new object here, john using **object.create(prototypeName)** and pass in the object dat we defined to be the prototype object.
- then we create the properties in the old way by accessing the john object. ```john.name = 'john';```
- let's add the properties as params to object.create
```javascript
var jane = Object.create(personProto, {
	name : {value : 'jane'},
	yearOfBIrth : {value : '1990'},
	job : {value : 'designer'}

})
```
One of the biggest benefits of object.create is its allows us to implement a really complex inheritant structures in an easier way then function constructors because its allows us to directly specify which object should be a prototype

## Primitives vs Objects
- The big difference between primitives and objects is that variables containing primitives actually hold that data inside of the variable itself, which means it creates a copy in the scope.
- On object it's very different, variables do not actually contain the object but instead they contain a reference to the place in a memory where the object sits, so where the object is stored.
- A variable declared as an object does not have a real copy of the object, it just points to the object.

#### variables primitive
```javascript

// variables - primitives
var a = 1; // a has a value 1 
var b = a; // b is assigned to a, value of1
var a = 2; // we change var a to 5

//let's console the variables
console.log(a);  // 2  - changed value, which is 2
console.log(b);  // 1  - its holds the data at the moment when it was assigned which was 1
``` 
in objects, if we create a object and set it another object, it doesn't create a new object, no copy was created, all dat we did was to create a new reference which points to he first object

#### objects

```javascript
//object

var person1 = {
	name:'john',
	age : 24
}
// assigning person2 to person1 obj
var person2 = person1

// lets change a property of person1 
person1.name = 'shaktish'

console.log(person1.name); // shaktish 
console.log(person2.name); // shaktish
```
person1 and person2 variable both hold a reference that point to the exact same object in the memory and that's why when we changed person1.name, the change is also reflected on person2 becasue it's the exact same object  

#### functions 
```javascript
var a = 6;
var person = {
  name : 'shakie',
  age : 24
}

function change (a,b){
  a = 12;
  person.age = 18;
  console.log('loggin inside' + a);
}

change();
console.log(a, person.age);

// "loggin inside12"
// 6
// 18
```
## First Class Functions- Passing Functions as Arguments
Functions are also objects, with that said we can do the same things we can do with objects 
- A function is an instance of the Object type 
- A function behaves like any other object 
- we can store functions in variables 
- we can pass a function as an argument to another function 
- we can also return a function from a function 
Thats why we say that in javascript, we have **first class functions**

Let's see how functions accept functions as arguments 
```javascript
var years = [1988,1992,2000,1987];

function myFunc (arr,fn){
  var newArr = [];
  for(var i=0; i < arr.length; i++){
    newArr.push(fn(arr[i]));
  }
  
  return newArr;
}
function calculateAge (el) {
  return 2017 - el;
}

function fullAge(el){
  return (2017 - el ) >= 18;
}

var ages = myFunc(years, calculateAge);
var major = myFunc(years, fullAge);

console.log(ages);
console.log(major);
```
- we can create a fucntion that accepts function as a parameter, and using that function we can manipulate the data, the cool thing is we can create different callback functions.

## First Class Functions- Functions Returning Functions
For this, let's create interview question for different jobs, for each job, we will return the function dat build a string using the person's name as an input so basically a function returning another function 

```javascript
function interviewQuestion(job){
	if(job === 'designer'){
		return function (name) {
			return name + 'what is ux design?'
		}
	} else if (job === 'developer') {
		return function (name) {
			return name + 'what is html'
		}
	} else {
		return function (name) {
			return 'what do u do' + name;
		}
	}
}

// interviewQuestion function returns a function, so let's store it in a variable. so we will call this a developer question
var developer = interviewQuestion('developer')

// the return function requires a parameter, so pass your name.
developer('shaktish');

// what is html
```
Let's do it another way
```javascript

//we don't need to store the function in a variable we can use the parenthesis once again put the name.

interviewQuestion('developer')('shaktish')
// what is html
```

## Immediately Invoked Function Expressions
How do you keep a variable private?
You kno, you can use functions to create private variable like this

```javascript
function game (){
	var score = Math.floor(Math.random () * 10 );
	if(score >= 5){
        console.log(score);
		console.log('win');
	} else {
        console.log(score);
		console.log('lose');
	}
}

game();
```
we can do this in IIFE, but first let's how IIFE is created
- whats inside a parenthesis can't be a statement and js knows this is a expression not declartion.
```javascript
function (){
	
}

// wrap the function inside a parenthesis

(function () {
	
})

// invoke it

(function () {
	
})();

``` 

Example 
```javascript
(function(){
	var score = Math.floor(Math.random () * 10 );
	if(score >= 5){
      console.log('the score '+score);
		console.log('win');
	} else {
        console.log(score);
		console.log('lose');
	}
})();
```
we can even add parameters to IIFE like this, here we add goodluck variable as a parameter. 
```javascript
(function(goodluck){
	var score = Math.floor(Math.random () * 10 + goodluck);
	if(score >= 5){
        console.log('the score '+score);
		console.log('win');
	} else {
        console.log(score);
		console.log('lose');
	}
})(2);

```


## Closures
An inner function has always access to variables and parameters of its outer functions even after the function has returned

Let's write a function that calculates a person age until retirment
```javascript
function retirement(retirmentAge){
	var a = ' years left until retirment';
	return function (yearOfBirth) {
		var age = 2017 - yearOfBIrth;
		console.log((retirmentAge - age) + a);
	}
}

var india = retirement(60)
india(1992);
```
- we started by calling the retirment function and passed the value of 60
- the function then declares this 'a' variable and returns a function then functions finishes, and its execution context gets popped off the stack.
- so we store the retriment func in india variable
- here comes the cool part, wen we calla india(1992), we use the retirementAge paramater of this outer function and also the 'a' variable dats also declared outside of this anonymous function and stil if we runs this. it works 
- think bout it again, our india function is able to use the retirementAge and 'a' variable of this function is already gone, it has already returned but smhow the variables are stil there and this is **closure**

#### Closures why & how 
An inner function has always access to the variables and parameters of its outer functiom, even after the outer function has returned.

- Execution Context 
	- are variables, functions present in the context or are they garbage collected.
- Scope Chain 
	- the variables which have access
- Lexcially 
 	- lexcially written code, so the functions have access to the outer functions and variables 

Let's do the interviewQuestion function dat we did earlier using closures.

```javascript
function interviewQuestion(job){
  return function (name) {
    if(job === 'developer') {
      return name + ' what is html';
    } else if (job === 'designer') {
      return name + ' what is ux?'
    } else {
      return name + ' what do u do?'
    }
  }
}
```
## Bind, call and apply
Functions also get a couple of methods which they inherit from the function constructor object. 
- In a nutshell, these methods allows us to call a function and set the this variable manually

### call method

Let's see a example 
```javascript
var john = {
	name : 'john',
	age : 24,
	presentation : function (style,time) {
		if (style === 'formal'){
			console.log('Hi everyone, I\'m '+ this.name + ', good ' + time);
		} else {
			console.log('Hi guys, whats up? The name is ' + this.name + ', good ' + time);
		}
	}
}

//john.presentation('formal', 'evening');

var jane = {
  name : 'jane',
  age : 25,
}

john.presentation.call(jane, 'casual', 'morning');
```

- let's first select the object's method which we need to borrow the method from, here it's the john object, presentation method, so ```john.presentation.call()```
- the call method's first argument 'this' variable, set the this variable to jane object, and set the other arguments, this is called method borrowing from john.

### apply method
This is similar to the call method, the only difference is that this once accepts the arguments as an array, so that's only two variables, first this variable and array where all the arguments go.

```javascript
object.method.apply(this,array)
john.presentation.apply(jane,['casual','night']);
```

### bind method
Bind method is also very similar to call method, it also allows us to set the **'this'** variable explicitly. however the difference here is that bind doesn't immediately **call the function**, but instead it generates a cope of the function so we can store it somewhere.
```javascript
var johnFriendly = john.presentation.bind(jane,'formal');
johnFriendly('noon');
```

- Bind method **returns a function**, so we need to store in a variable.
- we gonna preset the friendly argument so dat we don't need to set it in, let's call this function johnFriendly, and the object name, with the method and bind, the arguments for bind are 'this' and arguments normal way.

/*
### Using bind in regular function
- create a function declartion
```
function subtract (x){
  console.log(x - 5);
}
subtract(10);

```
- Let's use the bind method, remember it **returns a function** so store it in a variable, 
- bind method allows u set the arguments, the first wil always be **this**, so u can set the first argument
- let's set the argument to 20, so 20 - 5 = 15
```
var twenty = subtract.bind(this, 20);
twenty(5) // 15

var ten = subtract.bind(this, 10);
ten(100); // 90

```




















































