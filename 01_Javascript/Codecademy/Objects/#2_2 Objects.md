# JavaScript Objects and Prototypes

## JavaScript Prototypes and Inheritance 

* lets create an array 
```var arr = ['red','green','blue'];```
* now imageine we want to get the last array; which is blue;
* typically we ll do this; arr[arr-length-1];
``` var arrlast= arr[arr.length-1]; ```
* but what if we want to simplify it like this

``` 
var last = arr.last        
console.log(arrlast);
```
* js objects don't have last property so it won't work, but js is dynamic, so we can add our own last property, 
* I ll do that with defineProperty

```
Object.defineProperty(arr,'last', {
  get : function () {
    return this[this.length-1];
  }
}) 
```
* We have a problem, now if i craete another array, it won't have last propety,
```
var arr2 = ['one','two','three'];
```
* lets add the **last** property to **Array.prototype**, so we can access last property to all arrays.
```
Object.defineProperty(Array.prototype, 'last',{
  get : function () {
    return this[this.length-1];
  }
})
```

## What is a prototype?

* A prototype is an object exists on every function in javascript
* So notice if we create a function 

```
var myFunc = function () {}
console.log(myFunc.prototype);
// empty object
```
* Also notice prototype is juz an emtpy object, Objects however don't have prototype property
```
// object
var cat = {
}
console.log(cat.prototype);
// undefined
```
* An object have __proto__ property
```
// object
var cat = {
}
console.log(cat._proto__);
// object...object
```

* **A Function's Prototype:** A function's prototype is the object **instance** that will become the prototype for all objects created using this fucntion as a constructor.

* **An Object's prototype:** An object's prototype is the object **isntance** from which the object is inherited.

```
'use stirct';
//lets create a constructor func
function Cat (name, color) {
  this.name = name
  this.color = color
}

console.log(Cat.prototype); // [object Object] { ... } it has a prototype. 

// creting instance frm a constructor 
var fluffy = new Cat ('fluffy', 'white');

// this is an object, it has no prototype property, check object.__proto__
console.log(fluffy.__proto__); // it has a __proto__

// Fluffy was created by constructor fucntion Cat, which shares the same prototype,
console.log(Cat.prototype === fluffy.__proto); // true

// add a property to Cat constructor func, it reflects on it's instances coz its the same object.
Cat.prototype.age = 13;

// fluffy gets age property
console.log(fluffy.__proto__)

```

# Instance vs. Prototype Properties

* It's important to know, dat if u ask an object for the value of one of its properties, jus coz it gives an answer doesn't mean that object has it's property, It may be one of the prototype chain

* Instance properties override prototype property.

```

'use stirct';
//constructor
function Cat (name, color) {
  this.name = name
  this.color = color
}
Cat.prototype.age = 4;

var fluffy = new Cat ('fluffy','red');
var karb = new Cat ('karb','yellow');

//fluffy.age = 6;

console.log(fluffy.age); // property from instance
console.log(fluffy.__proto__.age); // property from prototype

// displaying keys
console.log(Object.keys(fluffy)); // ['name','color'];

// hasOwnProperty();

console.log(fluffy.hasOwnProperty('age')); // returns false coz property coming frm prototype 

```
