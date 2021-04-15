// react
import { useState, useEffect } from 'react';

// react bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// styles
import {
  Description,
  FormDiv,
  Page,
  TextDiv,
  WelcomeMessage,
  StyledLabel,
  AccountInformation,
  SubmitButton,
  Bread,
  BreadItem
} from './styles';
import { Link } from 'react-router-dom';

const Register = ({ location }: any) => {
  const [userType, setUserType] = useState('user');

  function getUserType(): string {
    return location.pathname.replace('/register/', '');
  }

  useEffect(() => {
    setUserType(getUserType())
  }, location)

  const formData = userType == 'user' ? (
    <>
      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>CPF</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Name</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Email</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Password</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>City</StyledLabel>
            <Form.Control />
            <AccountInformation>We will never share your account information</AccountInformation>
          </Form.Group>
        </Col>
      </Row>
    </>
  ) : (
    <>
      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>CNPJ</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Name</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Email</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} lg={8}>
          <Form.Group>
            <StyledLabel>Password</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>
    </>
  )

  return (
    <Page>
      <TextDiv>
        <Container>
          <WelcomeMessage>Welcome to ICar</WelcomeMessage>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste at non esse quas, ut laboriosam. Deserunt voluptatum
            quos officia, unde ipsa facere dolores eaque esse, ducimus maxime
            mollitia consequuntur explicabo.
          </Description>
        </Container>
      </TextDiv>
      <FormDiv>
        <Form>
          <Container>
            <WelcomeMessage>ICar</WelcomeMessage>
            <Row className="justify-content-md-center">
              <Col sm={12} lg={8}>
                <Bread>
                  <BreadItem as={Link} to='/register/user'>User</BreadItem>
                  <BreadItem as={Link} to='/register/company'>Company</BreadItem>
                </Bread>
              </Col>
            </Row>
            { formData }
            <Row className="justify-content-md-center">
              <Col md="auto">
              <SubmitButton variant="outline-secondary">Submit</SubmitButton>
            </Col>
            </Row>
          </Container>
        </Form>
      </FormDiv>
    </Page >
  )
}

export default Register
