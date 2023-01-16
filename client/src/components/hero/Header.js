import React from 'react';
import hero from '../hero/hero.mp4';
import {Nav,NavBarContainer,NavLogo} from "./NavElements";
import logo from "./logo.png"
import Signin from './Signin';
import Signup from './Signup';

import { Space } from 'antd';

const Header = ({updateUser}) => {
  return (
    <div className='main'>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
          <img className="logo" src={logo} alt="Logo" /> 
            </NavLogo>
          <Space>
            <Signin updateUser={updateUser}/>
            <Signup updateUser={updateUser}/>
          </Space>
        </NavBarContainer>
      </Nav>
      <video src={hero} autoPlay loop muted />
    </div>
  );
};

export default Header;