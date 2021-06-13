import React from 'react';
import {
  SidebarSettingsDiv,
  SidebarOption,
  OptionDiv,
  IconDiv
} from './styles'
import { AccountCircle } from '@material-ui/icons';
import SecurityIcon from '@material-ui/icons/Security';

const SidebarSettings = () => {
  return (
    <SidebarSettingsDiv>
      <SidebarOption to='/account/personal'>
        <IconDiv>
          <AccountCircle />
        </IconDiv>
        <OptionDiv>
          <span>Personal Info</span>
        </OptionDiv>
      </SidebarOption>

      <SidebarOption to='/account/security'>
        <IconDiv>
          <SecurityIcon />
        </IconDiv>
        <OptionDiv>
          <span>Security</span>
        </OptionDiv>
      </SidebarOption>
    </SidebarSettingsDiv>
  )
}

export default SidebarSettings;
