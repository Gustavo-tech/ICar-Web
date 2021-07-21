import styled from 'styled-components';

export const PageTitle = styled.h2`
  text-align: center;
  color: var(--black);
`

export const Description = styled.p`
  color: var(--black);
  text-align: center;
`

export const Page = styled.div`
  padding: 2% 0;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  width: 100%;
  height: 100%;
`

export const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
