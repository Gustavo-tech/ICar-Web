import React from 'react'
import { Page } from './styles'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings'

const Security = () => {
  return (
    <>
      <Navbar />
      <Page>
        <SidebarSettings />
      </Page>
    </>
  )
}

export default Security
