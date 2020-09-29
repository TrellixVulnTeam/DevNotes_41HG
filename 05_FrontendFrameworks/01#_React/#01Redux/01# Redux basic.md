# Redux Works StandAlone

1. Store
```javasript 
- createStore(reducer)
```
2. Reducers
```javascript
- reducer(state = initState, action )
- based on action-type return the state 
```
3. Dispatch Actions
```javascript
- store.dispatch({type:'INC', payLoad:{title:'Naruto', content:'A guy who trains hard'}})
- dispatch action to store.
```
4. Subscribe 
```javasript 
- store.subsribe(()=>{store.getState()});
```

## Redux Example 
- Increase counter value by 1 

```javascript
// import Redux
import {createStore} from 'react';


// 2. Create Reducer 
const initState = {
	counter : 0
}

const reducer = (state = initState,action) => {
	switch(action.type) {
		case 'INC' : 
		return {
			...state,
      		counter : state.counter + 1
		}
		default :
		return state
	}
}

// 1. Create Store
const store = createStore(reducer);

// 4. Subscribe
store.subscribe(()=>{
	console.log(store.getState());
})

// 3. Dispatch
store.dispatch({type:'INC', payload:'data'})
store.dispatch({type:'INC', payload:'data'})
store.dispatch({type:'INC', payload:'data'})

```


