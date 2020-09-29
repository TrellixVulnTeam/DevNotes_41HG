# ES6

## Template Strings
```javascript
let firstName = 'shaktish';
let lastName = 'kumar';
const doy = 1992;
function calcAge  (year) {
  const date = new Date ();
  let now = date.getFullYear();
  return now - year
}

// Template strings
// - Enclose the statement with BackTicks
// - Use ${}, inside curly braces pus variable names, func etc.
console.log(`The name is ${firstName} ${lastName}. Age is ${calcAge(doy)}`);
```

## Arrow functions

### Single line 
```javascript
let years = [1992,1988];
let es6 = years.map(el => 2018 - el);
console.log(es6);
```

### Single line with Arguments
```javascript
let years = [1992,1988];
let es6 = years.map( (el, i) => `Age ${ i+1 }: ${2018 - el}`);

console.log(es6)
```
### Multiline line Arguments
```javascript
let years = [1992,1988];
let es6 = years.map( (el, i) => {
  return `Age ${ i+1 }: ${2018 - el}`
});

console.log(es6)
```

## Destructure

### Obj
```javascript
function conv (amount) {
  return {
    usd : 0.76 * amount,
    gbp : 0.53 * amount,
    aud : 1.01 * amount,
    mex : 13.30 * amount,
  }
}

let {usd, gbp, aud, mex} = conv(25);

console.log(usd);  // return 19 : ( 0.76 / 25 = 19 )
```
### Array
```
var arr = ['one','two','three'];
const [one,two,three] = [10,20,30];

console.log(one); // returns 10
```
### object.entries() 
pass an object it will return an array

```javascript
var person = {
  name : 'shak',
  age : 24
}

let [key, value] = Object.entries(person);
console.log(value); // ['age', 24]
```

## Array : Loop Stufs

```html
<style>
.box { width:50px; height:50px; float:left; margin:10px; padding:15px;}
.red { background:red; }
.green { background:green;}
.blue {background:blue;}
</style>

<div class="container">
  <div class="box red">R</div>
  <div class="box blue">B</div>
  <div class="box green">G</div>
</div>

```


#### querySelectorAll, selects multiple nodes
```javascript
var boxes = document.querySelectorAll('.box');
var arr = Array.prototype.slice.call(boxes);


// es5
arr.forEach( function (el) {
  console.log(el.style.backgroundColor = 'dodgerblue') ;
})

// es6
const boxes6 = Array.from(boxes);
boxes6.forEach(el=>{el.style.backgroundColor = 'lavender'});
```


### For Loop || Es6 forof loop
```javascript

const boxes6 = Array.from(boxes);

for(const cur of boxes6) {
  if(cur.classList.contains('blue')) {
    continue;
  } else {
    cur.textContent = 'I change to dodgerblue';
  }
}
```

### Find Elements in Arr
```javascript

// ES5
/* 
var result = person.map( (el, i)=>{
  return el > 18;

});

result.forEach((el,i)=>{
  if(el== true) {
      console.log(i);
  }
});

*/


// ES6
var person = [20,12,16,17,22];
var find = person.find(el=>el > 18);
var findIndex = person.findIndex(el=>el > 18);
console.log(find); // 20
console.log(findIndex); // 0
```

## Spread Opeartor : Expand
```javascript

function addSum (a,b,c) {
  var result = a + b + c;
  console.log(result);
}

var nums = [1,2,3];

// es5
addSum.apply(null, nums); //6

// es6
addSum(...nums); //6

// Join two arrays

var teamOne = ['Caps','Bucky'];
var teamTwo = ['IronMan', 'Rhody'];

var bothTeams = [...teamOne, 'Hulk', ...teamTwo];
console.log(bothTeams); // returns ["Caps", "Bucky", "Hulk", "IronMan", "Rhody"]
```

## Rest Parameters

Spread operator:
- takes 1 array and converts it to N elements
- is not limited to functions (as in the array merge example)

Rest parameters
- take N elements (arguments) and converts them to 1 array
- is limited to functions

```javascript
//es5
function isFullAge5 (limit) {
  var arr = Array.prototype.slice.call(arguments, 1);
  //var limit = 18;
  
  var res = arr.map(el=>{
    return el >= limit;
  });
  
  return res;
}

//console.log( isFullAge5(18,14,18,12,17,21) );


//es6
function isFullAge6 (limit, ...years) {
  years.forEach(el=>{
    console.log(el >= limit);
  });
}
isFullAge6(18,14,18,12,17,21)
```

