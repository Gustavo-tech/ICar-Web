import { 
  DataDiv, 
  Description, 
  Form, 
  GridWrapper, 
  Input, 
  Label, 
  Presentation, 
  Title 
} from "./styles"

const Register = () => {
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
          <Label>Email</Label>
          <Input />
          <Label>Password</Label>
          <Input />
          <Label>Name</Label>
          <Input />
          <Label>City</Label>
          <Input />
        </Form>
      </DataDiv>
    </GridWrapper>
  )
}

export default Register
