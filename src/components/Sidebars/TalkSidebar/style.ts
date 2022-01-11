import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  textField: {
    backgroundColor: 'white',
    borderRadius: '7px'
  },
  list: {
    marginTop: '4%'
  },
  listItem: {
    cursor: 'pointer',
    transitionDuration: '0.5s',
    '&:hover': {
      backgroundColor: '#EAEAEA'
    }
  }
})

export const Sidebar = styled.div`
  display: flex;
  background-color: white;
  border: 2px solid #D7D6D6;
  flex-direction: column;
  padding: 2% 1%;
  width: 100%;
  height: 100%;
`

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
`
