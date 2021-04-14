import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;

  @media(max-width: 900px) {
    grid-template-columns: 100vw;
  }
`;

export const Presentation = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black);

  @media(max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Satisfy', cursive;
  color: var(--white);
  text-align: center;
  font-size: 72px;
  margin: 1%;
`;

export const Description = styled.p`
  color: var(--white);
  justify-content: center;
  padding: 5%;
  font-size: 18px;
`;

export const DataDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--red);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  font-family: 'Lobster', cursive;
  color: var(--white);
  width: 60%;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  width: 60%;
  height: 4%;
  margin-bottom: 2%;
  margin-top: 1%;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 60%;
  height: 7%;
  margin-top: 5%;
  border: none;
  background-color: var(--white);
`;

export const RegisterOption = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;