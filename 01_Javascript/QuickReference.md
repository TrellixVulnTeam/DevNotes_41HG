

## Array Methods
- [Array Methods](#array-methods)
  - [findIndex](#findindex)
  - [find](#find)


### findIndex
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```javascript

var arr = ['apple', 'orange', 'pineapple', 'kiwi', 'grapes'];
var arr = [{name : 'apple'}, {name : 'orange'}, {name : 'kiwi'}];

res = arr.findIndex((item)=>{
  return item === 'pineapple'
});

console.log(res, 'res')
```

### find
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

```javascript
var arr = ['apple', 'orange', 'pineapple', 'kiwi', 'grapes'];
var arr = [{name : 'apple'}, {name : 'orange'}, {name : 'kiwi'}];


res = arr.find((item)=>{
  return item.name === 'orange'
});

console.log(res, 'res')
```


