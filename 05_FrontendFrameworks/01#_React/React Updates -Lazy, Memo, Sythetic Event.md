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
````

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

## Synthetic Event
It means that the properties of the event only exist while the callback is active. Adding async to the mix, or storing the event for future use, will fail.
```javsacript
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


