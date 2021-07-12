import React from 'react';
import {
  Page
} from './styles';
import Navbar from '../../components/Navbar/Navbar';
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings';

const Account = () => {
  return (
    <>
      <Navbar />
      <Page>
        <SidebarSettings />
      </Page>
    </>
  )
}

export default Account;
