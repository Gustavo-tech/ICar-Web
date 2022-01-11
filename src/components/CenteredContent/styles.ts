import styled from 'styled-components'

type CenterDivProps = {
  direction: 'column' | 'row';
}

export const CenterDiv = styled.div<CenterDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: ${props => props.direction};
`
