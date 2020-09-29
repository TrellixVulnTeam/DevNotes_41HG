### Closure
* Closure = callback/function + connection to the variables at the birth place:

```
function createIncrementor(x) { // x: variable at birth place
    function closure() {
        // Connection to x remains:
        x++;
        return x;
    }
    return closure;
}
const inc = createIncrementor(7);
console.log(inc()); // 8
console.log(inc()); // 9

```
### Objects and Constructors

* This section covers two basic object-oriented mechanisms of JavaScript: single objects
and constructors (which are factories for objects, similar to classes in other languages).

* In JavaScript, you can directly create plain objects, via object literals:
```
'use strict';
var jane = {
	name: 'Jane',
	describe: function () {
	return 'Person named '+this.name;
	}
};
```

The preceding object has the properties name and describe. You can read (“get”) and
write (“set”) properties:
```
> jane.name // get
'Jane'
> jane.name = 'John'; // set
> jane.newProperty = 'abc'; // property created automatically
```

#### The in operator checks whether a property exists:
```
'newProperty' in jane
true 
'foo' in jane
false
```

If you read a property that does not exist, you get the value undefined. Hence, the
previous two checks could also be performed like this:
```
> jane.newProperty !== undefined
true
> jane.foo !== undefined
false
```
The delete operator removes a property:
```
> delete jane.newProperty
true
Objects
```

#### Arbitrary Property Keys
* A property key can be any string. So far, we have seen property keys in object literals
and after the dot operator. However, you can use them that way only if they are identifiers. 
* If you want to use other strings as keys, you have to quote them in an object literal and use square brackets to get and set the property:
```
> var obj = { 'not an identifier': 123 };
> obj['not an identifier']
123
> obj['not an identifier'] = 456;
Square brackets also allow you to compute the key of a property:
> var obj = { hello: 'world' };
> var x = 'hello';
> obj[x]
'world'
> obj['hel'+'lo']
'world'
```

### Extracting Methods

* If you extract a method, it loses its connection with the object. On its own, the function
is not a method anymore, and this has the value undefined (in strict mode).

```
'use strict';
var jane = {
	name: 'Jane',
	describe: function () {
	return 'Person named '+this.name;
	}
};
```
* We want to extract the method describe from jane, put it into a variable func, and call
it. However, that doesn’t work:
```
> var func = jane.describe;
> func()
TypeError: Cannot read property 'name' of undefined

```
* The solution is to use the method bind() that all functions have. It creates a new function
whose this always has the given value:

```
> var func2 = jane.describe.bind(jane);
> func2()
'Person named Jane'
```
### Functions Inside a Method
* Every function has its own special variable this. 
* This is inconvenient if you nest a function inside a method, because you can’t access the method’s this from the function.
* The following is an example where we call forEach with a function to iterate over an
array:

```
var jane = {
name: 'Jane',
friends: [ 'Tarzan', 'Cheeta' ],
logHiToFriends: function () {
	'use strict';
	this.friends.forEach(function (friend) {
	// `this` is undefined here
	console.log(this.name+' says hi to '+friend);
	});
}
}
// TypeError: Cannot read property 'name' of undefined
// Calling logHiToFriends produces an error:
```
Let’s look at two ways of fixing this. First, we could store this in a different variable:
```
logHiToFriends: function () {
'use strict';
var that = this;
this.friends.forEach(function (friend) {
console.log(that.name+' says hi to '+friend);
});
}
```
Or, forEach has a second parameter that allows you to provide a value for this:
```
logHiToFriends: function () {
'use strict';
this.friends.forEach(function (friend) {
console.log(this.name+' says hi to '+friend);
}, this);
}
```

### Array Methods

#### Slice method 
* Slice method is inclusive 

arr.slice(startIndex, lastIndex) > inclusive

var arr = [ 'a', 'b', 'c' ];
arr.slice(1, 2) // copy elements
[ 'b' ]
arr.slice(1)
[ 'b', 'c' ]


#### Iterating over Arrays

##### forEach 
* iterates over an array and hands the current element and its index to a function:
```
[ 'a', 'b', 'c' ].forEach(
function (elem, index) { // (1)
console.log(index + '. ' + elem);
});
The preceding code produces the following output:
0. a
1. b
2. c
```
* Note that the function in line (1) is free to ignore arguments. It could, for example, only
have the parameter elem.

* map creates a new array by applying a function to each element of an existing array:
```
[1,2,3].map(function (x) { return x*x })
[ 1, 4, 9 ]
```

### Regular Expressions3
* JavaScript has built-in support for regular expressions. They are delimited by slashes
```
/^abc$/
/[A-Za-z0-9]+/
```
####  Method test(): Is There a Match?
* returns true or false
```
/^a+b+$/.test('aaab')
true
/^a+b+$/.test('aaa')
false
```

#### Method exec(): Match and Capture Groups
```
> /a(b+)a/.exec('_abbba_aba_')
[ 'abbba', 'bbb' ]
```
