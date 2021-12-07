import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  newsCard: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F7F7F7'
    }
  },
  newsContent: {
    height: 200,
    wordWrap: 'break-word',
    padding: '2% 5%'
  }
})
