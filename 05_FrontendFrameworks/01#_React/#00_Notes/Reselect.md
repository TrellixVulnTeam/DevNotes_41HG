# Reselect

## Concept 
Whenever redux state changes mapStateToProps is called again. 

1. if reducer return new value (new object), then this mean state change
2. when state change, store will run every mounted component's mapStateToProps

I hope this is clear at this point, because it is crucial to explain why memoization is needed

imagine component A has some expensive calculation in its mapStateToProps

```javascript
const mapState = (state) => {
     return {profit: expensiveCalculation(state.num1,state.num2,state.num3)};
}
```
- now recall what I mentioned earlier: any state change will run all mapStateToProps!
- Imagine component B dispatch an action that return new state from reducer, eventhough this state change has nothing to do with component A, store will still use the same state to run component A's mapStateToProps, thus the expensiveCalculation run every single time for no obvious reason!
- To prevent this, reselect library help us with memoization

```javascript
const mapState = (state) => {
     return {profit: selectProfit(state)};
}
```
when mapStateToProps is called again due to any state update of any other components,  Reselect will not run expensive calculation if the input values state.num1, state.num2, state.num3 remain the same with previous run.

## selectors

There are two types of selectors
1. Input Selector
- Doesn't use create selector 
2. Output Selector
- Use input selector and create selector  

### Input Selector 
It's a function that gets the whole state and just returns a slice of it one layer
```javascript
const selectCart = state => state.cart; 
```

### Output Selector 
Output selector takes two arguments 
- First argument is a collection so an array of input selectors
- Second argument is a function that will return the value we want out of the selector


## Installation
npm install reselect


Ref
- https://daveceddia.com/redux-selectors/
- https://stackblitz.com/edit/react-redux-reselector?file=component%2FCounter.js
