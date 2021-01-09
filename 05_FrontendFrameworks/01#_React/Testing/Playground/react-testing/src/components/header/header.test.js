import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';
import logo from '../../assets/images/logo.jpg';
import {findByAttr} from '../../Utils/TestUtils/TestUtils'

configure({ adapter: new Adapter() });

const setup = (props={}) =>{
  const wrapper = shallow(<Header {...props} />)
  return wrapper;
}


describe('Header component', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = setup();
  });
    
  it('should have a header', () => {            
    const component = findByAttr(wrapper, 'header')
    expect(component.length).toBe(1);
  });

  it('should have a logo', () => {        
    const component = findByAttr(wrapper, 'logo')
    expect(component.length).toBe(1);
  });
});

