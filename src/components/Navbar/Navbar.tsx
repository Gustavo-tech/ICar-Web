import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Nav,
  LogoWrapper,
  Logo,
  NavItems,
  StyledToogle
} from './styles';

const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Logo>ICar</Logo>
      </LogoWrapper>
      <NavItems>
        <Dropdown>
          <StyledToogle>Menu</StyledToogle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to='/account'>Account</Dropdown.Item>
            <Dropdown.Item as={NavLink} to='/account/cars'>Cars</Dropdown.Item>
            <Dropdown.Item as={NavLink} to='/account/messages'>Messages</Dropdown.Item>
            <Dropdown.Item as={NavLink} to='/account/news'>News</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavItems>
    </Nav >
  )
}

export default Navbar;
