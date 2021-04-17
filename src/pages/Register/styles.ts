import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

export const Page = styled.div`
  background-color: var(--red);
  min-height: 100vh;
  padding: 3%;
`;

export const Logo = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 70px;
`;

export const FormContainer = styled(Container)`
  background-color: white;
  border-radius: 7px;
  padding: 4%;
`;

export const RegisterTitle = styled.h2`
  text-align: center;
  font-family: 'Satisfy', cursive;
`;

export const LoginMessage = styled(Link)`
  color: white;
  transition-duration: 0.5s;
  
  &:hover {
    color: black;
  }
`;
