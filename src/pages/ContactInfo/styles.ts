import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  pageStyle: {
    marginTop: '4%'
  },
  gridRow: {
    marginBottom: '1%'
  },
  gridFooter: {
    marginTop: '2%'
  },
  contactWarning: {
    marginTop: '2%'
  }
})

export const ContactForm = styled.form`
  background-color: white;
  padding: 3%;
  border-radius: 12px;
  width: 90%;
`
