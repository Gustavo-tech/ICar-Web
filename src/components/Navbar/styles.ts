import styled from 'styled-components';

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
`

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  height: 100%;
  width: 5%;
  cursor: pointer;
  margin: 0 3%;
  border: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid var(--white);
  }
`
