# Introduction to Javascript

## Data Types
Data types are the building blocks of all languages and essential pieces of any program.
Four primitive data types that lay the foundation for all JavaScript programs.
* Strings — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, 'New York City' is a string.
* Numbers — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, 40.7 is a number.
* Booleans — Either true or false, with no quotations. In the example above, true is a boolean.
* Null — Can only be null. It represents the absence of value.

## Math Operators
JavaScript supports the following math operators:
* Add: +
* Subtract: -
* Multiply: *
* Divide: /

## Properties
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type.

JavaScript will save a new piece of data, like 'Hello', as a string instance in the computer's memory. Another example, the number 40.7, is stored as an instance of the number data type.

An instance, like the string 'Hello', has additional information attached to it.

For example, every string instance has a property called length that stores the number of characters in it. You can retrieve property information by appending the string with a period and the property name:
``` console.log('Hello'.length); ```

## Built-in Methods

While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.

Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:
```
console.log('Hello'.toUpperCase()); // 'HELLO'
console.log('Hey'.startsWith('H')); // true

```
You can find a list of built-in string methods in the JavaScript documentation. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

## Libraries
Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.

One such collection contains mathematical methods, aptly named the Math library.

Let's see how you call the .random() method from the Math library:
``` console.log(Math.random()); // random number between 0 and 1 ```

## Comments
As we write JavaScript, we can create comments in our code.
* A single line comment will comment out a single line and is denoted with two forward slashes // preceding a line of JavaScript code.
``` 
// The first 5 decimals of pi
console.log('Pi is equal to ' + 3.14159);
```
* A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.
```
/*
console.log('All of this code');
console.log('Is commented out');
console.log('And will not be executed);
*/
```

## Review Types and Operators
* Four essential data types in JavaScript include strings, numbers, booleans, and null.
* Data is printed, or logged, to the console with console.log().
* Four built-in mathematical operators include +, -, *, and /.
* JavaScript associates certain properties with different data types.
* JavaScript has built-in methods for different data types.
* Libraries are collections of methods that can be called without an instance.
* You can write single-line comments with // and multi-line comments between /* and */.
