import React from 'react';

// import ReactPlayer from 'react-player';
import hero from '../hero/hero.mp4';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";
import logo from "./logo.png"
import Signin from './Signin';
import { Space } from 'antd';
import Signup from './Signup';

const Header = ({user,updateUser}) => {
  return (
    <div className='main'>
        <Nav>
        <NavBarContainer>
          <NavLogo to="/">
          <img className="logo" src={logo} alt="Logo" /> 
            </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signin">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <Space>
            <Signin updateUser={updateUser}/>
            <Signup user={user}/>
          </Space>
        </NavBarContainer>
      </Nav>
    <video src={hero} autoPlay loop muted />
    
   
</div>

  );
};

export default Header;