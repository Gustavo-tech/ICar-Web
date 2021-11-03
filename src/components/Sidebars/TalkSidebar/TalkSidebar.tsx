import {
  Sidebar,
} from './style'
import { TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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

const TalkSidebar = () => {

  const classes = useStyles()
  return (
    <Sidebar>
      <TextField
        variant="outlined"
        label="Search someone"
        className={classes.textField}
      />
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemAvatar>
            <Avatar>

            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Gustavo" secondary="Hello, I am interested in your car" />
        </ListItem>
      </List>
    </Sidebar>
  )
}

export default TalkSidebar
