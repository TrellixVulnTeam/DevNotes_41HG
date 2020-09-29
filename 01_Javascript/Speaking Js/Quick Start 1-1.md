# Speaking Js

### Primitive Values 
* Booleans
* Numbers
* Strings
* Two non values: undefined, null

* Primitive values are compared by values.
```
//The values are compared
 3 === 3
true
'abc' === 'abc'
true
```
### Objects
* All nonprimitive values are objects
* Object literals, Array Literals, Regular expression literals
*  Object are compared by reference
* Identities are compared; every value has its own identity:
```
 {} === {} // two different empty objects
false
 var obj1 = {};
 var obj2 = obj1;
 obj1 === obj2
true
```
### undefined and null
* undefined means no value. Uninitialized variables are undefined:
```
var foo;
console.log(foo);
undefined
```
* Missing parameters are undefined:
```
 function f(x) { return x }
 f()
//undefined
```
* If you read a nonexistent property, you get undefined:
```
var obj = {}; // empty object
obj.foo
undefined
```

### Categorizing Values Using typeof and instanceof
#### There are two operators for categorizing values: 
* typeof is mainly used for primitive values, 
* while instanceof is used for objects.

#### Truthy and Falsy

#### The following values are interpreted as false:
* undefined, null
* Boolean: false
* Number: -0, NaN
* String:

 #### All other values (including all objects!) are considered true.
* Boolean(undefined)
``` false ```
* Boolean(0)
``` false ```
* Boolean(3)
``` true ```
* Boolean({}) // empty object
``` true ```
* Boolean([]) // empty array
``` true ```

### Binary Logical Operators
* Binary logical operators in JavaScript are short-circuiting. That is, if the first operand
suffices for determining the result, the second operand is not evaluated. For example,
in the following expressions, the function foo() is never called:
```
false && foo()
true || foo()
```

* Furthermore, binary logical operators return either one of their operands—which may
or may not be a boolean. A check for truthiness is used to determine which one: And (&&) 
* If the first operand is falsy, return it. Otherwise, return the second operand:

#### And (&&)
```
> NaN && 'abc'
NaN
> 123 && 'abc'
'abc'
``` 
#### Or (||)

* If the first operand is truthy, return it. Otherwise, return the second operand:
```
'abc' || 123
'abc'
'' || 123
123
``` 
### Switch Statement
```
var fruit = '';
switch (fruit) {
  case "banana": 
    console.log("banana");
    break;
  case "apple":
    console.log('apple');
    break;
  default : 
    console.log('default');
}
```
### For loop
```
for (var i=0; i < arr.length; i++) {
console.log(arr[i]);
}
```
### While loop
```
var i = 0;
while(i < arr.length) {
	console.log(arr[i]);
	i++;
}
```
###  do while loop
```
var i=0;
do {
	//
	i++;
} while (i < arr.length)
```
### Exception Handling
```
function getPerson(id) {
if (id < 0) {
throw new Error('ID must not be negative: '+id);
}
return { id: id }; // normally: retrieved from database
}
```
