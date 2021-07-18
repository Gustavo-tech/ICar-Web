import React from 'react';
import {
  Page
} from './styles';
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings';
import AppNavbar from '../../components/Navbar/Navbar';

const Account = () => {
  return (
    <>
      <AppNavbar />
      <Page>
        <SidebarSettings />
      </Page>
    </>
  )
}

export default Account;
