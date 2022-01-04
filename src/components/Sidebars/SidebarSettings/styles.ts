import { makeStyles, Theme } from "@material-ui/core"

type Props = {
  accountActive: boolean,
  contactActive: boolean
}

export const useStyles = makeStyles<Theme, Props>({
  list: {
    backgroundColor: 'white',
    height: '100%'
  },
  accountItem: {
    transitionDuration: '0.5s',
    backgroundColor: ({ accountActive }) => accountActive ? 'var(--red)' : 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ({ accountActive }) => accountActive ? 'var(--red)' : '#D6D5D5'
    }
  },
  contactItem: {
    transitionDuration: '0.5s',
    backgroundColor: ({ contactActive }) => contactActive ? 'var(--red)' : 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ({ contactActive }) => contactActive ? 'var(--red)' : '#D6D5D5'
    }
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  iconAccount: {
    fill: ({ accountActive }) => accountActive ? 'white' : '#7A7A7A'
  },
  iconContact: {
    fill: ({ contactActive }) => contactActive ? 'white' : '#7A7A7A'
  },
  accountText: {
    color: ({ accountActive }) => accountActive ? 'white' : '#7A7A7A'
  },
  contactText: {
    color: ({ contactActive }) => contactActive ? 'white' : '#7A7A7A'
  },
})
