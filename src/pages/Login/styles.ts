import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const FormDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--red);
`;

export const Icar = styled.h1`
  text-align: center;
  color: var(--white);
  font-family: 'Satisfy', cursive;
  font-size: 96px;
  margin-top: 4%;
`;

export const Label = styled(Form.Label)`
  color: white;
`;

export const ForgotPassword = styled(Form.Text)`
  color: var(--white);

  &:hover {
    color: var(--black);
    transition-duration: 1s;
  }
`;

export const RegisterLink = styled(Link)`
  color: var(--white);
  transition-duration: 0.5s;

  &:hover {
    color: var(--black);
  }
`;

export const RegisterRow = styled(Row)`
  margin: 4%;
`;
