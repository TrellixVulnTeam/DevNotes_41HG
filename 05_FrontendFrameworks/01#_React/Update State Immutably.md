## Update State Immutably 
```state = {inc : 0}```
When you have only one property in the state, You can replace it with new state like this ```return {inc : 9} ``` 

But when you have multiple keys pair values in state, then you hafta update immutably 
```javascript
state = {inc : 0, res : []}
```

### Immutably
- Object by nature holds reference so we have to break the reference.
- Basically update the state by copying the prop that you want and transform it and update the state.

### Update  Object Immutably
```javascript
// #Approach1
	// creates a copy of state
	const newState = Object.assign({}, state)
	// Update the counter value
	newState.counter = state.counter + 1
	// return the newstate
	return newState;

// #Approach2 ES6 Spread
return {
	// using spread opeartore we can distrubute the old state which creates new object.
	...state,
	// Update only the counter and 
	counter : state.counter + 1
}
```

### Update Array Immutably 
**Concat**
```javacript
return {
	...state,
	res : res.concat(state.val)
}
```
**Spread**
```javacript
return {
	...state,
	res : res.concat(state.val)
}
```
