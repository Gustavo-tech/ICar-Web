// React
import React from 'react';

// Styles
import {
  Page
} from './styles'

// Components
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
