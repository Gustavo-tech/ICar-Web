import styled from 'styled-components';
import Form from 'react-bootstrap/Form'

export const PageTitle = styled.h2`
  text-align: center;
  color: var(--black);
`

export const Description = styled.p`
  color: var(--black);
  text-align: center;
`

export const Page = styled.div`
  padding-top: 3%;
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: var(--white);
  grid-template-rows: 100%;
  width: 100%;
  height: 100%;
`
