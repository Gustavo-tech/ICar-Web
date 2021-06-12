import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 5%;
  background-color: var(--red);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2%;
`

export const Logo = styled.h2`
  font-family: 'Satisfy', cursive;
  color: var(--white);
  width: 100%;
`

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1%;
`

export const StyledToogle = styled(Dropdown.Toggle)`
  background-color: var(--red);
  border: 1px solid white;

  &:hover {
    color: var(--red);
    background-color: var(--white);
  }
`
