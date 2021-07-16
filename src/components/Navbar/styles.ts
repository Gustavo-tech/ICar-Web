import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: var(--red);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled.h2`
  font-family: 'Satisfy', cursive;
  color: var(--white);
  padding: 1.5%;
  margin: 0;
`

export const ButtonsDiv = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`

export const Button = styled.button`
  height: 100%;
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--black);
  transition-duration: 0.5s;

  & > svg {
    fill: var(--white)
  }

  &:hover {
    background-color: var(--white);

    & > svg {
      fill: var(--red)
    }
  }
`
