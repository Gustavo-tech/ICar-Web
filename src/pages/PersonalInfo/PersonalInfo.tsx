import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../../components/Navbar/Navbar';
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings';
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
