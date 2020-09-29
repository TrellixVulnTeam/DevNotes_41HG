## Table of Contents
1. [Introduction to Control Flow](#introduction-to-control-flow)
2. [if/else Statements](#ifelse-statements) 
3. [True and False Values 01](#true-and-false-values-01)
4. [True and False Values 02](#true-and-false-values-02)
5. [Comparison Operators](#comparison-operators)
6. [else if Statements](#else-if-statements)
6. [Logical Operators](#logical-operators)
7. [Switch Statements](#switch-statements)
8. [Ternary Operator](#ternary-operator)
9. [Review Control Flow](#review-control-flow)

# Introduction to Control Flow

In this lesson, we'll explore how we can use the building blocks of JavaScript to write programs that make decisions.

Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. If a given condition is true, we execute one block of code. If the statement is false, we execute another block of code. 
```
let userName = '';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

```

## if/else Statements
The core task of programming is writing lists of instructions for computers, or translating our ideas from human-speak to computer-speak

"If something is true, let's do option 1, or else, if it is false, let's do option 2."

```
let needsCoffee = true;
if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}
```
## True and False Values 01
In JavaScript, all variables and conditions have a truthy or falsy value.
```
let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}
```
All variables that have been created and set are truthy (and will evaluate to true if they are the condition of a control flow statement) unless they contain one of the seven values listed below:
* false
* 0 and -0
* "" and '' (empty strings)
* null
* undefined
* NaN (Not a Number)
* document.all (something you will rarely encounter)

There is an important distinction between a variable's value and its truthiness: variableOne's value is 'I exist' because that is the data saved to the variable. variableOne is truthy because it exists and does not contain any of the seven falsy values listed above.

## True and False Values 02
In programming, we often evaluate whether or not an expression is true or truthy. Conveniently, JavaScript provides a shorthand notation for this.
```
let isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}
```
let isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}

JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!). We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true.


```
let isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}
```
## Comparison Operators
There are two more useful comparisons we can make. Often, we might want to check if two things are equal to each other or if they are not.

To check if two things equal each other, we write === (three = signs in a row).
To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).
It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.

## else if Statements

We've explored if/else statements that answer questions that are either yes or no. What can we do if we have a question that has multiple yes conditions, or multiple no conditions?
```
let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```

## Logical Operators
We can translate certain thoughts into JavaScript code such as, "Are these things equal?" with ===, or, "Is one thing greater than another thing?" with >.
In English, sometimes we say "both of these things" or "either one of these things." Let's translate those phrases into JavaScript with special operators called logical operators.

- To say "both must be true," we use &&.
- To say "either can be true," we use ||.
```
if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}
```
These logical operators are helpful when writing if/else statements since they let us make sure multiple variables are true or false.

## Switch Statements

Before we move on, let's circle back to else if statements.
Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited, however. If we want to write a program with 25 different conditions, like a JavaScript cash register, we'd have to write a lot of code, and it can be difficult to read and understand.
To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read

```
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```

## Ternary Operator

In the previous exercise, we learned shorthand for writing multiple if/else if/else statements to make them easier to read. JavaScript also provides a way to shorten simple if/else statements called the ternary operator.

```
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```

In the example above, we see a very familiar pattern. See the example below for an equivalent way to express this.
```
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');
```

## Review: Control Flow
* if/else statements make binary decisions and execute different code based on conditions.
* All conditions are evaluated to be truthy or falsy.
* We can add more conditional statements to if/else statements with else if.
* switch statements make complicated if/else statements easier to read and achieve the same result.
* The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
* Comparison operators, including <, >, <=, and >= can compare two variables or values.
* After two values are compared, the conditional statement evaluates to true or false.
* The logical operator && checks if both sides of a condition are truthy.
* The logical operator || checks if either side is truthy.
* The logical operator !== checks if the two sides are not equal.
* An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
* One equals symbol (=) is used to assign a value to a variable.
* Three equals symbols (===) are used to check if two variables are equal to each other.
