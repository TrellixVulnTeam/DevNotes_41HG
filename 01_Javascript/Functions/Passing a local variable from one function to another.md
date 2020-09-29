## Difference btw Parameters && Arguments
```
function aFunction (x,i) {
  return x, i
}
console.log(aFunction(5,10)); 
```
Here x and i are the parameters, and 5,10 are the arguments.

## Passing a local variable from one function to another 
```
function function1(){
  // defining local variable 
  var varX =12; 
  
  // In return statement, we are calling function2 
  // and also passing the local variable " varX " as argument. 
  return function2(varX);
}

// inserting a parameter for function2 
function function2(val){ 
  
  // storing the parameter in varXOfFunctionOne
  var varXOfFunctionOne = val;
  // returning the variable 'varXOfFunctionOne'
  return varXOfFunctionOne;
}

console.log(function1());
```
* To pass params to other functions, 
* create a local variable and define the second function, and pass the local variable as a argument.
* Create the second function and add a parameter so it can receive.
* In second function, manipulate the parameter and return it.
