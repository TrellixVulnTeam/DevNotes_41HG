import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './header.scss';

const Header = (props) => {
  return (
    <div data-test="header" className="header">
      <div className="wrap">
        <div className="logo-wrap">
          <img data-test="logo" className="logo" src={logo} alt="logo"/>
          <span data-test="logo-text">Test</span>  
        </div>        
      </div>
    </div>
  )
}

export default Header;