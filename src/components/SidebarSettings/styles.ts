import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarSettingsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2%;
`

export const SidebarOption = styled(NavLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  width: 100%;
  height: 3rem;

  & > * {
    color: var(--black);
    fill: var(--black);
  }

  &.active {
    background-color: #e8f0fe;

    & > * {
      fill: var(--red);
      color: var(--red);
    }
  }
`

export const IconDiv = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const OptionDiv = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`

export const SidebarLink = styled(NavLink)`
  color: var(--black);
  text-decoration: none;
`
