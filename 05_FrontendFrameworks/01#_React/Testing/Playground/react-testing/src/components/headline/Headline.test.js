import React from 'react';
import {shallow, configure} from 'enzyme';
import Headline from './Headline';
import Adpater from 'enzyme-adapter-react-16';
import {findByAttr} from '../../Utils/TestUtils/TestUtils'

configure({adapter : new Adpater});

const setup = (props = {}) => {
  let wrapper = shallow(<Headline {...props}/>)
  return wrapper;
}

describe('Headline', ()=>{

  let wrapper; 

  describe('Has props', () => {    
    beforeEach(()=>{
      const props = {
        header : 'Test Header',
        desc : 'Test Desc'
      }
      wrapper = setup(props);
    });

    it('Should render H1', () => {
        const h1 = findByAttr(wrapper, 'head-line')
        expect(h1.length).toBe(1);        
    });

    it('Should render desc', () => {
        const desc = findByAttr(wrapper, 'desc')
        expect(desc.length).toBe(1);
    });

  })



  describe('Has no props', () => {
    beforeEach(()=>{
      wrapper = setup();
    });    
    it('Should not render ', () => {
      const headlineComponent = findByAttr(wrapper, 'headlineComponent');
      expect(headlineComponent.length).toBe(0)
    });

  })
})

