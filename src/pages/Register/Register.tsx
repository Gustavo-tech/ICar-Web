// react
import { useState, useEffect } from 'react';

// styles
import {
  DataDiv,
  Description,
  Form,
  GridWrapper,
  Input,
  Label,
  Presentation,
  Title,
  SubmitButton,
  RegisterOption
} from "./styles"

const Register = ({ location }: any) => {
  const [userType, setUserType] = useState('user');

  function getUserType(): string {
    return location.pathname.replace('/register/', '');
  }

  useEffect(() => {
    setUserType(getUserType);
    console.log(userType)
  }, [location])

  const formTemplate = userType == 'user' ? (
    <>
      <Label>CPF</Label>
      <Input />
      <Label>Email</Label>
      <Input />
      <Label>Password</Label>
      <Input />
      <Label>Name</Label>
      <Input />
      <Label>City</Label>
      <Input />
    </>

  ) : (
    <>
      <Label>CNPJ</Label>
      <Input />
      <Label>Name</Label>
      <Input />
      <Label>Email</Label>
      <Input />
      <Label>Password</Label>
      <Input />
    </>
  )

  return (
    <GridWrapper>
      <Presentation>
        <Title>Welcome to ICar</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum reiciendis,
          libero saepe quae facilis officiis nihil assumenda laborum aperiam minima consectetur,
          dolore maxime ut quasi atque et cupiditate mollitia fuga illum incidunt a quos totam!
          Beatae assumenda doloremque repellat voluptatem alias. Placeat accusantium doloribus aut,
          magni eius aliquam assumenda!
        </Description>
      </Presentation>
      <DataDiv>
        <Form>
          <Title>ICar</Title>
          <b
            style={{
              margin: '5%'
            }}
          ><RegisterOption to='/register/user'>User</RegisterOption> / <RegisterOption to='/register/company'>Company</RegisterOption></b>
          { formTemplate }
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </DataDiv>
    </GridWrapper>
  )
}

export default Register
