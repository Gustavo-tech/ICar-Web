import { useState } from 'react'
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

  const [interactionsAux, setInteractionsAux] = useState<Interaction[]>(interactions)

  function getUserAvatar(firstName: string, lastName: string): string {
    return firstName[0] + lastName[0]
  }

  function handleSearchTextChange(text: string): void {
    if (text === '')
      setInteractionsAux(interactions)

    else {
      let newInteractions: Interaction[] = interactions.filter(x => {
        const fullName: string = `${x.firstName} ${x.lastName}`
        return fullName.includes(text)
      })

      setInteractionsAux(newInteractions)
    }
  }

  const classes = useStyles()
  return (
    <Sidebar>
      <TextField
        variant="outlined"
        label="Search someone"
        className={classes.textField}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      <List className={classes.list}>
        {
          interactionsAux.map((x) => {
            const avatarText = getUserAvatar(x.firstName, x.lastName)
            return (
              <ListItem className={classes.listItem} key={x.id}>
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
