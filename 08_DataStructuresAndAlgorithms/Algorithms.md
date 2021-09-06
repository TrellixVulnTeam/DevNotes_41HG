## Table of contents 
- [Algorithms vs Datastructures](#algorithms-vs-datastructures)
- [What is BigO](#what-is-bigo)
- [BigO Complecity Chart](#bigo-complecity-chart)
  - [O(1) - Constant Time](#o1---constant-time)
  - [O(log n) - Logarithmic time](#olog-n---logarithmic-time)
  - [O(n) - Linear time](#on---linear-time)
  - [O(n log n) - Linearthmic Time](#on-log-n---linearthmic-time)
  - [O(n^2) - Quadratic time](#on2---quadratic-time)
  - [O(2^n) - Exponential time](#o2n---exponential-time)
  - [O(n!) - Factorial time](#on---factorial-time)
  - [Reference](#reference)
- [Approaches](#approaches)
  - [BigO Rules of thumb](#bigo-rules-of-thumb)
  - [Space complexity](#space-complexity)
    - [Logs of N](#logs-of-n)
- [Analyzing Object and Array Performance](#analyzing-object-and-array-performance)
  - [Objects](#objects)
    - [When to use Objects](#when-to-use-objects)
    - [Crud](#crud)
    - [Object Methods](#object-methods)
  - [Array](#array)
    - [When to use Arrays](#when-to-use-arrays)
    - [Crud](#crud-1)
    - [Array Methods](#array-methods)
- [ProblemSolvingApproach](#problemsolvingapproach)
  - [What is an algorithm ?](#what-is-an-algorithm-)
  - [Why do i need this?](#why-do-i-need-this)
  - [How do i improve ?](#how-do-i-improve-)
- [ProblemSolving Strategy](#problemsolving-strategy)
  - [Understanding the problem](#understanding-the-problem)
    - [Example Problem](#example-problem)
    - [Explore Concrete Examples](#explore-concrete-examples)
    - [Example Problem](#example-problem-1)
    - [Break it down](#break-it-down)
    - [Solve the problem, if you can't solve a simpler Problem](#solve-the-problem-if-you-cant-solve-a-simpler-problem)
    - [Look back and refactor](#look-back-and-refactor)
- [Problem Solving Pattern](#problem-solving-pattern)
  - [Frequency Counter](#frequency-counter)
    - [Example1](#example1)
    - [Refactored version](#refactored-version)
    - [Example2](#example2)
    - [Example3](#example3)
  - [Multiple Pointers](#multiple-pointers)
    - [Example](#example)
  - [CountUniqueValues](#countuniquevalues)
  - [Sliding Window](#sliding-window)
    - [My try](#my-try)
  - [Sliding window approach](#sliding-window-approach)
  - [Divide and Conquer](#divide-and-conquer)
    - [An Example](#an-example)
- [Recrusion](#recrusion)
    - [Examples](#examples)
    - [HELPER METHOD RECURSION](#helper-method-recursion)
    - [ANOTHER EXAMPLE](#another-example)
    - [PURE RECURSION](#pure-recursion)
    - [Pure Recursion Tips](#pure-recursion-tips)
    - [Recap](#recap)
- [Searching Algorithms](#searching-algorithms)
  - [Linear Search](#linear-search)
      - [Js Methods](#js-methods)
  - [Binary Search](#binary-search)
    - [How it works](#how-it-works)
  - [KMP Substring Search](#kmp-substring-search)
- [Sorting Algorithms](#sorting-algorithms)
  - [Elementory Sorting Algorithms](#elementory-sorting-algorithms)
    - [Bubble Sort](#bubble-sort)
      - [Pseudocode](#pseudocode)
    - [Approach2](#approach2)
      - [Notes](#notes)
    - [Selection Sort](#selection-sort)
      - [Pseudocode](#pseudocode-1)
      - [Approach2](#approach2-1)
      - [Notes](#notes-1)
    - [Insertion Sort](#insertion-sort)
      - [Pseudocode](#pseudocode-2)
      - [Notes](#notes-2)
    - [Merge Sort](#merge-sort)
      - [Visualization](#visualization)
      - [Merging Arrays](#merging-arrays)
      - [MergingArrays Pseudo code](#mergingarrays-pseudo-code)
      - [MergeSort Pseudo code](#mergesort-pseudo-code)
      - [Notes](#notes-3)
    - [Quick Sort](#quick-sort)
      - [How does it work ?](#how-does-it-work-)
      - [Pivot Helper and Quick Sort Implementation](#pivot-helper-and-quick-sort-implementation)
      - [Notes](#notes-4)
    - [Radix Sort](#radix-sort)
      - [How does it work](#how-does-it-work)

# Algorithms vs Datastructures
- Data Strucutre
  - Data Structure is about organising and managing data effectively such that we can perform specific operation efficiently
- Algorithm
  - Algorithm is a step-by-step procedure to be followed to reach the desired output.

- Examples01
  - Data Structure is a water bucket.
  - Algorithms are a way to use water of bucket for some meaningful purpose.
  - Data structures :- linked list , queue , stack , tree , heaps e.t.c. the buckets of representing data.
  - Algorithms :- kruskals , prims , sorting , djkstra , Huffman e.t.c. to use data from these buckets to do some meaningful tasks.


# What is BigO
Simplified analysis of an algorithm's efficiency
- BigO is a way to formalize fuzzy counting
- It allows us to talk formally about how the runtime of an alogrithm grows as the inputs grow

Imagine we have multiple implementations of the same function 

How can we determine which one is the best ? That's what big O is about. It's about 
- Time
- Space/Size
- Readbilty 

# BigO Complecity Chart
https://www.youtube.com/watch?v=cNRrJkXJ8T4 

![alt text](https://github.com/shaktish/DevNotes/blob/master/08_DataStructuresAndAlgorithms/images/BigO.jpg?raw=true "BigO")

- O(1) : Constant Time
  - Opeartes happens once
- O(log n) : Logarithmic Time
  - Cut the input in half, used in Binary Search
- O(n) : Linear Time
  - Linear Search
- O(n log n) : Linearthmic Time
  - MergeSort 
- O(n^2) - Quadratic time || O(n2) || O(nSquare)
  - O (nSquare)
    - Finding Duplicates in an Array 
    - Ex : 7 * 7 = 49 = n(2)
  - O(n^3) || O(nCube)
    - x+y+z = 10, find combinations of 10 in an array 
    - Three for-loops (nested) 
- O(2^n) - Exponential time || O(2power^n)
  - Finding all subsets, find {1,2,3}
  - Eg : {1}, {2}, {3}, {1,2}, {1,2,3}... 
- O(n!) - Factorial time  
  - Combination problems : Eg find abc combination
  - abc, acb, bac, bca, cab, cba 


## O(1) - Constant Time
O(1) means that the algorithm takes the same number of steps to execute regardless of how much data is passed in.

- Whether we access the 1st or 2nd or millionth item it doesn’t matter. We can access it directly by using the index operator array[i].

```javascript
function isEvenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd
```

## O(log n) - Logarithmic time
Logarithmic time complexities usually apply to algorithms that divide problems in half every time.

Inputs are cut in half 
- Example 1 
  - used in Finding element on sorted array with binary search
- Example 2
  - 1) Open the dictionary in the middle and check the first word.
  - 2) If our word is alphabetically more significant, look in the right half, else look in the left half.
  - 3) Divide the remainder in half again, and repeat steps 2 and 3 until we find our word.

```javascript
// Find indexOf a word in a Sorted array 
function indexOf(array, element, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2);
  const current = array[half];

  if(current === element) {
    return offset + half;
  } else if(element > current) {
    const right = array.slice(half);
    return indexOf(right, element, offset + half);
  } else {
    const left = array.slice(0, half)
    return indexOf(left, element, offset);
  }
}

// Usage example with a list of names in ascending order:
const directory = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
console.log(indexOf(directory, 'Hanna'));   // => 5
console.log(indexOf(directory, 'Adrian'));  // => 0
console.log(indexOf(directory, 'Zoe')); 
```

## O(n) - Linear time
Linear time complexity O(n) means that as the input grows, the algorithms take proportionally longer to complete.

- called Linear Algorith m
- Linear Search.

```javascript
function findMax(n) {
  let max;
  let counter = 0;

  for (let i = 0; i < n.length; i++) {
    counter++;
    if(max === undefined || max < n[i]) {
      max = n[i];
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`);
  return max;
}
```
The complexity of the linear_algo function is linear in the above example since the number of iterations of the for-loop will be equal to the size of the input items array. For instance, if there are 4 items in the items list, the for-loop will be executed 4 times, and so on.
  
  
## O(n log n) - Linearthmic Time
Linearithmic time complexity it’s slightly slower than a linear algorithm. However, it’s still much better than a quadratic algorithm
- called Log Linear  
- Efficient sorting algorithms like merge sort, quicksort and others.
- There was a mix-up at the printer's office, and our phone book had all its pages inserted in a random order. Fix the ordering so that it's correct by looking at the first name on each page and then putting that page in the appropriate spot in a new, empty phone book.

```javascript
/**
 * Sort array in asc order using merge-sort
 * @example
 *    sort([3, 2, 1]) => [1, 2, 3]
 *    sort([3]) => [3]
 *    sort([3, 2]) => [2, 3]
 * @param {array} array
 */
function sort(array = []) {
  const size = array.length;
  // base case
  if (size < 2) {
    return array;
  }
  if (size === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
  }
  // slit and merge
  const mid = parseInt(size / 2, 10);
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}

/**
 * Merge two arrays in asc order
 * @example
 *    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 * @param {array} array1
 * @param {array} array2
 * @returns {array} merged arrays in asc order
 */
function merge(array1 = [], array2 = []) {
  const merged = [];
  let array1Index = 0;
  let array2Index = 0;
  // merge elements on a and b in asc order. Run-time O(a + b)
  while (array1Index < array1.length || array2Index < array2.length) {
    if (array1Index >= array1.length || array1[array1Index] > array2[array2Index]) {
      merged.push(array2[array2Index]);
      array2Index += 1;
    } else {
      merged.push(array1[array1Index]);
      array1Index += 1;
    }
  }
  return merged;
}

```
  
## O(n^2) - Quadratic time
A function with a quadratic time complexity has a growth rate of n2. If the input is size 2, it will do four operations. If the input is size 8, it will take 64, and so on.

- called as Quadratic Complexity
- Sorting items in a collection using bubble sort, insertion sort, or selection sort.

```javascript
function hasDuplicates(n) {
  const duplicates = [];
  let counter = 0; // debug

  for (let outter = 0; outter < n.length; outter++) {
    for (let inner = 0; inner < n.length; inner++) {
      counter++; // debug

      if(outter === inner) continue;

      if(n[outter] === n[inner]) {
        return true;
      }
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`); // debug
  return false;
}

// bubble sort 
function sort(n) {
  for (let outer = 0; outer < n.length; outer++) {
    let outerElement = n[outer];

    for (let inner = outer + 1; inner < n.length; inner++) {
      let innerElement = n[inner];

      if(outerElement > innerElement) {
        // swap
        n[outer] = innerElement;
        n[inner] = outerElement;
        // update references
        outerElement = n[outer];
        innerElement = n[inner];
      }
    }
  }
  return n;
}
```
In the script above, you can see that we have an outer loop that iterates through all the items in the input list and then a nested inner loop, which again iterates through all the items in the input list. The total number of steps performed is n * n, where n is the number of items in the input array.

## O(2^n) - Exponential time
Exponential (base 2) running time means that the calculations performed by an algorithm double every time as the input grows.

- called Exponential
- used in,  
  - Power Set: finding all the subsets on a set.
  - Fibonacci.

## O(n!) - Factorial time
Factorial is the multiplication of all positive integer numbers less than itself. For instance:

- called as Factorial
- used in Find all permutations of a given set/string

```javascript
5! = 5 x 4 x 3 x 2 x 1 = 120
20! = 2,432,902,008,176,640,000
```


## Reference
- https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/
- https://stackabuse.com/big-o-notation-and-algorithm-analysis-with-python-examples/
- https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly#:~:text=Logarithmic%20running%20time%20(%20O(log,an%20O(log%20n)%20time

# Approaches
1. First Approach, Using performance.now() and check how long a function run but this isn't a recommended way. 
2. Second Approach, we can define it by counting operations in a function. 

## BigO Rules of thumb
1. Constants don't matter
- O(2n)     => O(n)
- O(500)    => O(1)
- 0(13n2)   => O(n2)
2. Smaller Terms don't matter
- O(n+10)     => O(n)
- O(1000n+50) => O(n)
- O(n2+5n+8)  => O(n2)

## Space complexity 
Rules of thumb
- Most primitives booleans, numbers, undefined null are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)

### Logs of N
- log2(8)    = (8/2)= 4 (4 / 2)= 2  (2 / 1)= 1  => 3 Times
- 25(2)      = (25/2)= 12.5 (12.5/2)=6.25 (6.25/2)=3.15 (3.15/2)= 1.6 (1.6/2)=.8  ==>  4 Times

Used in
- Searching algorithms
- Effecient sorting
- Recursion 

# Analyzing Object and Array Performance

## Objects
### When to use Objects
- When you don't need order
- When you need fast access/insert and removal 

### Crud
Insertion   O(1)
Removal     O(1)
Searching   O(n)
Access      O(1)

### Object Methods
Object.keys     O(n)
Object.values   O(n)
Object.entries  O(n)
Object.hasOwnProperty O(n)


## Array
### When to use Arrays
- when you need order
- when you need fast access / insertion and remove 

SingleLinkList and Double Link lists also mantains order like Array

### Crud
- Insertion   depends
- Removal     depends
- Searching   O(n)
- Access      O(1)

Insertion, when you add a value to the end of array, it's O(1) but if u add it first it's O(n) coz the indexed has to be changed for all other values 

### Array Methods
- push        O(1)
- pop         O(1)
- shift       O(n)
- unshift     O(n)
- concat      O(n)
- slice       O(n)
- splice      O(n)
- sort        O(n * log n)
- forEach     O(n)
- Map         O(n)
- Filter      O(n)
- Reducer etc

# ProblemSolvingApproach
Basic approach to solving a problem

## What is an algorithm ?
A process or set of step to accomplish a certain task

Examples
- set of a mathmatical steps
- facebooks algorithms that suggests ads for u 
- search result algorithms
- calculate first 100 prime numbers 

## Why do i need this?
- Almost everythin you do in programming involces some kind of algorithm
- It's the foundation for being a successful problem solving and developer 

## How do i improve ?
1. First, Devise a plan for solving problems
    - plan, strategy
2. Second, Master common problem solving patterns     

# ProblemSolving Strategy
1. Understand the Problem
2. Explore Concrete Examples
3. Break it Down
4. Solve/Simplify
5. Look back and Refactor

## Understanding the problem 
Question to ask 

1. Can i restate the problem in my own words ?
2. What are the inputs that go into the problem ?
3. What are the outputs that should come from the solution to the problem ?
4. Can the outputs be determined from the inputs? 
    - In other words, do i have enough information to solve the problem ?
5. How should i label the important pieces of data that are a part of the problem ?

### Example Problem 
Write a function which takes two number and return their sum 

1. Can i restate the problem in my own words ?
- this function will take 2 numbers, and add them and return them
2. What are the inputs that go into the problem ?
- what will be the input ? will it be postiive, will it be negative, is it integer or floating number ?
- what will happen if user gives one number, or give more than two number ?
3. What are the outputs that should come from the solution to the problem ?
- Should it be float ? should it be number ?
4. Can the outputs be determined from the inputs? 
    - In other words, do i have enough information to solve the problem ?
- Yes    
5. How should i label the important pieces of data that are a part of the problem ?
- sumFunction, num1, num2, sum 

### Explore Concrete Examples
Coming up with exmaples can help you understand the problem better. Examples also provide sanity checks that your eventual solution works how it should 

- Start with Simple Examples 
- Progres to More complex Examples
- Explore Example with Empty Inputs
- Explore Examples with Invalid Inputs


### Example Problem 
Write a function which takes in a string and returns counts of each character in the string

Understand the problem
- restate 
    - count no of strings for each character and return it
- input : 
    - will it be one word or sentence ? 
    - should it count spaces btw the words
- output
    - should it be number or floating 
- based on input 
    - yes
- imp labels : 
    - input, charCount 

Concrete Examples
- Simple Example : 'aaa'
    -  {a : 3}
- complex Example
    - 'shaktish'  
        - output {s:2, h:2, a:1, k:1, t:1,i:1 }
    - 'Hello hello' 
        - should it be case sensitive 
    - 'name is hero 223'
        - should it take numbers, 
        - should it count spaces

- emptyInput 
    -  ''
        - please enter a word
- invalidInput : 222
    - input shuld be string 


### Break it down
- Explicitly write out the steps you need to take 
    - this forces you to think about the code before you write it and help you catch issues before you dive in 

```javascript
// input = 'hello'
function charCount(str) {
    /* 
        1. Loop over string, for each characters
            - if the char is a number/letter key in object add one to count
            - if the char is a number/chart not in object add one
        2. return object at the end.

    */
}
```

### Solve the problem, if you can't solve a simpler Problem 
- if you can't loop make it a string
- if you can't validate spcl characters, validate only string and number 
- then slowly increase the complexity
```javascript
function countStr(str) {
  let res = {};
  let regExp = RegExp(/^[a-zA-Z0-9_ ]*$/);
  
  if(regExp.test(str)) {
    let spt = str.toLowerCase().trim().split('');   
    
    spt.forEach((el,i)=>{
      if(res.hasOwnProperty(el)) {
        res[el] = res[el] + 1
      } else {
        res[el] = 1
      }
    });  
  } else {
    res = 'input can contain only alpha Numeric characters'
  }
   
  console.log(res, 'res')
  return res
}

countStr('hello 1231')

```

### Look back and refactor
Question to ask urself !
- Can you check the result ?
- Can you derive the result differntly ?
    - refers to the fact that this can be solved differently
- can you understand at a glance ?
    - can you read the code ? readability ?
- can you use the result of method for some other problem ?
- can you improve the performance of your solution ?
    - time complexity, space complexity 
- can you think of other ways to refactor ?
- how have other people solved this problem ?

# Problem Solving Pattern
Specific Blueprints and strategies to keep in your pocket

Some patterns
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Manymore !

## Frequency Counter
This pattern uses object or set to collect values/frequencies of values 

This can often avoid the need for nested loops or O(n^2) opeartions with arrays/strings

### Example1
Write a function called same, which accepts two arrays, the function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

- Restate 
    - we have two arrays as input, each value in the array should be squared by second array.
    - example : 
    - [1,2,3] = [1,4,9] // true
    - [1,3,3] = [1,1,9] // false 
- Input 
    - it should be two arrays
    - length both arrays should match 
    - can it take zero value      
- Output 
    - [1,2,3],[1,4,9] = true 
- based on input
    - yes
- imp labels
    - arr1 arr2, result

Concrete Examples
- Simple Example
    - [1,2,3],[1,4,9] = true 
- Comlpex Example
     - [4,5,6],[16,25,39] = false 
- Empty value
    - needs value
- Invalid input 
    - incorrect input

- Break it down    
    - Loop thru first array and multiple by it's own value and push it in an array
    - then do another loop checking multiplied value exists in second array

### Refactored version
```javascript
function sameRefactored (arr1, arr2) {
  let obj1 = {}
  let obj2 = {}  
  
  for(let key of arr1) {
    // create key by value and the value of key should be no of times the value is present 
    obj1[key] = (obj1[key] || 0) + 1
  }
  for(let key of arr2) {
    obj2[key] = (obj2[key] || 0) + 1
  }
  
  for(let key in obj1) {
    // check if obj1 key's exponential value is present in obj2 
    if( !(key * key) in obj2) {
       return false;
    }
    
    if(obj1[key] !== obj2[key * key]) {
    // check if obj1 value's matches with obj2 val
      return false; 
    }
  }  
//   console.log(obj1, 'obj1');
//   console.log(obj2, 'obj2');
  return true
}
```
### Example2
Given two strings, write a function to determine if the second stirng is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another such a cinema formed from iceman.

```javascript
    function validAnagram(word1, word2) {  
        if(word1.length !== word2.length) return false 

        let obj1 = {};
        let obj2 = {};
        for(let key of word1 ) {
            obj1[key] =  (obj1[key] || 0) + 1    
        }
        
        for(let key of word2 ) {
            obj2[key] = (obj2[key] || 0) + 1    
        }
        
        // console.log(obj1)
        // console.log(obj2)

        for(let key in obj1) {
            // console.log(key, 'key')
            // console.log(obj1[key], 'obj1[key]')
            // console.log(obj2[key], 'obj2[key]')
            if(obj1[key] !== obj2[key]) {
                return false 
            }
           
        }

        return true 
    }

    
    console.log(validAnagram('aaz','zza'), 'expects false')
    console.log(validAnagram('anagram','nagaram'), 'expects true')
    console.log(validAnagram('rat','car'), 'expects false')
    console.log(validAnagram('awesome','aweom'), 'expects false')
    console.log(validAnagram('qwerty','qeywrt'), 'expects true')
    console.log(validAnagram('texttwisttime','timetwisttext'), 'expects true')


    // APPRACH 2 
    function validAnagram(word1, word2){
        if(word1.length !== word2.length) return false 

        let obj1 = {};
        for(let key of word1 ) {            
            obj1[key] ? obj1[key]  += 1 : obj1[key] = 1
        }

        for(let i = 0; i < word2.length; i++ ) {
            let w2 = word2[i]            
            if(!obj1[w2]) {
                return false 
            } else {
                obj1[w2] -= 1;
            }
        }
        return true 
    }

``` 
### Example3
```javascript
// Find duplicates in an array 
    // example : [1,2,3,1] = false 
    // example : [1,2,3] = true 
    function getUniqueValues(array) {        
        let obj1 = {};
        let res = [];

        for(let key of array ) {
            obj1[key] = (obj1[key] || 0) + 1;    
        }    

        for(let key in obj1) {
            console.log(key, 'key')
            if(obj1[key] === 1) {
                res.push(key);
            }
        }
        return res 
    }

    
    console.log(getUniqueValues([1,2,3]), 'expects true')
    console.log(getUniqueValues([1,2,3,1,2,2,4]), 'get Unqiue values');
```

## Multiple Pointers
Creating pointers or values that corresponds to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficent for solving problems with minimal space complexity
- Example, [-4,-3,-2,-1,0,1,2,5] here we use two pointers
- from first index and to last index

### Example 
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

- sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
- sumZero([-2,0,1,3]); // undefined
- sumZero([1,2,3]); // undefined

```javascript
function findSumZero(arr) {
  let first = 0;
  let end = arr.length - 1;
  
  for(let val of arr) {
    let sum = arr[first] + arr[end];
    if(sum === 0 ) {
      return [arr[first], arr[end]]
    }else if (sum > 0) {
      end--
    } else {
      first++
    }
  }
}

console.log(findSumZero([-4,-3,-2,-1,0,1,2,6,15,18,55,60]));
//console.log(sumZero([-4,-2,-1,0,1,2,3]));
```
## CountUniqueValues
Implement a function called countUniqueValues which accepts a sorted array, and counts the unqiue values in the array. There can be negative numbers in the the array, but it will always be sorted. 


```javascript
function countUniqueValues (array) {
  // debugger;
  let first = 0;
  let second = 1;  
  let res = 0;

  if(array.length === 0) { return 0}
  
  for(let val of arr) {   
    if(arr[first] === arr[second]) {      
      second++
    } else { 
      if(arr[second] !== undefined) {
        first = arr.indexOf(arr[second])
        res++;
      }
      second++
    }
  }
  
  return res + 1

  // APPROACH 2

  if (array.length === 0) return 0;
 
  let numberOfUniqueValues = 1;
  let pointerA = 0;
  let pointerB = 1;

  while (pointerB < array.length) {
    const pointerAValue = array[pointerA];
    const pointerBValue = array[pointerB];

    if (pointerBValue === pointerAValue) {
      pointerB++;
    } else {
      numberOfUniqueValues++;
      pointerA = pointerB;
      pointerB = pointerA + 1;
    }
  }

  return numberOfUniqueValues;
}
console.log(countUniqueValues([1,1,1,1,2]), '// 2');
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), '// 7');
console.log(countUniqueValues([]), '// 0');
console.log(countUniqueValues([-2,-1,-1,0,1]), '// 4');

```

## Sliding Window
- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certani condition, the window either increases or closes (and a new window is created)

- Very useful for keeping track of a subset of data in an array/string etc.

### My try
```javascript

function arrAdded (arr)  {
  let sum = 0;
  arr.forEach(el=>sum += el);
  return sum;  
}
function maxSubArraySum ( arr, num ) {  
  if(arr.length === 0) {
    return null;
  }
  let targetNum = num;
  let bigArr = [];

  for( let i = 0; i < arr.length - num + 1; i++ ) {  
    bigArr.push(arr.slice(i, targetNum ))
    targetNum++;             
  }
  
  let arrAdder = bigArr.map(el=>{
    return arrAdded(el);
  })

  return Math.max(...arrAdder)
}


console.log( maxSubArraySum( [1,2,5,2,8,1,5], 2), '// 10' );
console.log( maxSubArraySum( [1,2,5,2,8,1,5], 4), '// 17' );
console.log( maxSubArraySum( [4,2,1,6], 1), '// 6' );
console.log( maxSubArraySum( [4,2,1,6,2], 4), '// 13' );
console.log( maxSubArraySum( [], 4), '// null' );


```
## Sliding window approach
```javascript
function maxSubArraySum ( arr, num ) {    
  // 1. sum the numbers in the arr based on num and store it in tempSum variable 
  let tempSum = 0;
  let maxSum = 0;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // 2. loop the array, i should be num, substract - 1 from i and add +1 from i and store in tempSum
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];    
    maxSum = Math.max(maxSum, tempSum);
  }
  // console.log(maxSum, 'maxSUm')
  return maxSum;
  // 3. 
  
}

// 8
// 10 - 1 = 9
console.log( maxSubArraySum( [1,2,5,2,8,1,5], 2), '// 10' );
console.log( maxSubArraySum( [1,2,5,2,8,1,5], 4), '// 17' );
console.log( maxSubArraySum( [4,2,1,6], 1), '// 6' );
console.log( maxSubArraySum( [4,2,1,6,2], 4), '// 13' );
console.log( maxSubArraySum( [], 4), '// null' );

```
## Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with subset of data.

This pattern can tremendously decrease time complexity 

This is also called binary search.

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array

### An Example
Given a sroted array of integers, write a function called search, the accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

search([1,2,3,4,5,6],4)   //3
search([1,2,3,4,5,6],6)   //5
search([1,2,3,4,5,6],11)  //-1

Condition 
- this is a sorted array. 
- Divide and conquery by dividing the array (100 / 2) by 2 
- check if given value is greater or lesser than divided value and loop the subarray which was greater/lesser 


```javascript
function binarySearch(arr, value) {
  let len = arr.length / 2
  100 / 2 = 50  
}

```

# Recrusion 
What is recursion?
A process (a function in our case) that calls itself

Why do I need to know this?
- It's EVERYWHERE!
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration


How recursive functions work
- Invoke the same function with a different input until you reach your base case!

Two essential parts of a recursive function!
- Base Case
- Different Input

### Examples 
```javascript
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

```javascript
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
```

### HELPER METHOD RECURSION
```javascript
function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    
    helper(input)

    return outerScopedVariable;

}
```

### ANOTHER EXAMPLE
Let's try to collect all of the odd values in an array!
```javascript
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}
```

### PURE RECURSION
```javascript
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```

### Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

### Recap
- A recursive function is a function that invokes itself
- Your recursive functions should always have a base case and be invoked with different input each time
- When using recursion, it's often essential to return values from one function to another to extract data from each function call
- Helper method recursion is an alternative that allows us to use an external scope in our recursive functions
- Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first


# Searching Algorithms
## Linear Search
Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

#### Js Methods
- indexOf
- includes
- find
- findIndex

```javascript
function linearSearch(arr, val) {
  return arr.indexOf(val)
}
console.log(linearSearch([10,15,20,25,30],15)); // 1
```

## Binary Search
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can elminate half of the remaning elements at a time
- Binary search only works on sorted Arrays

### How it works
- Lets have country array and we are searching for India
- we wanna check if india is in the array, since country array is sorted, we pick half way point in this array and search in that half for "india" 

```javascript
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
```

## KMP Substring Search
- Incomplete

https://www.youtube.com/watch?v=KG44VoDtsAA&list=PLrmLmBdmIlpvxhscYQdvfFNWU_pdkG5de&index=3

# Sorting Algorithms
Sorting is the process of rearrangin the items in a collection (eg. in array) so taht the items are in some kind of order 

Sorting
- number from smallest to largest
- names alphabetically
- Movies based on release year

See, Sorting algorithm Animation 
- https://www.toptal.com/developers/sorting-algorithms
- https://visualgo.net/en/sorting

Common Sorting Algorithms
- Insertion
- Selection
- Bubble
- Shell
- Merge
- Heap
- Quick


## Elementory Sorting Algorithms
- Bubble
- Insert
- Select

### Bubble Sort
A sorting algorithm where the largest value bubble upto the top

Example
1. There is a array [29,10,14,30,18]
2. compare first and second value, 
   - if 10 > 29 ? swap the value or dont swap
  ``` [10,29,14,30,18]```
  - compare 29,14 ? swap
  - ``` [10,14,29,30,18]```
  - compare 29,30 ? no swap
  - ``` [10,14,29,30,18]```
  -  compare 30,18 ? swap 
  - ``` [10,14,29,18,30]```
3. after first iteration, largest value is bubbled to the top (left)
4. now we repeat the process, the thing is the for every iteration we should minus the last value (that is sorted )


#### Pseudocode
- Start looping from with a var called i the end of the array towards the beginning
- Start an inner loop with a var called j from the beginning until i-1
- if arr[j] is greater than arr[j+1] swap those two values
- return the sorted array 

```javascript
function bubbleSort(arr) {
  let noSwap;
 
  for(let i = arr.length; i > 0 ; i--) {    
    noSwap = true;
    for(let j = 0; j < i ; j++ ) {
        console.log(arr, arr[j], arr[j+1])
        if(arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          swap = false  
        }
    
      }
      console.log('break')
      if(noSwap) {
          break;
      }
    }   
  return arr
}
   
console.log(bubbleSort([37,45,29,8]));
```
### Approach2 
```javascript
var numList = [6,5,3,1];
console.group(numList.length, 'numList len')

function bubbleSort(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for(let j = 0; j < arr.length-1; j++  ) {                  
      if(arr[j] > arr[j+1]) {                
        let temp = arr[j];        
        arr[j] = arr[j+1];
        arr[j+1] = temp;   
        noSwap = false;        
      } 
//       console.log(arr[i], 'i', arr[j+1], 'j')     
    }    
    if(noSwap) { break; }
    console.log(arr,' arr')
  }  
  
  return arr;
}
console.log(bubbleSort(numList), 'res');
```
#### Notes
- Time complexity of bubble sort is n(n^2)
- Bubble sort can be best used for nearly sorted collection

### Selection Sort
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

Example 
```javascript
// minVal : 5
[5,3,4,1,2]
// compares 5,3 => 
// minVal : 3
[5,3,4,1,2]
// compares 4,3 => 
// minVal : 3
[5,3,4,1,2]
// compares 1,3 => 
// minVal : 1
[5,3,4,1,2]
// compares 2,1 => 
// minVal : 1

// on end of iteration
// make swap first index to minVal index
// ignore the sorted value on every iteration 
```

#### Pseudocode
- Store the first element as smallest vlaue you've seen so far.
- Compare this item to the next item in the array until you find a smaller number
- if a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
- If the minimum is not the value (index) you initially began with swap the two values
- Repeat this with the next element until the arrray is sorted 

```javascript
function selectionSort (arr) {
  
  for(let i = 0; i < arr.length; i++) {
    let minVal = i;
    for(let j = i+1; j < arr.length; j++) {   
      // console.log(i, j);
      if(arr[j]  < arr[minVal] ) {
        minVal = j;
      }      
    }   
    console.log(i, minVal)
     if(i !== minVal) {
        console.log('**********')
        console.log(arr, 'swapping to : ')
        let tempVal = arr[i]      
        arr[i] = arr[minVal]
        arr[minVal] = tempVal

        console.log(arr)
        console.log('**********')
      }      
      console.log('BREAK')
      
  }

  return arr
}

console.log(selectionSort([2,34,22,10,19,17]));
```

#### Approach2
```javascript
var numList = [4,5,6,78,151,154,45,1,2];

function selectionSort(arr) {  
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++) {            
      if(arr[j] < arr[min]) {  
          min = j;                       
      } 
    }    
    let temp = arr[i]        
    arr[i] = arr[min]
    arr[min] = temp;        
  }        
  return arr;
}
console.log(selectionSort(numList), 'res');
```
#### Notes

- Time complexity of bubble sort is n(n^2)
- Selection sort reduces no of swaps

### Insertion Sort
Builds up the sort by gradually creating a larger left half which always sorted 


#### Pseudocode 
- Start by picking the second element in the array 
- Now compare the second elmeent with the one before it and swap if necessary 
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place 
- Repeat until the array is sorted 


```javascript
function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    var currentVal = arr[i];    
    for(var j = i -1; j >=0; j--) {
      if(arr[j] > currentVal) {
        arr[j+1] = arr[j]
      } else {
        break;
      }
    }
    arr[j+1] = currentVal
  }
  
  return arr
}
console.log(insertionSort([4,1,8,12,54,2,0]));
```

#### Notes
- Time complexity is n(n^2)
- If our data is almost sorted Insertion sort is good

### Merge Sort
- Its a combination of three things, Splitting up, Sorting, Merging  
- Exploits the fact tat arrays of 0 or 1 element are always sorted 
- Works by decomposing an array into smallery sub arrays of 0 or 1 elements, then building up a new sorted array

#### Visualization 
```javascript
[8.3,5,4,7,6,1,2]
[8,3,5,4] [7,6,1,2]
[8,3] [5,4] [7,6] [1,2]
[8][3] [5][4] [7][6] [1][2]
----------------------------
Sorting
[3,8] [5,4] [6,7] [1,2]
[3,4,5,8] [1,2,6,7]
Merging
----------------------------
[1,2,3,4,5,6,7,8]
```

#### Merging Arrays
- In order to implement merge sort, it's userful to first implement a function responsible for merging two **sorted** arrays
- Given two arrays which are sorted this helper function should create a new array which is also sorted and consists of all of the lements in the two input arrays 
- THe function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.


#### MergingArrays Pseudo code
- Create an empty array, take a look at the smallest values in each input array
- while there are stil values we haven't looked at...
  - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on the next value in the first array
  - if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all the remaining values from the other array 

#### MergeSort Pseudo code
- Use recrusive to function to do this
- Break up the array into halves until you have arrays that are mepty or have one element.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together return the merged (and sorted) array


```javascript
// [2,5,3,1], [7,9,12,10]
// 2,7,3,1 , 5,9,13,10
// 2731 

function mergeTwoArr(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }    
  }
  
  if(j !== arr2.length) {      
    let sliced = arr2.slice(j, arr2.length)
    res.push(...sliced);
  }
  
  if(i !== arr1.length) {      
    let sliced = arr1.slice(i, arr1.length)
    res.push(...sliced);
  }
 
  return res;
}


// console.log(mergeTwoArr([],[1,10,50]));
// console.log(mergeTwoArr([1,10,50,75,76,89],[2,14,99,100]));

function breakArr(arr) {
  if(arr.length <= 1) {return arr; }

  let len = Math.floor(arr.length / 2);
  let right = breakArr(arr.slice(0,len))
  let left = breakArr(arr.slice(len))
  return mergeTwoArr(right, left);  
}

console.log(breakArr([42,98,1,6,8,91]),'breakArr')
```

#### Notes
- Time complexity is n(n log (n))


### Quick Sort
- Like merge sort, exploits the fact tat arrays of 0 or 1 element are always sorted 
- Works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot 


#### How does it work ?
[5,2,1,8,4,7,6,3]
- First Element, 5 Will be our pivot point
- We wann move all the elements less than 5 to the left and greater than 5 to the right 
- Keep note of how many index we have moved
  
[5,2,1,8,4,7,6,3]
[-,-,-,-,5,-,-,-] --> Sorted 
[2,1,4,3,5,8,7,6]
- We recrusively do the process for left and right 

#### Pivot Helper and Quick Sort Implementation
-  In order to implement Quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
-  Given an array, this helper function should designate an element as the pivot
-  It hsould then rearrange elements the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
-  The order of elements on either side of the pivot doesn't matter
-  The helper should this in place, taht is it should not create a new array 

```javascript
function pivotHelper(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]
  }

   let pivot = arr[start] ;
   let swapIdx = start; 
   for (let i = start + 1; i <= end; i++) {
     if(pivot > arr[i] ) {
        swapIdx++;
        swap(arr, swapIdx, i);        
     }
   }
  
  swap(arr, start, swapIdx);  
  
  // console.log(arr, ' res ')
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length -1 ) {

  if(left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1 )
    // right
    quickSort(arr, pivotIndex + 1, right );
  }


  
  return arr 
}

console.log(quickSort([4,6,9,1,2,5,3]), 'quickSort');

```
#### Notes
- Time complexity is n(n log (n))
  
  
### Radix Sort
Radix sort is a special sort algorithm taht works on list of numbers
- It never makes comparsions btw elements
- It exploits the fact taht information about the size of a number in encoded in the number of digits 
- More digits means a bigger number 

#### How does it work 
1. We start from righ -> first digit number eg for 1556, we take 6
2. We ll look at the right most digit we group them in the Ten buckets, see below
```javascript
// we are looking at right last digit 
// [1556,4,3556,593,408,4386,902,7,8157,86,9637,29]
let 0 = 
let 1 = 
let 2 = [902]
let 3 = [593]
let 4 = [4]
let 5 = 
let 6 = [1556, 3556, 4386, 86]
let 7 = [7, 8157, 9637]
let 8 = [408]
let 9 = [29]

// Results
[902,593,4,1556,3556,4386,86,7,8157,9637,408,29]
```
3. Now we repeat the process, we select the second right most number, example 1556, we take 5 
   -  Numbers that dont have a number in that postion, we put them in 0'th bucket
```javascript
// We are looking second digit in the array
// [902,593,4,1556,3556,4386,86,7,8157,9637,408,29]
let 0 = [902,4,7,408]
let 1 = 
let 2 = [29]
let 3 = [9637]
let 4 = 
let 5 = [1556, 3556, 8157]
let 6 = 
let 7 = 
let 8 = [4386, 86]
let 9 = [593]

// Results
[902,4,7,408,29,9637,1556,3556,8157,4386,86,593]
```
4. The number of times we need to repeat is based on longest number in the array.

```javascript
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    let bucketsMax = 9;
    let buckets = [];

    

    for(let k = 0; k < maxDigits; k++) {
      let buckets = Array.from({length:10}, () => []);
      for(let i = 0; i < arr.length; i++ ) {
        let digit = getDigit(arr[i], k);
        buckets[digit].push(arr[i]);
      }
      arr = [].concat(...buckets);
    }

    return arr;
    
  }

  console.log(radixSort([12, 23, 345, 2345, 5467, 9852, -22]));
  ```





