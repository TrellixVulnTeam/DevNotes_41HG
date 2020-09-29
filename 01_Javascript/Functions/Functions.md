# Functions

## What is a Function Declaration?
- A Function Declaration defines a named function variable without requiring variable assignment. 
- Function Declarations occur as standalone constructs and cannot be nested within non-function blocks. 
- It’s helpful to think of them as siblings of Variable Declarations. 
- Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
```
function bar() {
    return 3;
}
```

## What is a Function Expression?
- A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). 
- Functions defined via Functions Expressions can be named or anonymous. 
- Function Expressions must not start with “function” (hence the parentheses around the self invoking example below)
```
//anonymous function expression
var a = function() {
    return 3;
}
 
//named function expression
var a = function bar() {
    return 3;
}
 
//self invoking function expression
(function sayHello() {
    alert("hello!");
})();
```
## what’s Hoisting?
- To quote Ben Cherry’s excellent article: “Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter”.
- When a function declaration is hoisted the entire function body is lifted with it, so after the interpreter has finished with the code.



**References**
https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
