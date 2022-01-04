import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import { useHistory, useLocation } from 'react-router'
import { useStyles } from './styles'

const SidebarSettings = () => {
  let location = useLocation()
  let history = useHistory()
  const classes = useStyles({
    contactActive: location.pathname === '/account/contact',
    accountActive: location.pathname === '/account/personal'
  })

  return (
    <List className={classes.list}>
      <ListItem className={classes.accountItem} onClick={() => history.push('/account/personal')}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonOutlineIcon className={classes.iconAccount} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.accountText} primary="Account" />
      </ListItem>

      <ListItem className={classes.contactItem} onClick={() => history.push('/account/contact')}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <ContactPhoneIcon className={classes.iconContact} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.contactText} primary="Contact" />
      </ListItem>
    </List>
  )
}

export default SidebarSettings
