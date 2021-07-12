import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-background);
`

export const Content = styled.main`
  background-color: white;
  border-bottom: 3rem solid var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  width: 40%;
  height: 70%;

  & > svg {
    fill: var(--red);
    height: 40%;
    width: 40%;
  }
`

export const Title = styled.h2`
  text-align: center;
  /* color: var(--red); */
`

export const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #353535;
`
