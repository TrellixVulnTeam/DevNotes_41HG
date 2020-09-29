Useeffect
- Used in Funcitonal components
- Equals to componentDidMount = componentDidUpdate
- Calls everytime on changes, Can set when to change by passing component name in array
- componentWillUnmount : do cleanup work with a return callback. 
- can have multiple useEffect


## Optimization : Remove unneccessary re-renders 

componentDidUpdate(nextProps,nextState)
- Check nextProps with currentState and update logically

functional components
- When using useEffect, you can use React.memo. 
- Wrap the component inside  React.memo
``` export default React.memo(cockpit)```
- It basically memroizes(stores) snapshot of this component, only if its input changes it will re-render it


## BrowserConsole
To check what it re-rendered 
- Chrome > More tools > Rnedering > Enable Paint Flashing
