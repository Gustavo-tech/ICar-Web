import React from 'react'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import { Body } from './styles'

const Messages = () => {
  return (
    <>
      <AppNavbar />
      <Body>
        <TalkSidebar />
      </Body>
    </>
  )
}

export default Messages
