## Table of Contents
1. [for loop](##for-loop)
    - [for loop on array](#for-loop-on-array)
    - [for Loops, Backwards](#for-loops-backwards)
    - [Nested for Loops](#nested-for-loops)
2. [while Loops](#while-loops)
    - [Infinite Loops](#infinite-loops)


# Loops and iteration
Loops offer a quick and easy way to do something repeatedly.

# for loop 
A for loop repeats until a specified condition evaluates to false.

**syntax** 
```
for ([initialExpression]; [condition]; [incrementExpression]){
  code block to be executed
}  
```
**Example**
```
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
```
From the example above, you can read:

- Statement 1 sets a variable before the loop starts (var i = 0).
- Statement 2 defines the condition for the loop to run (i must be less than 5).
- Statement 3 increases a value (i++) each time the code block in the loop has been executed.

## for loop on array
let’s make the computer loop through our array for us.
```
let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  console.log(animals[animalIndex]);
}
```
- Loop will start counting at 0. animalIndex is called an iterator variable
- The stop condition is animalIndex < animals.length,  the loop will run until animalIndex is less than the length of the animals array. 
- The iterator is animalIndex++. This means that after each loop, animalIndex will increase by 1.
- The code block {} will execute each loop until the program reaches the stop condition.

**Secret to loops**
- The animalIndex will equal 0, on the second loop, animalIndex will equal 1, and the third loop, animalIndex will equal 2.
- Loops make it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand.

## for Loops, Backwards
**Code**
```
for(let i = 5; i > 0; i--){
  console.log(i);
}
```
## Nested for Loops
The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.
Every time the outer for loop runs once, the inner for loop will run completely.

Run this code to see, how nested loops works
```
const letters  = ['a','b','c'];
const numbers  = [1,2,'a'];

// create a for loop
for (let lettersIndex = 0; lettersIndex < letters.length; lettersIndex++){
  //outer for loop runs once
  console.log('letters :' + letters[lettersIndex]);
  for (let numbersIndex =0; numbersIndex < numbers.length; numbersIndex++){
    // inner for loop completely every time
    console.log(numbers[numbersIndex]);
  }
}
```
### Compare two arrays 
compare the outer array inside the inner array.
```
const letters  = ['a','b','c'];
const numbers  = [1,2,'a'];

for (let lettersIndex = 0; lettersIndex < letters.length; lettersIndex++){
  for (let numbersIndex =0; numbersIndex < numbers.length; numbersIndex++){
    // compare the outer array in inner array
    if(letters[lettersIndex] === numbers[numbersIndex]){
      console.log('In numbers we have a value ['+letters[lettersIndex] + '] dat matches our letters array');
    }
  }
}
```

# while Loops
- While loops comes when you want a loop to execute an unknown or variable number of times.
- The while loop loops through a block of code as long as a specified condition is true.

**Syntax**
```
while (condition) {
    code block to be executed
}
```
- The loop begins with the keyword while.
- Inside the parentheses, we write a condition. As long as the condition evaluates to true, the block of code will loop.
- Inside the code block, we can write any code we'd like to loop.

For example, if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a Spade, how could we write that in JavaScript?

```
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// randomize the cards using Math.random()
let currentCard = cards[Math.floor(Math.random() * 4)];

// in while, if its not spade, log the other values in the array
while (currentCard !== 'Spade'){
  console.log(currentCard);
  // for quick randomization, add Math.random here as wel.
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('Success = Got Spade')
```

## Infinite Loops
* Infinite loops are more common in while loops because they don't have an iterator built into their syntax. 
* Infinite loops occur when stop conditions are never met.
```
const list = ['a','b','c'];

let i = 0;
// 3 > 0
while (list.length > 0){
  console.log(list);
  list.pop();
}
//["a", "b", "c"]
//["a", "b"]
//["a"]
```

## do while Statement
The do/while statement creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

The do/while statement is used when you want to run a loop at least one time, no matter what.

JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- while - loops through a block of code while a specified condition is true
- do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

```javascript
do {
    code block to be executed
}
while (condition);
```
```html
<!DOCTYPE html>
<html>
<body>

<p>Click the button to loop through a block of code as long as i is less than 5.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var text = ""
    var i = 0;
    do {
        text += "<br>The number is " + i;
        i++;
    }
    while (i < 5);
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
```
