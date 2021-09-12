import React from 'react'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import {
  Body,
  DetailsWrapper,
  Message,
  NickName,
  TalkBody,
  TalkHeader,
  TalkHeaderTitle,
  TalkWrapper,
  UserPic
} from './styles'

const Messages = () => {
  return (
    <>
      <AppNavbar />
      <Body>
        <TalkSidebar />
        <TalkWrapper>
          <TalkHeader>
            <TalkHeaderTitle>ICar</TalkHeaderTitle>
          </TalkHeader>
          <TalkBody>
            <Message sent={false}>Hello</Message>
            <Message sent={true}>Hello</Message>
          </TalkBody>
        </TalkWrapper>
        <DetailsWrapper>
          <UserPic>GH</UserPic>
          <NickName>Gustavo Henrique</NickName>
        </DetailsWrapper>
      </Body>
    </>
  )
}

export default Messages
