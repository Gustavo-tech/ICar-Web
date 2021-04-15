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
  const [password, setPassword] = useState('')

  return (
    <MainDiv>
      <Picture src={Mclaren} />
      <FormDiv>
        <Icar>ICar</Icar>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <Form.Group>
                <Label>Email</Label>
                <Form.Control />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col lg={8}>
              <Form.Group>
                <Label>Password</Label>
                <Form.Control />
                <ForgotPassword as={Link} to='/forgot'>Forgot your passoword?</ForgotPassword>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col>
              <Button variant="light">Login</Button>
            </Col>
          </Row>
        </Container>
      </FormDiv>
    </MainDiv>
  )
}

export default Login
