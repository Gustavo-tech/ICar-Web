import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: var(--red);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled(Link)`
  font-family: 'Satisfy', cursive;
  color: var(--white);
  padding: 1.5%;
  font-size: 32px;
  margin: 0;
  text-decoration: none !important;

  &:hover {
    color: var(--black);
  }
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
