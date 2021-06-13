// React
import React from 'react';

// Styles
import {
  SidebarSettingsDiv,
  SidebarOption,
  SidebarLink
} from './styles'

// Icons
import { AccountCircle } from '@material-ui/icons';
import SecurityIcon from '@material-ui/icons/Security';

const SidebarSettings = () => {
  return (
    <SidebarSettingsDiv>
      <SidebarOption to='/account/personal'>
        <AccountCircle />
        <span>Personal Info</span>
      </SidebarOption>
      <SidebarOption to='/account/security'>
        <SecurityIcon />
        <span>Security</span>
      </SidebarOption>
    </SidebarSettingsDiv>
  )
}

export default SidebarSettings;
