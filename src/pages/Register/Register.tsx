import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {
  Page,
  Logo,
  FormContainer,
  RegisterTitle,
  LoginMessage,
} from './styles';


const Register = ({ location }: any) => {
  const [userType, setUserType] = useState('user');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // user info
  const [cpf, setCpf] = useState('');

  // company info
  const [cnpj, setCnpj] = useState('');


  function getUserType(): string {
    return location.pathname.replace('/register/', '');
  }

  useEffect(() => {
    setUserType(getUserType())
  }, [location])

  const formData = userType === 'user' ? (
    <>
      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              value={cpf}
              onChange={event => setCpf(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control />
            <Form.Text>We will never share your account information</Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </>
  ) : (
    <>
      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              required
              value={cnpj}
              onChange={event => setCnpj(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              value={email}
              type='email'
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  )

  return (
    <Page>
      <Logo>ICar</Logo>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <Breadcrumb>
            <Breadcrumb.Item as={Link} href='/register/user' to='/register/user'>User</Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href='/register/company' to='/register/company'>Company</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <Form>
            <FormContainer>
              <RegisterTitle>Register</RegisterTitle>
              {formData}
              <Row>
                <Col lg={12}>
                  <Button variant="danger" type="submit">Submit</Button>
                </Col>
              </Row>
            </FormContainer>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <LoginMessage to="/login">Already have an account?</LoginMessage>
        </Col>
      </Row>
    </Page >
  )
}

export default Register
