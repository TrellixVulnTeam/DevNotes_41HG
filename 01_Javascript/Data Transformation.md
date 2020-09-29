
# Data Transformation 

## Transform Object to an Array
```javascript
const ingredientsObj =   {
	cheese : 1,
	salad : 1,
	meat : 2
}

// Make a Object keys to an Array
var ingKeys = Object.keys(ingredientsObj);
console.log(ingKeys); // ["cheese", "salad", "meat"]

// Make a Object values to an Array
var ingValues = Object.values(ingredientsObj);
console.log(ingValues); // [1, 1, 2]


// Es5 
const transformedIngredients = [];

for (let key in ingredientsObj) {
  for (let i = 0; i < ingredientsObj[key]; i++) {
    transformedIngredients.push(key);
  }
}
console.log(transformedIngredients); 
// result : ["cheese", "salad", "meat", "meat"]


// Es6 Array.from 
var transformIngArrayFrom = [];
var arrayFromEs6 = Object.keys(ingredientsObj).map(el=>{
  return Array.from({length: ingredientsObj[el]}, ()=>{
    transformIngArrayFrom.push(el);
  });
})
//console.log('transformIngArrayFrom:', transformIngArrayFrom);
// result : ["cheese", "salad", "meat", "meat"]

// Es6 Spread 

var transformIngArraySpread = [];
var arraySpreadEs6 = Object.keys(ingredientsObj).map((el)=>{  
  return [...Array(ingredientsObj[el])].map(_=>{
    transformIngArraySpread.push(el);
  })

})

console.log('transformIngArraySpread:', transformIngArraySpread);
```
---
