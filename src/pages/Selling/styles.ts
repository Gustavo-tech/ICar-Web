import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  grid: {
    height: '100%',
    marginTop: '3%'
  },
})


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
