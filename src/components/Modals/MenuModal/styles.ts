import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabGrid: {
    height: '18%'
  },
  tabs: {
    backgroundColor: 'var(--red)'
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: '60%',
    height: '75%'
  },
  itemsBody: {
    height: '80%',
    padding: '0 1%'
  },
  menuItem: {
    height: '9vw',
  },
  paperItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    transitionDuration: '0.5s',

    '&:hover': {
      backgroundColor: '#F5F5F5'
    }
  },
  menuIcon: {
    fill: '#434343',
    marginBottom: 7
  },
  itemText: {
    color: '#434343'
  }
})
