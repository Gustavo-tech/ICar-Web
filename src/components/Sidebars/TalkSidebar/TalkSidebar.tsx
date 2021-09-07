import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  background-color: var(--red);
  flex-direction: column;
  padding: 2% 1%;
  width: 25%;
  height: 100%;
`

const NameInput = styled.input`
  width: 100%;
  height: 30%;
  border-radius: 4px;
  font-family: 'Fira Sans', sans-serif;
`

const TalkSidebar = () => {
  return (
    <Sidebar>
      <NameInput placeholder="Search for a name" />
    </Sidebar>
  )
}

export default TalkSidebar
