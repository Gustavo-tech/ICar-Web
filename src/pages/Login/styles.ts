import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;
`;

export const PicDiv = styled.img`
  width: 100%;
  height: 100%;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--red);
`

export const StyledTitle = styled.h1`
  font-family: 'Satisfy', cursive;
  text-align: center;
  font-size: 6rem;
  color: var(--white);
  margin: 1%;
`;

export const StyledLabel = styled.label`
  font-family: 'Lobster', cursive;
  color: var(--white);
  width: 60%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 60%;
  height: 5%;
  margin-bottom: 6%;
`;

export const StyledMessage = styled(Link)`
  font-family: 'Satisfy', cursive;
  color: var(--white);
  display: block;
  text-decoration: none;  
  font-size: 1.5rem;
  margin-top: -4%;
  margin-bottom: 7%;
`;

export const StyledLoginBtn = styled.button`
  width: 60%;
  background-color: var(--white);
  border: none;
  font-family: 'Satisfy', cursive;
  height: 8%;
  font-size: 2rem;
  cursor: pointer;
`;