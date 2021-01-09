import React from "react";
import './Nav.css'
import NavItem from './NavItem';

const Nav = (props) => {

  return <div className="nav-wrapper"> 
  <NavItem name={'Home'} />
  {props.isAuth ? 
    <>    
      <NavItem name={'Orders'} />
      <NavItem name={'Logout'} />
    </> : 
    <NavItem name={'Login'} Autheticate /> 
  }
  </div>
}

export default Nav;