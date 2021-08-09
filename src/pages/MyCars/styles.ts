import styled from 'styled-components'

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84vh;
`

export const ContentGrid = styled.div`
  display: grid;
  margin-top: 4%;
  width: 100%;
  height: 100%;
  grid-template-columns: 20% 80%;
  grid-template-rows: 82vh;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 6%;
`
