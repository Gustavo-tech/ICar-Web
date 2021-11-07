import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from 'react-bootstrap'

export const useStyles = makeStyles({
  pageGrid: {
    marginTop: '2%',
  }
})

export const ListContainer = styled(Container)`
  background-color: white;
  border-radius: 17px;
  padding: 2%;
  width: 80%;
  height: 70%;
  margin-bottom: 3%;
  border: 1px solid #CECECE;
`

export const SecurityTitle = styled.h2`
  text-align: center;
  color: black;
`
