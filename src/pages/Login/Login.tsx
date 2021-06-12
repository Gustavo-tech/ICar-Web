// react
import { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

// react bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import {
  MainDiv,
  Picture,
  Icar,
  ForgotPassword,
  RegisterLink,
  RegisterRow,
  FormContainer,
  ContentDiv
} from './styles'

// pictures
import Mclaren from '../../assets/images/mclaren.jpg';
import Button from 'react-bootstrap/esm/Button';

// contexts
import { ProfileContext } from '../../contexts/ProfileContext'

const Login = () => {
  const [emailInput, setemailInput] = useState('');
  const [password, setPassword] = useState('');
  const { email, login } = useContext(ProfileContext);

  if (email !== '')
    return <Redirect to='/' />

  return (
    <MainDiv>
      <Picture src={Mclaren} />
      <ContentDiv>
        <Icar>ICar</Icar>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
              <Form onSubmit={e => login(e, emailInput, password)}>
                <FormContainer>
                  <Row className="justify-content-md-center">
                    <Col lg={12}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="emailInput"
                          required
                          value={emailInput}
                          onChange={event => setemailInput(event.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col lg={12}>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                        />
                        <ForgotPassword as={Link} to='/forgot'>Forgot your password?</ForgotPassword>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col lg={12}>
                      <Button variant="danger" type="submit" block>Login</Button>
                    </Col>
                  </Row>
                </FormContainer>
              </Form>
            </Col>
          </Row>
        </Container>
        <RegisterRow className="justify-content-md-center">
          <Col md="auto">
            <RegisterLink to="/register">Create account</RegisterLink>
          </Col>
        </RegisterRow>
      </ContentDiv>
    </MainDiv>
  )
}

export default Login
