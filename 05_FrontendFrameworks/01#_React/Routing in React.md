# React Router

## Installing Package
- react-router-dom
```javascript
	npm install --save react-router-dom
```

## Importing BrowserRouter
- This gives you Route options
- Enclose App component with BrowserRouter
```javascript 
    Import {BrowserRouter} from 'react-router-dom'

    <BrowserRouter><App /></BrowserRouter>
```

## Import Route from react-router-dom
This lets you config the route paths
- Example
```javascript
import Home from './Home';
// There are Two Ways 
// component way
<Route path={/} component={Home} />
// render way 
<Route path={/} render={()=>{<Home />}} />
```

## NavLink 
This lets you add links and you can navigate without relloading the page.

```javascript
    import {NavLink} from 'react-router-dom'

    <ul>
        // Set the url path to the 'to' property
        <li> <NavLink to="/">Home </NavLink>

        // To property takes an Object 
        // Lets us define, path, hash, search params
        <li> <NavLink to={
            pathname="/new-post"
            hash="#about"
        }>Home </NavLink>
    </ul>
```

## Router props
When you navigate via Navlink or Link you can send a few params, such as path, hash, search.
- You can recieve these params in props for components that direclty consume it. 
- Considering Example above Home component will recieve all these route props. 

Route props  
- history  
    - Ability to move forward/backward programtically 
    - push, replace, location are a few options listed
- location : has the params     
    - hash
    - key
    - pathname
    - search
- match
    - isExact : true 
    - params : {}
    - path : '/',
    - url : '/'



## withRouter, HOC & Route props 
- child components don't inherit route props, 
- withRouter is an HOC component, it gives the route props to the component which encapsulates it  

```javascript
    import {withRouter} from 'react-router-dom';
    
    export default withRouter(About); 
```


## Absolute and Relative Paths 
Absolute path is always appeneded to your domain 
    - example.com/new-post
Relative path 
Getting the url from match, a route prop and concate with your url.
```javascript
pathname :  this.props.match.url + '/new-post'
```

## Active NavLink
When using Navlink, it will add active class for the active page. Use css to style it.
- Add exact param for the index link, since '/' comes for all url, active will be applied to all links
```javascript
<li><NavLink  to="/"  exact  >Home</NavLink></li>
<li><NavLink  to={'/new-post'}>New Post</NavLink></li>
```
- Customizing active classname 
```javascript
<li><NavLink  to="/"  exact activeClassName="my-active" >Home</NavLink></li>
```
## Passing Route parameters 
':id' this is dynamic route parameter, where you can produce dynamic ids such as  '/12' or '/13'

## Switch 
First route matched will be loaded and it will stop analyzing the routes, it wont render any other route
- Order is important

## Navigation Programatically 
- Navigation is stack of pages, Use push in route props to navigate
```javascript
this.props.history.push('/' + id);
```

## Nested Routes
You can use Route in any component to render the component, Make sure the path is correct
```javascript
<div  className="blog">
	// this is a component of Post
	<section  className="Posts">
		{postList}
	</section>
	// This will render Post component using Route
	<Route  path={'/:id'}  component={FullPost}  />
</div>
```
Make sure the Route path is correct
```javascript
<Switch  >
	<Route  path="/new-post"  component={NewPost}  />
	<Route  path="/"  component={Blog}  />
</Switch>
```
## Redirect
The redirect is a component used in JSX, you can add it in Switch statement 
	- Specify from and to paramter 
	- If you use it outside of switch statement you can specify from parameter
```javascript
	<Redirect from="/" to="/posts" />
```
The difference is it doesn't render content it simply just changes the URL so what we then reach another route and render its component. 

## Conditional Redirects 
```javascript
state = {
	submit : false 
}

if(this.state.submit) {
	return (<Redirect  to="/"  />);
} else {
	return (<Form />)
}
```

## Using the History prop to Redirect
We can use History prop that we are getting from BrowerRouter Wrapped component to Programtically redirect say after Form submission 

```javascript
submitHandler  = () => {
	this.props.history.push('/')
}
```

- Push, pushes the page onto the stack, so if we click back button we goto the prev page
- Redirect : replaces current page you wont be able to go back to the prev page coz Redirect will replace the current page on a stack, it doesn't push a new one. 
- Replace : basically does the same thing as Redirect and therefore you can use it alternatively 

## Navigation Guards (Related to redirection)
- Typically Guards are used when whether the user is authenticated or not, some routes only want to allow the user to visit if he is authenticated. 


## Query Params 
 Example Url : ```http://localhost:3000/checkout?bacon=1&cheese=0&meat=0&salad=0```

 - Starts with question mark "?"
 - then key and value ```salad=0```
 - concats with "&"  ```salad=0&cheese=1```

 Use encodeURIComponent to remove spaces and for security
 ``` encodeURIComponent(value)```

 ### How to convert and Pass
 - Loop thru the object
 - Push it to an Array with encodeURIComponent wrapping.

 Example code
 ```javascript
 let queryParams = [];

for(let i in this.state.ingredients) {
    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
}

let queryString = queryParams.join('&');

this.props.history.push({
    pathname : '/checkout',
    search : '?' + queryString
});

```

### How to consume query params
```javascript
    componentDidMount () {
        console.log(this.props);

        const userUpdatedIngList = {};
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            userUpdatedIngList[param[0]] = param[1];
        }

        this.setState({
            ingredients : userUpdatedIngList
        });
    }
```
