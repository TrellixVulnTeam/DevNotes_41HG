
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [Integration tests](#integration-tests)
  - [Automation Tests](#automation-tests)
  - [Tesing Libraries](#tesing-libraries)
  - [Installing Test dependecies](#installing-test-dependecies)
  - [Getting Started](#getting-started)
  - [Component Testing](#component-testing)
    - [Refactoring Component Unit Testing](#refactoring-component-unit-testing)
  - [React Optimization](#react-optimization)
  - [Mock](#mock)

# Testing 
## Unit Tests
- Tests individual functions or classes.
- if I had a sum function I'm going to just test that one function to make sure that it does what it does
- Maybe if it accepts parameter A and B I want to make sure that A and B get added with that function.
- They are the cheapest to implement the easiest to implement and 90 percent of your time you're gonna be working on writing unit tests.

##  Integration tests
- This is testing how different pieces of code work together so it can be testing of whether the database
- Tt could be how a function works with another function and how this connection between them works

## Automation Tests
- This usually involves testing real life scenarios on the browser by controlling the browser and making sure that the expected behavior on the web is correct.
- Now you can have humans doing this where they go through and click through everything on your Web site and make sure everything works or you can programmatically have robots or code that you write that runs through these tests for you as we go down into this order.
- They become more and more expensive to implement.

## Tesing Libraries
- Jasmine
- Jest
- Mocha 

Flow

1. Testing Libary 
- This is the scaffolding giving us the ability to use some function calls and some new methods for us
2. Assertion libarary
- It's essentially a tool to allow you to test that the variables contain the expected value.
- They use something called BDD or behavioral driven development.
- An assertion library does is says expect that this object that just contains a equals one and then it chains all these words together to test our assumption.
- ``` expect([1,2].to.be.an('array').taht.does.not.iclude(3)) ```
3. Test Runner 
- The next thing we need for our tests is something called a test runner and a test runner is something that allows us to run our tests.






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


## Mock
What is a mock function ?
- Fake function that runs instead of a real function 
  - Can run alternate code, or jsut act as a placeholder
- Jest replaces real functions with mock 

Why Mock
Mocks server three purposes
- Keep real function from running
  - prevent side-effects like network calls
- Spy on a function to see when it's called 
- Provide return values
  - setup Test conditions 

Method for Mocking methods in Jest
- Reset properties on React module to replace methods with mocks 
- This means: no destructring on imports in non-test code 
  - React.useState() will work 
  - import {useState} from react; and using it will not work 