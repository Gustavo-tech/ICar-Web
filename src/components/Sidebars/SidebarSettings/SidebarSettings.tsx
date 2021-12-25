import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import SecurityIcon from '@material-ui/icons/Security'
import { useHistory, useLocation } from 'react-router'
import { useStyles } from './styles'

const SidebarSettings = () => {
  let location = useLocation()
  let history = useHistory()
  const classes = useStyles({
    securityActive: location.pathname === '/account/security',
    accountActive: location.pathname === '/account/personal'
  })

  return (
    <List className={classes.list}>
      <ListItem className={classes.accountItem} onClick={() => history.push('/account/personal')}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <AccountCircle className={classes.iconAccount} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.accountText} primary="Account" />
      </ListItem>
    </List>
  )
}

export default SidebarSettings
