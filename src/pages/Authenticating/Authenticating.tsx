import React from 'react';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import {
  Content,
  Description,
  Page,
  Title
} from './styles';

const Authenticating = () => {
  return (
    <Page>
      <Content>
        <SupervisorAccountIcon />
        <Title>Hang tight !</Title>
        <Description>
          We are authenticating you.
        </Description>
      </Content>
    </Page>
  )
}

export default Authenticating
