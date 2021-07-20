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
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../client/account/get';
import { useReactOidc } from '@axa-fr/react-oidc-context';

const PersonalInfo = () => {
  const { oidcUser } = useReactOidc();
  const { profile, access_token } = oidcUser;

  const [accountCreationDate, setAccountCreationDate] = useState('');
  const [cpf, setCpf] = useState('');

  const email = profile.email;
  useEffect(() => {
    getUserInfo('Bearer ' + access_token, email, (data) => {
      setAccountCreationDate(new Date(data.accountCreationDate).toDateString());
      setCpf(data.cpf);
    })
  }, [])

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
                <Form.Group>
                  <Form.Label style={{ color: 'var(--white)' }}>CPF</Form.Label>
                  <Form.Control disabled value={cpf} />
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ color: 'var(--white)' }}>Email</Form.Label>
                  <Form.Control disabled value={profile.email} />
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ color: 'var(--white)' }}>UserName</Form.Label>
                  <Form.Control disabled value={profile.name} />
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ color: 'var(--white)' }}>Account Creation Date</Form.Label>
                  <Form.Control disabled value={accountCreationDate} />
                </Form.Group>

                <Button
                  style={{
                    backgroundColor: 'var(--black)',
                    color: 'var(--white)',
                    float: 'right'
                  }}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>

        </div>
      </Page>
    </>
  )
}

export default PersonalInfo;
