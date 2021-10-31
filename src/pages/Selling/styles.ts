import styled from 'styled-components'

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 84vh;

  & > svg {
    transform: scale(4);
    height: 20%;
  }
`

export const ContentGrid = styled.div`
  display: flex;
  margin-top: 4%;
  width: 100%;
  height: 100%;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 6%;
`
