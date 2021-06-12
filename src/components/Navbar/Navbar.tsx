import React from 'react';

// styles
import {
  Nav,
  LogoWrapper,
  Logo,
  NavItems,
  NavButton
} from './styles';

const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Logo>ICar</Logo>
      </LogoWrapper>
      <NavItems>
        <NavButton>Buy</NavButton>
        <NavButton>Sell</NavButton>
      </NavItems>
    </Nav >
  )
}

export default Navbar;
