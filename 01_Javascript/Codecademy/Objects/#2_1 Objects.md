# Creating Javascript objects

### Object Literals
```
 var rat = {
  name : "ratatolie",
  size : "small",
  type : "chef"
 }
 console.log(rat.name);
```

### Constructor function 
```
var Cat = function () {
  this.name = "Bake"
  this.color = "white"
}
var bake = new Cat ();
console.log(bake);
```
### Object.create to create objects 
```
var dog = Object.create(Object.prototype, {
  name : {
    value : "Chorky",
    enumerable : true,
    writable :true,
    configurable :true
  },
  color : {
    value : "brown",
    enumerable : true,
    writable : true,
    configurable :true
  }
})
console.log(dog);
```
### Create Js objects using ECMAScript 6 Classes to create js objects
```
'use strict';

class Cat {
  constructor(name,color) {
    this.name = name
    this.color = color
    this.action = function () {
      console.log("bites");
    }
  }
  
  speak() {
    console.log("Meoow");
  }
}

var cat = new Cat("Chubby", "Yellow");

console.log(cat);
console.log(cat.speak);
console.log(cat.action);
```
# Javascript Object Properties
* Use bracket notation, useful when you want to get output from a user, using JSON

```
var cat = {
  name : "Catsy",
  color : "pink",
}

console.log(cat["name"]);
```
## Using JavaScript Property Descriptors
* we can get property descriptor using Object.getOwnPropertyDescriptor(objectName, 'key',{writable : false});
* We have four properties for every key/value pair property in object
  * configurable: true,
  * enumerable: true,
  * value: "mario",
  * writable: true

```
'use strict';

var cat = {
  name : "mario",
  color : "white"
}

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
```

## Using the Writable Attribute
* It defines whether the properties value can be changed or not
* Use Object.defineProperty to change property descriptor property
* (cat, 'name', {writable : false}); *

```
'use strict';

var cat = {
  name : "mario",
  color : "white"
}
//getting Property Descriptor
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
// getting cat name
console.log(cat.name);
// setting writable to false
Object.defineProperty(cat, 'name', {writable : false});
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
// assinging cat name to "duke"
cat.name = "duke"
// 'use strict'; mode to see the error
console.log(cat.name);
// cat name is mario, it's not changed
```
* Even though cat name is read only, u can change the value of the property object.  

```
'use strict';

var cat = {
  name : {firstname : 'mario', lastname : 'derek'},
  color : "white"
}

Object.defineProperty(cat, 'name', {writable:false});
cat.name = "chubby";
console.log(cat.name);

// if the property contains an object, we can change it

cat.name.firstname = "chubby";
console.log(cat.name);

```

* we can prevent object being changed by using object.freeze 
```
Object.freeze(cat.name)
```
* the entire cat.name has become ready only


## Using the Enumerable Attribute

### Using for in loop
* We can use for in loop to loop over on any object like this.

```
var cat = {
  name : {firstname : 'mario', lastname : 'derek'},
  color : "white"
}

for (var propertyName in cat ) {
// it returns the name of the property
  console.log(propertyName);
// we can use bracket notation to get the key and value
  console.log(propertyName + ':' + cat[propertyName]);
}

```
### Enumerable Attribute
* By default, properties in an object is ennumerable, meaning we can loop over them using for in loop, We can change that

'''
Object.defineProperty(cat, 'name',{enumberable : false})
```
* setting enumerable to false wil also make the key not to showup in object keys.
```
// Object.keys return the keys, but it won't show the name key coz enumerable is set to false
console.log(Object.keys(cat));
```
* Setting enumberable to false, also affects JSON serialization, the key won't show up in json as wel.

``` console.log(JSON.stringify(cat)); ```

## Using the Configurable Attribute

* The configurable property locks down a property from being changed.
* if configurable is false for a property, You can't change the enumerable attribute, configurable attribute, and can't delete property
* You can however change the writable property

```
Object.definePropert(cat, 'name', {configurable : false});
```
// can't change enumerable property, coz configurable s set to false.
Object.definePropert(cat, 'name', {enumerable : false});

// can't delete a property
delete cat.name // throws an error

```
## Using Getters and Setters

* Getters and setters that allow you to specify a return value of a property, using a function and set a value of a property using a function

* lets set a getter property, to create getters and setters, we have to use define Property

```
var cat = {
  name : {firstname : 'mario', lastname : 'derek'},
  color : "white"
}

// getter
Object.defineProperty(cat, 'fullName', {
  get : function () {
    return this.name.firstname + " " + this.name.lastname
  }
})

console.log(cat.fullName);
```

* Now, lets set a setter property to set first and last name;

```
var cat = {
  name : {firstname : 'mario', lastname : 'derek'},
  color : "white"
}

Object.defineProperty(cat, 'fullName', {
  get : function () {
    return this.name.firstname + " " + this.name.lastname
  },
  set : function (value){
    var nameParts = value.split(' ');
    var part1 = this.name.firstname = nameParts[0];
    var part2 = this.name.lastname = nameParts[1];
    return part1 + " " + part2;
  }
})

cat.fullName = "Tiger kit";
console.log(cat.fullName);
```



