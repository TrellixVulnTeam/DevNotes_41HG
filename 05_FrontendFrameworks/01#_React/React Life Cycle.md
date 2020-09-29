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
