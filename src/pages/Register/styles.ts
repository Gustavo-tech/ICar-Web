import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;

  @media(max-width: 900px) {
    grid-template-columns: 100vw;
  }
`;

export const TextDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black);

  @media(max-width: 900px) {
    display: none;
  }
`

export const WelcomeMessage = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 70px;
`

export const Description = styled.p`
  text-align: center;
  color: white;
  padding: 4%;
`;

export const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--red);
`;

export const StyledLabel = styled(Form.Label)`
  color: white;
`;

export const AccountInformation = styled(Form.Text)`
  color: white;
`;

export const SubmitButton = styled(Button)`
  background-color: var(--white);
`;
