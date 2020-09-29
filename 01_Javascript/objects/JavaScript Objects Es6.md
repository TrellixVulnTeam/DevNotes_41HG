# JavaScript Objects

## Table of Contents
1. [Objects](#objects)
    - [Accessing Object Properties](#accessing-object-properties)
    - [Adding a Property](#adding-a-property)
    - [Editing a Property](#editing-a-property)
    - [Methods](#methods)
    - [this keyword](#this-keyword)
    - [Getters and Setters](#getters-and-setters)
2. [Introduction to Classes ](#introduction-to-classes)
    - [Constructor](#constructor)
    - [Instance](#instance)
    - [Methods, Getters and Setters](#methods-getters-and-setters)
    - [Inhertiance](#inhertiance)

## Objects 
* JavaScript objects are containers that can store data and functions. 
* You can create an object with key-value pairs 

**Syntax** 
``` 
const constName = {
	key : 'value',
	key2 : 'value2'
}
```
**Example**
```
let restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
};
```

## Accessing Object Properties
You can access object properties in two ways:
* dot notation
* bracket notation

### Dot notation
we connect the value's name to the key name with a period 
``` 
let restaurant = {
  name: 'Italian Bistro'
}

console.log(restaurant.name);
```
### Bracket notation
Just like with dot notation, we can use opening ( [ ) and closing ( ] ) brackets to access a key. 
``` 
let restaurant = {
  name: 'Italian Bistro'
}

console.log(restaurant['name']);
```
* One advantage that bracket notation has over dot notation is that you can use variables inside the brackets to select the keys of an object.
```
let meal = 'none';
let time = 12;

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 none: 'There are no specials currently'
};

if (time < 11) {
  meal = 'breakfast';
} else if (time < 5) {
  meal = 'lunch';
}

console.log(restaurantSpecials[meal]);
```
* On the last line, we wrote restaurantSpecials[meal]. The meal variable is not a key in the restaurantSpecials object. 
* Because we are using bracket notation, JavaScript looks at the meal variable's value. 
* In this case, meal is set to 'lunch' within the if/else statement because time is equal to 12. 
* Since special equals 'lunch', **writing restaurantSpecials[meal] is the same as writing restaurantSpecials['lunch'] — the code outputs the lunch special.**

## Adding a Property
* We attach a new key to our object using dot or bracket notation.
* Objects are considered mutable, which means you can change them after they're created. Even if you save an object to a const variable.

```
const person = {
	name : 'shaktish'
}

person.age = 24;	//dot notation
person['age'] = 24;	// bracket notation
```

## Editing a Property
In the same way that we added a property to an object, we can modify a key's value.
```
person.age = 30;	//dot notation
person['age'] = 30;	// bracket notation
```

## Methods
When objects have key-function pairs, we call the function a method.

**Syntax** ```objectName.methodName()```

```
const person = {
  name : 'shaktish',
  age : 24,
  getInfo : function () {
  	return `Hello World! by function`;
  },
  // arrow function
  getInfo2 : () => `Hello World! by arrow function`,
  // ES6 method doesn't require arrow syntax or a colon (:) with the function keyword.
	getInfo3 () {
  	return `Hello World! by es6 method`
  }
  
}

console.log(person.getInfo());
console.log(person.getInfo2());
console.log(person.getInfo3());
```

## this keyword
- this helps us with scope inside of object methods. 
- this is a dynamic variable that can change depending on the object that is calling the method.

```
const person = {
	name : 'shaktish',
 	age : 24,
	getInfo () {
  	return `I am ${age} years old`
  }
}
console.log(person.getInfo()); //Uncaught ReferenceError: age is not defined 
```

**To address this scope issue, we can use the this keyword to access properties inside of the same object.**
```
const person = {
	name : 'shaktish',
  age : 24,
	getInfo () {
  	return `I am ${this.age} years old`
  }
}
console.log(person.getInfo()); //I am 24 years old
```
- In Javascript, this refers to the object we call it inside.

**For instance**
```
let myObj = {
  name: 'shaktish',
  sayHello() {
    return `${this.name} says hello!`;
  }
};
```
- If we call myObj.sayHello(), our method will return 'Miti says hello!'. 
- this in the example above is called inside the myObj object, which limits the scope to the properties inside of myObj.

**Let's change that by switching the object calling this:**

```
let secondObj = {
  name: 'Timer'
};

secondObj.sayHello = myObj.sayHello;
// Sets the sayHello method on yourObj to be the sayHello method on yourObj
```

## Getters and Setters
- Getter and setter methods allow you to process data before accessing or setting property values.
- A common object design paradigm is to include getter and setter methods as attributes.
- Getter and setter methods get and set the properties inside of an object.
		- You can check if new data is valid before setting a property.
		- You can perform an action on the data while you are getting or setting a property.
		- You can control which properties can be set and retrieved.

- Developers use an underscore before a property name to indicate a property or value should not be modified directly by other code.
- Creating setters for all attributes that you want to access later.

- For instance, if you want change a name in a object, we use setters.
- To get the name, we use getters.

```
const person = {
  _name : 'shaktish',
  _age : 24,
  // set name, with a parameter
  set name (newName) {
  	if(typeof newName === 'string'){
    	return this._name = newName; 
    }	else {
    	console.log('invalid name!')
    	return 'invalid name';
    }
  },
	get name () {
  	return this._name;
  }
}

// set name 
//person.name = 12; // invalid name
person.name = 'Srinivas'
//get name
console.log(person.name);
```
### Anther Example of Getters and Setters

```
const team = {
  _players : [{
		firstName: "Shaktish",
		lastName:"kumar",
		age: 24
		},
		{
			firstName: "Prakash",
			lastName:"Pro",
			age: 23
		},
		 {
			firstName: "Annamalai",
			lastName:"Annz",
			age: 25
		}
		],
_games : [{
              opponent: "Vegeta",
              teamPoints:42,
              opponentPoints: 27
            },
            {
              opponent: "Freiza",
              teamPoints:35,
              opponentPoints: 15
            },
            {
              opponent: "Cell",
              teamPoints: 22,
              opponentPoints: 15
            }
					 ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName,lastName,age) {
    const addPlayer = {
      firstName : firstName,
      lastName : lastName,
      age: age 
    }
    this.players.push(addPlayer)
  },
  addGame (name,teamPoints,opponentPoints) {
    const addGame = {
      name : name,
      teamPoints : teamPoints,
      opponenetPoints : opponentPoints
    }
    team.games.push(addGame);
  }
}

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Kabuza',50,67);
team.addGame('TItans',100,98);

console.log(team.players);
console.log(team.games);
```
## Introduction to Classes 
- JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance, Classes are templates for objects.
- Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
- Javascript calls a constructor method when we create a new instance of a class.

### Class declarations
One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Hoisting
Function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
```
var p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Class expressions
A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.

```
/ unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
Note: Class expressions also suffer from the same hoisting issues mentioned for Class declarations.


**For example**
- when you want to create a catalog of all the dogs who belong to the daycare, there comes the "class"
- classes are a great way to reduce duplicate code and debugging time.
- Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name.

## Constructor
- The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class
- A constructor can use the super keyword to call the constructor of a parent class.

```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
- Dog is the name of our class
- JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
- this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.

## Instance
An instance is an object that contains the property names and methods of a class, but with unique property values. 

```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```
- We create a new variable named halley that will store an instance of our Dog class.
- use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
- We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
- Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

## Methods, Getters and Setters
- Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

```
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }

  const halley = new Dog('Halley');
  console.log(halley.name) // name
  console.log(halley.behavior) // 0;
  console.log(halley.incrementBehavior) // 1, we are incrementing behaviour
  console.log(halley.behavior) // 1;
```

- The syntax for calling methods and getters on an instance is the same as calling them on an object, use instance name, with period, method name followed by () parenthesis.

### Static Methods
- Sometimes you will want a class to have methods that aren't available in individual instances, but that you can call directly from the class. Examples : Date, Math etc
- Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. he .now() method is static, so you can call it directly from the class, but not from an instance of the class.

Lets create a static method called generateName method in our Animal class:
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}
```
In the example above, we create a static method called .generateName() that returns a random name when it's called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

We call the .generateName() method with the following syntax:
``` console.log(Animal.generateName()); // returns a name ``` 

You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses.

## Inhertiance
Inheritance is when we create a parent class with properties and methods that we can extend to child classes.

Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a Cat class so we can quickly generate Cat instances. We know that the properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.

** Example: See, the Dog instance above and cat instane below, shares couple of same properties and method.**
```
class Cat {
  constructor(name,usesLitter) {
    this._name = name;
    this._behavior = 0;
    this._userLitter = usesLitter;
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  get usesLitter() {
    return this._usesLitter;
  }

  incrementBehavior() {
    this._behavior++;
  }

```
- When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.
- With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Let's abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}
```
In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).

Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

```
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```
Let's pay special attention to our new keywords: extends and super.
- The extends keyword makes the methods of the animal class available inside the cat class.
- The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
- The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
- _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.
- Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error.

Below, we create a new Cat instance and call its name with the same syntax as we did with the Dog class:

``` 
const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce
```

- Now that we know how to create an object that inherits properties from a parent class let's turn our attention to methods.
- When we call extends in a class declaration, all of the parent methods are available to the child class.
- In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

```
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}
```
See how we would create an additional subclass, called Dog.
```
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```

## Classes Exercise 
```
class School {
  constructor (name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name () {
    return this._name;
  }
  get level () {
    return this._level;
  }
  get numberOfStudents () {
    return this._numberOfStudents;
  }
  
  quickFacts () {
    return `${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`
  }
  
  static pickSubstituteTeacher (substituteTeachers) {
    let randomArr = Math.floor(Math.random() * substituteTeachers.length);
    return 'Your subsitute teacher is ' +  substituteTeachers[randomArr];
  }
  
  set numberOfStudents (newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number'){
      return this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('invalid name');
      return 'invalid name';
    }
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name);
    this._level = 'PrimarySchool';
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy () {
    return this._pickupPolicy;
  }
}

const camford = new PrimarySchool('Camford',400,'Give and Take');

//console.log(camford.pickupPolicy);

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name);
    this._level = 'high';
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams () {
    return this._sportsTeams;
  }
}

const kings = new HighSchool('Kings',250,['Cricket','Volleyball']);
//console.log(kings.sportsTeams);

const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury.quickFacts());
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool ('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeams);
```
