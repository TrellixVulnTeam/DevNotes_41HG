### Table of Contents 
- [Introduction to Javascript](#introduction-to-javascript)
  - [Variables](#variables)
  - [Create a Variable: const](#create-a-variable-const)
  - [Create a Variable: let](#create-a-variable-let)
  - [Undefined](#undefined)
  - [Mathematical Assignment Operators](#mathematical-assignment-operators)
  - [String Interpolation 01](#string-interpolation-01)
  - [String Interpolation 02](#string-interpolation-02)
  - [Review Variables](#review-variables)

# Introduction to Javascript

## Variables
Programmers use variables to write code that is easy to understand and repurpose.
Variables allow us to assign data to a word and use the word to reference the data. If the data changes, we can replace the variable's value instead of re-writing the program.

```
// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);
```
## Create a Variable: const
Let's dive in and see a variable in the wild. Here is how you declare a constant variable:
```
const myName = 'Arya';
console.log(myName);
// Output: Arya
```
Let's consider the example above:
* const, short for constant, is a JavaScript keyword that creates a new variable with a value that cannot change.
* myName is the variable's name. Notice that the word has no spaces, and we capitalized the N. Capitalizing in this way is a standard convention in JavaScript called camelCasing, because the capital letters look like the humps on a camel's back.
* = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
* 'Arya' is the value assigned (=) to the variable myName.
* After the variable is declared, we can print 'Arya' to the console with: console.log(myName).

You can save any data type in a variable. For example, here we save numbers:
```
const myAge = 11;
console.log(myAge);
// Output: 11
```

## Create a Variable: let
Constant variables, as their name implies, are constant — you cannot assign them a different value.
Let variables however, can be reassigned.
```
let meal = 'Enchiladas';
console.log(meal);
meal = 'Tacos';
console.log(meal);
// output: Enchiladas
// output: Tacos

```
You may be wondering, when to use const vs let. In general, only use const if the value saved to a variable does not change in your program.

## Undefined
What happens if you create a variable, but don't assign it a value?
JavaScript creates space for this variable in memory and sets it to undefined. Undefined is the fifth and final primitive data type. JavaScript assigns the undefined data type to variables that are not assigned a value.
``` let whatAmI; ```
In the example above, we created the variable whatAmI without any value assigned to it. JavaScript creates the variable and sets it equal to the value undefined.

## Mathematical Assignment Operators
In this exercise, let's consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:
```
let x = 4;
x = x + 1;
```

In the example above, we created the variable x with the number 4 assigned to it. On the following line, x = x + 1 increases the value of x from 4 to 5.

Notice, on line two in the example above, to increment x by one we had to write the x variable on the left and right side of the assignment operator (=). Using a variable twice in one expression is redundant and confusing.

To address this, JavaScript has a collection of built-in mathematical assignment operators that make it easy to calculate a new value and assign it to the same variable without writing the variable twice. See examples of these operators below.

```
let x = 4;
x += 2; // x equals 6

let y = 4;
y -= 2; // y equals 2

let z = 4;
z *= 2; // z equals 8

let r = 4;
r++; // r equals 5

let t = 4;
t--; // t equals 3

```
## String Interpolation 01
The JavaScript term for inserting the data saved to a variable into a string is string interpolation.
The + operator, known until now as the addition operator, is used to interpolate (insert) a string variable into a string, as follows:
```
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
```

## String Interpolation 02
In the newest version of JavaScript (ES6) we can insert variables into strings with ease, by doing two things:
- Instead of using quotes around the string, use backticks (this key is usually located on the top of your keyboard, left of the 1 key).
- Wrap your variable with ${myVariable}, followed by a sentence. No +s necessary.

ES6 string interpolation is easier than the method you used last exercise. With ES6 interpolation we can insert variables directly into our text.
```
let myPet = 'armadillo'
console.log(`I own a pet ${myPet}.`)
// Output: 'I own a pet armadillo.'
```
In the example above, the backticks (`) wrap the entire string. The variable (myPet) is inserted using ${}. The resulting string is:

## Review Variables

* Variables hold reusable data in a program.
* JavaScript will throw an error if you try to reassign const variables.
* You can reassign variables that you create with the let keyword.
* Unset variables store the primitive data type undefined.
* Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
* The + operator is used to interpolate (combine) multiple strings.
* In JavaScript ES6, backticks (`) and ${} are used to interpolate values into a string.
