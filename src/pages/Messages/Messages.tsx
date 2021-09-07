import React from 'react'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import { Body, TalkHeader, TalkHeaderTitle } from './styles'

const Messages = () => {
  return (
    <>
      <AppNavbar />
      <Body>
        <TalkSidebar />
        <TalkHeader>
          <TalkHeaderTitle>ICar</TalkHeaderTitle>
        </TalkHeader>
      </Body>
    </>
  )
}

export default Messages
