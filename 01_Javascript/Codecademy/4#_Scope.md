## Table of Contents 
1. [Scope](#scope)
2. [Global Scope 01](#global-scope-01)
3. [Global Scope 02](#global-scope-02)
4. [Block Scope 01](#block-scope-01)
5. [Block Scope 02](#block-scope-02)
6. [### Example](#example)
7. [Block Scope 03](#block-scope-03)
8. [Review Scope](#review-scope)


# Scope

Scope refers to where a variable can be accessed in a program. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context. Scope depends entirely on where a variable is declared.

## Global Scope 01

We'll start with global scope.Variables defined in the global scope are declared outside of a set of curly braces {}, and are thus available throughout a program.
Variables declared inside curly braces {}, are referred to as a block.
```
const color = 'blue'

const colorOfSky = () => {
  return color; // blue 
};

console.log(colorOfSky()); // blue
```
* Here the variable color is declared outside of the function block, giving it global scope.
* In turn, color can be accessed within the colorOfSky function.

## Global Scope 02

While it's important to know what global scope is, it's better to avoid defining variables in the global scope. Globally scoped variables can collide with variables that are more locally scoped, causing unexpected behavior in our code.

## Block Scope 01

Because of the challenges with global scope, it is preferable to define variables in block scope.

A block refers to the {} braces of a function, a loop, or an if statement, and serves as an important structural marker for our code. Block scope means that a variable defined in the block is only accessible within the curly braces.

```
const colorOfSky = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

colorOfSky(); // blue 
console.log(color); // undefined
```
* We define a function colorOfSky().

* Within the function, the color variable is only available within the curly braces of the function.

* If we try to log the same variable outside the function, it logs undefined.

``` 
Block Scope 02 

Let's take a look at another example of block scope, as defined within an if block:
```
const colorOfSky = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

colorOfSky(); // blue
console.log(color); // undefined
```
* create a variable dusk inside the colorOfSky() function.

* After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is true.

* Within the if block, the color variable holds the value pink, though outside the if block, in the function body, the color variable holds the value blue.

* Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace.

### Example 
```
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region ='The Arctic';
  
  if(region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  //console.log(lightWaves);
}

visibleLightWaves();
//console.log(lightWaves);
```

## Block Scope 03

Let's take a look at one other common example of block scope, as defined within a for loop.
```
const cloudCount = () => {
  let i = 2;
  console.log(i); // 2
  for (let i = 0; i < 10; i++) {
    console.log(i); // All numbers from 0 to 9
  }
};
cloudCount();
console.log(i); // undefined
```
* Here the variable i is defined in the cloudCount() function.
* Within the for loop block, we again define i, as a value that will be incremented.
* The local value of i, whether defined in the function block or the for loop, has no impact on the global scope of our program.

## Review: Scope

* Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
* Global Scope refers to variables that are accessible to every part of the program.
* Block Scope refers to variables that are accessible only within the block they are defined.
