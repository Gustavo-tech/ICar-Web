import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  container: {
    padding: '2% 1%'
  },
  sectionHeader: {
    marginBottom: '1%'
  },

})

export const CenteredContent = styled.div`
  display: flex;
  width: 100%;
  height: 91%;
  justify-content: center;
  align-items: center;
`
