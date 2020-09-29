# Objects 


## Description

* An object is a collection of **properties**, which are described in the form of **key/value** paris, We can use objects to model "things" using code.
* We create Objects to group properties for a Object/Element.
* Example: My Coffe Cup;
* Using variables to create a model and it's properties.
```
  var coffeFlavour = "Caroumel";
  var coffeSize = "Small";
  var coffeTemperate = "Mild";
  var coffeMilk = True;
```


* It has properties such as Flavour, Small/Big, Temperature.
* We need to associate these properties to a particular elemetn, dats why we create objects

**Object Guide**
  * declare a object, use ```var = objectName```
  * Use curly brackets, (block of code);
  * use key value pairs, use **colon** ``` flavour : "caroumel"```
  * add comma, to add next property.
  * end the curly braces, with semicolon.
  

```
  var myCoffe = {
  flavour : "Caroumel",
  size : "Small",
  Temperature : "Mild",
  Milk : true;
};
```
### Use Dot notation to access object properties
```
 myCoffe.flavour
```
### Use Brackets with quotes to access object properties
* Objects are similar to array.
```
myCoffe["flavour"];
// U can even assign
myCoff['flavour'] == "choclate";

console.log(myCoff['flavour']);
// answer: choclate;
```

# Methods
* When an object has a property with a function as the value, its is referred to as a **method** of that object.
### Eg:
*  When we use console.log(), log is a method of console object.
* When we use Math.random(), random()is a method of the Math object.

var myCoffe = {
  flavour : "caramel",
  temperature : "piping hot",
  ounces : 100,
  milk : true,
  reheat : function(){
    if (myCoffe.temperature === "cold") {
      myCoffe.temperature = "piping hot";
      alert("Your coffe has been reheated");
    }
  }
}

myCoffe.temperature = "cold";
console.log(myCoffe.temperature)

myCoffe.reheat();

console.log(myCoffe.temperature);


# Object Literals and Object Constructors
## Undestanding Objects
* When we created our myCoffe, we created it using what is called an object **Literal**, When we create objects this way, we are both defining and creating a single object. referred as an **instance** of an object

* what if we want to create multiple instances of an object?? We can create something called an **object constructor**, in which we use a **function** to create multiple instances of an object. Each instance **inherits** the properties and methods of its constructor.


## Object Constructor 
* Create named function, 
* Constructors first letter should be Caps.
* Use **this** keyword, it refers to the object
* Add key/value pairs, key = this.key | value = pass it in function parameter
```
function Friend (name, tshirtColor) {
  this.name = name;
  this.tshirtColor = "tshirtColor"
}

var John = new Friend ("John", "Orange");

console.log(John.name);
```

## Object Oriented Programming

* Procedural way : Running code step by step

* Object Oriented : We create Objects, and pass code back and forth amongst one antoher as needed.

### Understanding Objects

* Take a thing = Object, Eg : Cat
* Describe the thing
  * Characterstics : properties;
  * Actions : Methods;
``` 
**Properties**
Laziness : true,
Size : large

**Actions** 
Meow,
Sleep
```

### We can create object in two ways
* Object Literal : create an **Instance**
* Object Constructor : Define Tempalte for an object or define Prototype, from prototype we can create many instances.

### Three types of Objects
* Host Objects
  * Host objects defined by the environment you run the code
  * A web browser is an example of host environment.
  * Document, Window, Element, Event, Console are defined by host objects.
* Core Objects 
  * Core objects are defined built into javascript language itself.
  * Math, Object, String, Boolean, Array, Date
* Objects defined by Author 
  * Example jQuery, Angular Js
  
### This and the global object
* Javascript uses **Objects** as a way of passing around and sharing code and functionality. When we create var, functions and objects, they are properties of the global object.
* The window is the global object when the host environment is the web. When we write a function that isn't associated with an object, it becomes a method of the global object. E.g if we write a function called sayHello(). we can also use the method window.sayHello();
* All of our code is been added to the window as properties to the window object. Remeber, we are running the code in host environment (Window).
```
function writeFunc () {
  alert("Hello");
}

// invoking func;
writeFunc()

// invoking func as method by window object
window.writeFunc();
```
### Understanding Scope

* If we create things dat are global in scope, we are giving any code the supreme power to control our code. So we want to protect our code by being very careful when creating things that are global in scope. 
###
* Js uses function scope, meaning every time we create a new function the scope changes. Any code inside that function is local to that function. Code dat is local in scope in not accessible to outside code.
```
// global var;
var three = 3;
function alertNum() {
 var one = 1;
 alert(one);
  function alertAnothNum(){
    var two = 2;
    alert(two);
    alert(three);
  }
  // invoke func
  alertAnothNum();
  
  // var 'two'is out of scope;
  alert(two);
}
alertNum();
```
### Coding conventions and using JSLint
* Use linting tool like JSLint,to write code in a standard way
* Whitespace takes up more memory, makes your code slower

### Simple Game
* Solider : attack/sneak = win
* Doctor : attack/sneak = lose
* Politician : attack = lose
* Politician : sneak = win


```
var output;

// scenearious
var scenes = ["You are lost, you are in the middle of the dark night", "You are in a broken building, finding your way out","You're inside an Zombie apclaypse, trying to loot gold"];

function random(range) {
  return Math.round(Math.random() * range);
}

// random scenarious

alert(scenes[ random(scenes.length -1) ]);

// creating character instance;

var character = {
  health : 5,
  stealth : 0,
  strength : 0,
  name : window.prompt("What is your name?"),
  type : ""
}

// validation for character name 

if (character.name === ""){
  character.name = window.prompt("Please enter your name, else i ll name you");
}
  if(!character.name){
    character.name = "John";
    alert("I warned you, Your name is John");
  }

// validation for character type 
if (character.type === "") {
  character.type = window.prompt("What were you before the war, Solider, Doctor, Politician").toLowerCase()
} 
  if(!character.type){
    alert("You fail to choose");
    character.type = "doctor";
    alert("So the default is Doctor");
  }

// defining character's ability by its type 

if (character.type === "solider") {
  character.strength = 7;
} 

if (character.type === "doctor") {
  character.health = 7;
}


if (character.type === "politician") {
  character.stealth = 6;
}


var choice = window.prompt("So you were a former " + character.type + " so " + character.name + " A zombie is coming to attack you, what are u going to do ? Attack or Sneak").toLowerCase()

if (choice === "attack") {
  if (character.strength > 5 ) {
    alert("You attack the zombie with your bare hands, and you smack him");
    output = "win";
    character.strength ++;
  } else {
    alert("You hit the zomibe but zombie slides and bites you");
    output = "lose";
  }
}

if (choice === "sneak") {
  if (character.stealth >= 5 ) {
    alert("You sneak aways from the zombie with your sneaking ability");
    output = "win";
    character.stealth ++;
  } else if (character.stealth < 5) {
      alert("You alert the zombie")
    if (character.strength > 5) {
      alert("Though u alerted, you sneaked away");
      output = "win";
    } else {
      alert("Zombie bites you");
      output = "lose";
    }
  } 
}

if (output === "win") {
  alert("You won");
} else {
  alert("You lose")
}

```


