import React from 'react'
import { Page } from './styles'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'

const Security = () => {
  return (
    <>
      <Navbar showSearch={false} />
      <Page>
        <SidebarSettings />
      </Page>
    </>
  )
}

export default Security
