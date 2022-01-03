import { Sidebar, useStyles } from './style'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core'
import { Interaction } from '../../../models/interaction'

type TalkSidebarProps = {
  interactions: Interaction[];
}

const TalkSidebar = ({ interactions }: TalkSidebarProps) => {

  function getUserAvatar(firstName: string, lastName: string): string {
    return firstName[0] + lastName[0]
  }

  const classes = useStyles()
  return (
    <Sidebar>
      <TextField
        variant="outlined"
        label="Search someone"
        className={classes.textField}
      />
      <List className={classes.list}>
        {
          interactions.map((x) => {
            const avatarText = getUserAvatar(x.firstName, x.lastName)
            return (
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>{avatarText}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${x.firstName} ${x.lastName}`}
                  secondary={x.lastMessage} />
              </ListItem>
            )
          })
        }
      </List>
    </Sidebar>
  )
}

export default TalkSidebar
