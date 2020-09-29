# Middleware
- Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. 
- Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions. 

STORE -----------------------------------------------------------------

| <--Reducer <-- Action <-- SUBSCRIPTION (Component) <--  | Store      
| <--Reducer <-- Middleware <-- Action <-- SUBSCRIPTION (Component)   | STORE  


##Using Middleware
- Middleware is used by composing the functions together and passing that function to your createStore call.
- The composed middleware function is used to replace the store's default dispatch method with one that dispatches the action to each middleware function in a chain, with the last middleware function dispatching the action to the store.
```javascript
import { createStore, applyMiddleware } from "redux";

const store = createStore(
  reducers,
  applyMiddleware( middlewareOne, middlewareTwo)
)
```
### Middleware Example
```javascript
function storeWrapper(store) {
  function middlewareWrapper(dispatch) {
    return function(action) {
      dispatch(action);
    }
  }
}
```

# Redux thunk
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

### Why Do I Need This?
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

An action creator that returns a function to perform asynchronous dispatch:

```javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

### Idea 
A thunk is a function that wraps an expression to delay its evaluation.
```javascript
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2;

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;
```

### Installation 
Install
```npm install redux-thunk```

Then, to enable Redux Thunk, use applyMiddleware():

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```



