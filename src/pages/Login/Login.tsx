// react
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

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

// Pictures
import Mclaren from '../../assets/images/mclaren.jpg';
import Button from 'react-bootstrap/esm/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainDiv>
      <Picture src={Mclaren} />
      <ContentDiv>
        <Icar>ICar</Icar>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
              <Form>
                <FormContainer>
                  <Row className="justify-content-md-center">
                    <Col lg={12}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          value={email}
                          onChange={event => setEmail(event.target.value)}
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
