
- [Intro to Jest And Enzyme](#intro-to-jest-and-enzyme)
  - [Intro to Enzyme](#intro-to-enzyme)
  - [Enzyme vs React Testing Library](#enzyme-vs-react-testing-library)
  - [Why to choose Enzyme ?](#why-to-choose-enzyme-)
  - [Shallow Rendering](#shallow-rendering)
  - [Enzyme Setup](#enzyme-setup)
  - [Jest Assertions](#jest-assertions)
  - [Types of tests](#types-of-tests)
  - [Testing Traderoffs](#testing-traderoffs)
  - [Why No Snapshot testing](#why-no-snapshot-testing)

# Intro to Jest And Enzyme 
## Intro to Enzyme
- It creates a virtual DOM for testing.
  - can be interacted with dom by sending element's events and you can also assert against this dom by seeing what it looks like upon rendering 
- Allows testing without a browser 

## Enzyme vs React Testing Library 
- Both libraries create virtual DOM
- Mostly both has phliosophical differences 

- Enzyme supports isolated testing 
  - eg. shallow rendering 
- React Testing Library strongly prefers functional testing 
  - Interacting as a user would 
  - This makes the test less isolated 

## Why to choose Enzyme ?
- More traditional testing style
  - Instead of testing functionaly going through userflows
  - Tests tightly coupled with code  
  - Unit test are very isolated 
  - Tests are easy to diagnose 
  
- Functional user flow test (with Testing Library)
  - More resilient to refactors
  - Difficult to diagnose 
- Note : code-based testing is possible with Testing libarary
  - But not recommended ("opinionated")
- Enzyme for projects with legacy test code 

## Shallow Rendering
- Renders component only one level deep
- Render parent, but use placeholders for childrens 

## Enzyme Setup
- install enzyme and respective enzyme-adapter 
```javascript
npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17
``` 
- configure the enzyme-adapter 
```javascript
import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter : new EnzymeAdapter});

test('renders learn react link', () => {

});
```

- to see what's been rendered, use debug
```javascript
test('Rendering App without crashing', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
});

```

## Jest Assertions 
Assertion is to set up an expectation what we expect the outcome test to be. 
```javascript
const wrapper = shallow(<App />);
expect(wrapper.exists()).toBe(true);
```

## Types of tests 
Unit test
- Test one piece of code (usually one function)

Integration Test
- How multipel units work together 

Acceptance/End-to-end (E2E) Test
- Uses actual browser and connection to server (Selenium) 

Functional Tests
- Can be any of the above, focuse on user flow 

## Testing Traderoffs 
1. We have to test Behaviour not Implementation 
- Ideally do not want to re-write test after a refactor 
- Keep in mind when writing test
- Test behavior (what the app should do)
  - instead of implementation (how it works)
- Then if implementation changes, test remaing the smae
  - Testing implementation is brittle (easily broken when app still works)

2. Easy diagnosis of failing tests 
- After each user action
  - test expected internal state change
  - or alternative test that a particular function was called. 
  
Here is the Balance/Trade offs
- Code based (implementation) testing leads to
  - Ease of diagnosis
  - Brittle Tests
- Functional (behavioral) testin leads to
  - More robust tests
  - More difficult to find out what caused failure 


## Why No Snapshot testing 
Jest includes snapshot testing 
  - As a way t o freeze a component in time 
  - Test fails if there are any changes 

- No TDD
- Brittle (any change to component will break)
- Difficult to diagnose
  - Too easy to ignore failure and update
- No test intent 
  - If there's a failure, does code still meet spec?



9952935493