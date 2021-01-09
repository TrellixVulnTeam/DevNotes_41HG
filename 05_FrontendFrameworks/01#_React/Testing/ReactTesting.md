
## Installing Test dependecies
- jest
- react-test-renderer
- enzyme 
- enzyme-adapter-react-16
```cmd
npm install --save-dev jest react-test-renderer enzyme enzyme-adapter-react-16
```

## Getting Started
- We can write a simple functional test case using it and expect
```javascript
it('it should render a header', () => {
  expect(1).toBe(1)
})
```

## Component Testing
- Import the following,
  - shallow, configure from enzyme
  - Adapter from enzyme-adapter-rect-169
```javascript
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';
```
- Congifure enzyme with jest by using Adapter
  - ``` configure({ adapter: new Adapter() }); ```
- To write meanningful, seperative test, use describe
```javascript
  describe('Header component', ()=>{
    it('case', ()=>{
      expect(1).toBe(1);
    })
  });
```
- Shallow rendering is useful to constrain yourself to testing a component as a unit
  - As of Enzyme v3, the shallow API does call React lifecycle methods
```javascript 
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';

configure({ adapter: new Adapter() });

describe('Header component', ()=>{
    
  it('should render a header', () => {    
    const component = shallow(<Header />)
    console.log(component.debug());
    // const wrapper = component.find(`[data-test=header]`)
    const wrapper = component.find(`.header`)
    expect(wrapper.length).toBe(1);
  });
});
```
- use component.debug to view the component markup 
  - ``` console.log(component.debug()); ```


### Refactoring Component Unit Testing  
1. As we re going to call the shallow render the component multiple times, lets make it resuable 
```javascript
const setup = (props={})=>{
  const component = shallow(<Header {...props}/>)
  return component
}
```
2. Use beforeEach method to have the component instead of declaring it in every test case
```javascript
  let component;
  beforeEach(()=>{
    component = setup();
  });

  // using component in a test case 
  it('should render a header', () => {            
    const wrapper = component.find(`.header`)
    expect(wrapper.length).toBe(1);
  });
```
3. use data-attributes to div
```javascript
<div data-test="header" className="header"></div>
// usage
find(`[data-test='${attr}']`
```
1. create findByAttr function for selecting the class from a component 
```javascript
const findByAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
}
// example 
it('should have a logo', () => {        
    const wrapper = findByAttr(component, 'logo')
    expect(wrapper.length).toBe(1);
  });
```





## React Optimization
What is wrong in the application ?
- Performance related - Speed 
  - Profiler To th App, see which areas of app is badly
  - Rendering component that are not supposed to be rendering, find unnecesary re-renders by using PureComponent, React.memo
- Size
  - Lazy loading using React.Lazy 
  - API's slow, imporvment neede on the server side 
- Immutability 
  - At some places state are updated incorrectly that is straighlty mutated 
- Convert Components tat recives props to render make them functional component 
- using regular function and  binding them in construcutor can also slow things down instead we can use arrow functions 
- 