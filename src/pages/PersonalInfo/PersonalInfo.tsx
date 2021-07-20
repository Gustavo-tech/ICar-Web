import Navbar from '../../components/Navbar/Navbar';
import SidebarSettings from '../../components/SidebarSettings/SidebarSettings';
import Form from 'react-bootstrap/Form';
import {
  Page,
  PageTitle,
  Description
} from './styles';
import { Button, Container } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';

const PersonalInfo = () => {
  return (
    <>
      <Navbar />
      <Page>
        <SidebarSettings />
        <div>
          <PageTitle>Account information</PageTitle>
          <Description>Your account basic information</Description>
          <Container
            style={{
              backgroundColor: 'var(--red)',
              padding: '2%',
              width: '80%',
              borderRadius: '12px'
            }}
          >
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label style={{ color: 'var(--white)' }}>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ color: 'var(--white)' }}>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ color: 'var(--white)' }}>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ color: 'var(--white)' }}>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Button
                    style={{
                      backgroundColor: 'var(--black)',
                      color: 'var(--white)',
                      float: 'right'
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>

        </div>
      </Page>
    </>
  )
}

export default PersonalInfo;
