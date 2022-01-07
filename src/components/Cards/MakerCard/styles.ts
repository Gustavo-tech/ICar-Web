import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '31vh',
    cursor: 'pointer',
    backgroundColor: 'var(--red)'
  },
  maker: {
    fontFamily: 'satisfy, cursive',
    color: 'white'
  }
})
