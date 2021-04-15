// react
import { useState } from 'react';
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
  FormDiv,
  Icar,
  Label,
  ForgotPassword
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
      <FormDiv>
        <Icar>ICar</Icar>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={8} md={8} sm={12}>
              <Form.Group>
                <Label>Email</Label>
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
            <Col lg={8} md={8} sm={12}>
              <Form.Group>
                <Label>Password</Label>
                <Form.Control 
                  type="password" 
                  required 
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                <ForgotPassword as={Link} to='/forgot'>Forgot your passoword?</ForgotPassword>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col sm={12} md={8}>
              <Button variant="light" block>Login</Button>
            </Col>
          </Row>
        </Container>
      </FormDiv>
    </MainDiv>
  )
}

export default Login
