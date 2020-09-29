## Function
- variable hoisting, function hoisting
- keywords: `this`, `arguments`
- Implict return is undefined

## Constructor function
- Invoked using `new` operator
- `this` refers to a new instance
- Implict return is `this`

## Prototype
- `inhertiance` happens via prototype
- common `properties` can be shared within instance by attaching them to `prototype` property
```js
// constructor
var Person = function (name) {
  this.name = name
}
Person.prototype.getName = function () {             // share common properties
  return this.name;
}
// constructor
var Employee = function (name, prof) {
  Person.call(this, name);
  this.prof =  prof
}
Employee.prototype = Object.create(Person.prototype); // Inheritance
Employee.prototype.constructor = Employee;            // update constructor value
Employee.prototype.getProf = function () {            // share common properties
  return this.prof;
}

var emp = new Employee ('parker', 'swimming');
```

## singleton pattern
- The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.
  - Immediately invoked function expression
  - return Closure function
  - the closure function, in turn returns the reference
```js
var personSingleton = (function() {
  var instance;
  var Person = function (name) {
    this.name = name
  }
  Person.prototype.getName = function () {
    return this.name;
  }
  // closure
  return function (name) {
    if(!instance) {
      instance = new Person(name)
    }
    return instance;
  };   
})();

var emp = personSingleton();
var emp2 = personSingleton();
console.log(emp === emp2);
```

### Example 2
```js
var singetonSchool = (function () {
	var inst;
  function School (nam,loc,standards) {
	  this.nam = nam;
	  this.loc = loc;
	  this.standards = standards;
	}

	School.prototype.getBio = function () {
	  return console.log(`The School name is ${this.nam} It is located in ${this.loc} Takes ${this.standards} `);
	};

	return function () {
	   	if (inst === undefined) {
	   		inst = new School.apply(null, arguments);
	   	}
		return inst;
	};

})()


var a = singetonSchool('camford', 'chittoor', 'till ssc');
var b = singetonSchool('camford', 'chittoor', 'till ssc');
```

### Example 3 Creating Singleton using Functions
```js
var get = (function  () {
  var num;
  return function (x) {
		if (num === undefined)  {
			num = x;
		}
			return num;
	};
}) ();
```
