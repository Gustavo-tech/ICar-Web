// react
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// react bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

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
} from './styles';


const Register = ({ location }: any) => {
  const [userType, setUserType] = useState('user');

  function getUserType(): string {
    return location.pathname.replace('/register/', '');
  }

  useEffect(() => {
    setUserType(getUserType())
  }, [location])

  const formData = userType == 'user' ? (
    <>
      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>CPF</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Name</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Email</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Password</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
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
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>CNPJ</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Name</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Email</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8}>
          <Form.Group>
            <StyledLabel>Password</StyledLabel>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>
    </>
  )
  
  console.log(userType)
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
              <Col sm={12} lg={8} md={8}>
                <Breadcrumb>
                  <Breadcrumb.Item as={Link} href='/register/user' to='/register/user'>User</Breadcrumb.Item>
                  <Breadcrumb.Item as={Link} href='/register/company' to='/register/company'>Company</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
            { formData }
            <Row className="justify-content-md-center">
              <Col md={8} lg={8} sm={12}>
              <SubmitButton variant="outline-secondary" block>Submit</SubmitButton>
            </Col>
            </Row>
          </Container>
        </Form>
      </FormDiv>
    </Page >
  )
}

export default Register
