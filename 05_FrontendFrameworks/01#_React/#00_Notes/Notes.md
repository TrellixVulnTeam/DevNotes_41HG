
- [Redux thunk](#redux-thunk)
- [HOC](#hoc)
- [React Life Cycle](#react-life-cycle)
  - [Mounting](#mounting)
  - [Updating](#updating)
  - [Pattern](#pattern)
  - [Notes](#notes)
- [React Lazy](#react-lazy)
      - [How was it done before React 16.6?](#how-was-it-done-before-react-166)
- [React Memo](#react-memo)
- [Error Boundaries](#error-boundaries)
    - [Error Boundaries in React](#error-boundaries-in-react)
- [Synthetic Event](#synthetic-event)
  - [React Ref](#react-ref)
    - [When to Use Refs](#when-to-use-refs)
  - [Trigger focus on an input element using Ref](#trigger-focus-on-an-input-element-using-ref)
- [Forwarding Refs](#forwarding-refs)
    - [Creating Ref in parent component and passing it to child component and Triggering it](#creating-ref-in-parent-component-and-passing-it-to-child-component-and-triggering-it)


# Redux thunk
- Middleware is like a tunnel, Intercepts actions before going to Reducer 
- Everytime we dispatch an action it went straight to the reducer as on object 
- Redux thunk allows to catch the actions and its only going to detect actions that aren't objects 
- When it detects an action with function, its going to give dispatch functionality as the parameter. 


# HOC
A higher-order component is a function that takes a component as an argument and returns a component. 

Suppose you have a page that can only be opened when user is logged in. How will handle this?
One naive answer can be adding a check in componentWillMount() lifecycle function. That seems OK but how about when you have say 10 components that should be opened when user is authenticated. Will you copy paste the logic everywhere?

Thats where HOCs help us.

They wrap our existing component for such logic.

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
 
export default (ChildComponnent) => {
  class RequireAuth extends React.Component {
    render() {
      const { user } = this.props;
 
      switch (user) {
        case false:
          return <Redirect to="/login" />;
 
        case null:
          return <div>Loading...</div>;
 
        default:
          return <ChildComponnent {...this.props} />;
      }
    }
  }
 
  function mapStateToProps({ auth }) {
    return { user: auth.user };
  }
 
  return connect(mapStateToProps)(RequireAuth);
};

```
Home.js 

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderMetaTags from './../helpers/seo';
import RequireAuth from './../components/hocs/requireAuth';
import PostCard from './../components/posts/PostCard';
import { fetchFeed } from './../actions/authActions';
 
class Home extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
 
    };
  }
 
  componentDidMount() {
    this.props.fetchFeed();
  }
 
  render() {
    const { feed } = this.props;
 
    const { } = this.state;
 
    return (
      <div className="c-container u-fx u-margin-t-lg">
        <div className="c-mainContent u-fullFlex">
          {feed.map(post => <PostCard post={post} />) }
        </div>
        <div className="c-sidebar">
 
        </div>
      </div>
    );
  }
}
 
 
function loadData(store) {
  return store.dispatch(fetchFeed());
}
 
function mapStateToProps({ auth }) {
  return { feed: auth.feed };
}
 
export default {
  component: connect(mapStateToProps, { fetchFeed })(RequireAuth(Home)),
  loadData,
};
```

# React Life Cycle

##  Mounting
- constructor 
	- Called Once on init
	- to init state and bind methods
- getDerivedStateFromProps
	- Called on props and state change
	- this is a static method, 'this' key is not available 
	- To update state from props  (match recieved prop to current state)
- render
	- called on props and state change
	- to render JSX.
- componentDidMount 
	- called on props and state change
	- Virtual DOM will be available
	- make API Calls

## Updating 
Updates on props and state change
- getDerviedStateFromProps
- shouldComponentUpdate
	- decides whether the component should update or not
	- incase of state/props and no need of UI change, you can use a conditional check prevent the update. 
- render
- getsnapshotBeforeUpdate
	- Has prevProps and prevState, 
	- should return null or an object
	- returned object will be passed componentDidUpdate as third param. 
Unmounting
Will run when you close a component
- componentWillUnmount
	- Observer,Subscribe, Event emitters can be cleaned in componentWillUnmount

## Pattern
- constructor
- getDerviedStateFromProps
- shouldComponentUpdate
- render
- componentDidMount  
- getsnapshotBeforeUpdate
- componentDidUpdate 

## Notes
- Don't use setState on getDerivedStateFromProps or render, it will create infinite cylce. (Updating Cycle)
- Use API calls in componentDidMount, you will have vitrual DOM by calling setState the life cycle will begin and happens once
- To call API after changing props use, componentDidUpdate

Demo
https://react-life-cycle-vn2fxx.stackblitz.io


# React Lazy 
React 16.6 brought code-splitting to a new level. You can now load your components when it’s really needed without installing additional libraries.

"technique of splitting your code into various bundles which can then be loaded on demand or in parallel"

Opposite of lazy-loading is eager-loading. Here everything is loaded no matter if you use it or not.

#### How was it done before React 16.6?
Probably the most popular library for lazy loading of React components is react-loadable.

It’s important that reactjs.org still recommends react-loadable if your app is rendered on the server.

Try the example in local, doesn't work in stackblitz
Example : https://stackblitz.com/edit/react-lazy-load-suspense

```javascript
// Import via React.lazy
const OtherComp = React.lazy(()=>import('./LazyComp'));

// Use React.Suspense to load the lazy component
// Use fallback to indicate its loading, eg: Spinner
 <React.Suspense fallback={'Still Loading.....'}>
  <div>
    <OtherComp/>
  </div>
</React.Suspense >
</div>
```

# React Memo
React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.

[Reference](https://dmitripavlutin.com/use-react-memo-wisely/)

When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.

# Error Boundaries
Error Boundaries idea in React was born from is that JavaScript errors in the user interface should not be allowed to break the whole application.

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, and does something worthwhile with it like displaying a fallback interface instead of the component tree that crashed or logging the exact error

### Error Boundaries in React
An Error Boundary in React is therefore defined as a Class Component that defines one or both of static getDerivedStateFromError() or componentDidCatch()lifecycle methods. The first one, static getDerivedStateFromError() is used to render a fallback user interface after an error has been thrown and the second one, componentDidCatch() is used to log error information to an error tracking service say Sentry. This is the official syntax below:
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
     this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
```
Then you can use it as a regular component like thus:
```javascript
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

# Synthetic Event
It means that the properties of the event only exist while the callback is active. Adding async to the mix, or storing the event for future use, will fail.

```javascript
class MyComponent extends React.Component {
    handleClick (e){
    console.log('The event currentTarget is', e.currentTarget); // DOM element
    setTimeout(() => {
    console.log('event.currentTarget was', e.currentTarget); // null
  }, 1000)
  }
  render () {
    return <button onClick={this.handleClick}>Fire event!</button>
  }
}
```

## React Ref

Refs provide a way to access DOM nodes or React elements created in the render method.

### When to Use Refs
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

##  Trigger focus on an input element using Ref
https://stackblitz.com/edit/react-ref-explained

Class based components

- Create Ref via this
``` nameRef =  React.createRef();```
- Add the ref to a dom node
``` <input type="text" ref={this.nameRef} placeholder="Name"/> ```
- Add a click handlers to a button to trigger focus to the input element.
``` this.nameRef.current.focus(); ```

Function based 
- Create Ref using a const.
 ``` const phoneRef =  React.createRef();```
- Refer ref by binding it to the input
``` <input type="text" ref={phoneRef} placeholder="Phone"/> ```
- Add a click handlers to a button to trigger focus to the input element.
``phoneRef.current.focus();``

# Forwarding Refs
Ref forwarding is a technique for automatically passing a [ref](https://reactjs.org/docs/refs-and-the-dom.html) through a component to one of its children.

### Creating Ref in parent component and passing it to child component and Triggering it
Function and class based example below. 
https://stackblitz.com/edit/react-forward-ref-explained

Function based
- Create Ref 
``const fancyInputRef =  React.createRef();``
- Create a function component called IndexComponent,
	- Write a trigger Handler, to focus the input 
	- Create a button, that has onClick event that triggers our Target ref FancyBtn Component
-  Now create two Function based component, HomeComp and FancyButton Comp 
	-  Import HomeComp in IndexComponent
	-  Import FancyButton Component in HomeComp
- In HomeComp, pass the ref
	 - ``<Homepage fancyInputRef={fancyInputRef} />``
- Repeat for FancyButton component
	- ``<FancyInput ref={props.fancyInputRef} />``
- FancyButton component will use React.forwardRef, see below
````javascript
//javascript
const  FancyButton  =  React.forwardRef((props, ref)  =>  (
<button ref={ref} onClick={fancyBtnHandler} className="FancyButton">

{props.children}

</button>

));
````






