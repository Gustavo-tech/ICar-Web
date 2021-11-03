import { makeStyles, Theme } from "@material-ui/core"

type Props = {
  accountActive: boolean,
  securityActive: boolean
}

export const useStyles = makeStyles<Theme, Props>({
  list: {
    backgroundColor: 'white'
  },
  accountItem: {
    transitionDuration: '0.5s',
    backgroundColor: ({ accountActive }) => accountActive ? 'var(--red)' : 'white',
    cursor: 'pointer',
    '&:hover': {

      backgroundColor: ({ accountActive }) => accountActive ? 'var(--red)' : '#D6D5D5'
    }
  },
  securityItem: {
    transitionDuration: '0.5s',
    backgroundColor: ({ securityActive }) => securityActive ? 'var(--red)' : 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ({ securityActive }) => securityActive ? 'var(--red)' : '#D6D5D5'
    }
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  iconAccount: {
    fill: ({ accountActive }) => accountActive ? 'white' : '#7A7A7A'
  },
  iconSecurity: {
    fill: ({ securityActive }) => securityActive ? 'white' : '#7A7A7A'
  },
  accountText: {
    color: ({ accountActive }) => accountActive ? 'white' : '#7A7A7A'
  },
  securityText: {
    color: ({ securityActive }) => securityActive ? 'white' : '#7A7A7A'
  }
})
