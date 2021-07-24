import React from 'react'
import DirectionsIcon from '@material-ui/icons/Directions'

import {
  Content,
  Description,
  Page,
  Title
} from './styles'

const Redirecting = () => {
  return (
    <Page>
      <Content>
        <DirectionsIcon />
        <Title>Hang tight !</Title>
        <Description>
          You are being redirected to another page. <br />
          It may take 10 seconds.
        </Description>
      </Content>
    </Page>
  )
}

export default Redirecting
