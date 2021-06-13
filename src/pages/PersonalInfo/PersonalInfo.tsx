// React
import React from 'react';

// react bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// components
import Navbar from '../../components/Navbar/Navbar';
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings';


// styles
import {
  Page,
  HeaderInfo,
  PageDescription,
  InfoListGroup,
  InfoWrapper,
} from './styles';

const PersonalInfo = () => {
  return (
    <>
      <Navbar />
      <Page>
        <SidebarSettings />
        <InfoWrapper>
          <HeaderInfo>Personal info</HeaderInfo>
          <PageDescription>Your basic information line name, email and account creation date.</PageDescription>
          <InfoListGroup>
            <ListGroup.Item>Name: </ListGroup.Item>
            <ListGroup.Item>Account creation date: </ListGroup.Item>
          </InfoListGroup>
        </InfoWrapper>
      </Page>
    </>
  )
}

export default PersonalInfo;
