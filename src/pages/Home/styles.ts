import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const PageBody = styled.div`
  width: 100%;
  height: 100%;
`

export const SearchContainer = styled(Container)`
  background-color: var(--white);
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-top: 7%;
`

export const SearchLabel = styled.label`
  display: block;
  color: black;
  border-bottom: 5px solid var(--red);
`
