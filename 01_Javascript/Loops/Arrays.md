## Table of Contents 
1. [Array basics](#array)
2. [Array methods](#array-methods)
    - [splice ()](#splice)
    - [slice ()](#slice)
    - [indexOf ()](#indexof)
    - [sort ()](#sort)
    - [push ()](#push)
    - [pop ()](#pop)
    - [shift ()](#shift)
    - [unshift ()](#unshift)
3. [Array Iterator Methods](#array-iterator-methods)
    - [forEach ()](#foreach)
    - [map ()](#map)
    - [filter ()](#filter)
    - [some ()](#some)
    - [every ()](#every)
    - [reduce ()](#reduce)

# Array
The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.
it is used to store multiple values in a single variable:

## Accessing array elements
JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus 1.

**syntax** ```array[0];```
```
var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the second element'
```
## Update Elements 
change elements of an array using their indices.
```
let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons) 
```
## Length property 
The length property sets or returns the number of elements in an array.

**syntax** array.length;
```
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);
```

# Array methods

## splice
The splice() method adds/removes items to/from an array, and returns the removed item(s).

**syntax** ``` array.splice(index, howmanytoremove, item1, ....., itemX)```
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//Banana,Orange,Lemon,Kiwi,Apple,Mango
```
## slice
The slice() method returns the selected elements in an array, as a new array object.
Note: The original array will not be changed.

**syntax** ``` array.slice(start, end) ```

```
let seasons = ["Winter", "Spring", "Summer", "Fall"];

//slice creates a duplicate of array
var newArr = seasons.slice(0,2);

console.log(seasons);
//["Winter", "Spring", "Summer", "Fall"]

console.log(newArr);
//["Winter", "Spring"]
```

## indexOf 
The indexOf() method searches the array for the specified item, and returns its position.

**syntax** ``` string.indexOf(searchvalue, start) ```
```
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
```
## sort
The sort() method sorts the items of an array.
The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order.

**syntax** ``` array.sort(compareFunction) ```
```
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
```
### to sort numbers 
```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

## push
The push() method adds new items to the end of an array, and returns the new length.

**syntax** ``` array.push(item1, item2, ..., itemX) ```
```
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```
## pop
The pop() method removes the last element of an array, and returns that element.

**syntax** array.pop()
```
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
```
## shift
The shift() method removes the first item of an array, and returns that item.

**syntax** ``` array.shift() ```
```
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
```
## unshift
The unshift() method adds new items to the beginning of an array, and returns the new length.

**syntax** array.unshift(item1, item2, ..., itemX)
```
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
```
# Array Iterator Methods
JavaScript provides array methods to simplify iteration.
## forEach()
* The forEach() method calls a provided function once for each element in an array, in order. 
Callback is invoked with three arguments.
* It is an array method. It must be called upon an array.
* Any changes to the iterated array value won't be updated in the original array.
* The return value is undefined.


**Return value undefined**

**Syntax**
```
array.forEach(function(currentValue, index, arr), thisValue)
```

```
const arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
```
## map()
* The map() method creates a new array with the results of calling a function for every array element.
* map() does not execute the function for array elements without values.
* map() does not change the original array.

**Syntax** ```array.map(function(currentValue, index, arr), thisValue)```

```
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

## filter ()
* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
* filter() does not execute the function for array elements without values.
* filter() does not change the original array.

**Syntax** ```array.filter(function(currentValue, index, arr), thisValue)```

```
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var longWords = words.filter(function(word){
  return word.length > 6;
});

// Filtered array longWords is ["exuberant", "destruction", "present"]
```

## some ()
* The some() method tests whether at least one element in the array passes the test implemented by the provided function.
* If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
* Otherwise it returns false

**Syntax**
``` array.some(function(currentValue, index, arr), thisValue) ```

```
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

## every ()
* The every() method tests whether all elements in the array pass the test implemented by the provided function.
* every() does not change the original array

**Syntax** ``` array.every(function(currentValue, index, arr), thisValue) ```

```
function isBigEnough(element, index, array) { 
  return element >= 10; 
} 

[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

## reduce() 
* The reduce() method reduces the array to a single value.
* The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
* The reduce() method executes a provided function for each value of the array (from left-to-right).
- u can define the accumulator value like this ```arr.reduce(function(){...},0);```

**Syntax** ``` array.reduce(function(total, currentValue, currentIndex, arr), initialValue) ```

```
// create an array
var numbers = [0, 1, 2, 3];

/* call reduce() on the array, passing a callback
that adds all the values together */
var result = numbers.reduce(function(total, currentValue) {
    return total + currentValue;
},0);

// log the result
console.log(result);
// expected output: 6
```

## includes ()

* The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
* This method returns true if the string contains the characters, and false if not.
* The includes() method is case sensitive.

**Syntax** ```string.includes(searchvalue, start)```

```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

```

**To find and remove the repeated words/numbers**
```
let arr = [1,2,3,4,5,6];
let extra = [4,5,6];

console.log(arr.filter(function(v){
  return !extra.includes(v)
}));
```


