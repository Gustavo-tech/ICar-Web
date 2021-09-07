import React from 'react'
import {
  CircleWrapper,
  LastMessage,
  Name,
  NameInCircle,
  NameInput,
  NameWrapper,
  Sidebar,
  UserWrapper,
} from './style'

const TalkSidebar = () => {
  return (
    <Sidebar>
      <NameInput placeholder="Search for a name" />
      <UserWrapper>
        <CircleWrapper>
          <NameInCircle>GH</NameInCircle>
        </CircleWrapper>
        <NameWrapper>
          <Name>Gustavo Henrique</Name>
          <LastMessage>Nice Car!</LastMessage>
        </NameWrapper>
      </UserWrapper>
    </Sidebar>
  )
}

export default TalkSidebar
