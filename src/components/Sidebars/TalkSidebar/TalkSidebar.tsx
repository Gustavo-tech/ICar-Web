import { useState, useEffect } from 'react'
import { NotFoundContainer, Sidebar, useStyles } from './style'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Interaction } from '../../../models/interaction'
import SearchIcon from '@material-ui/icons/Search'

type TalkSidebarProps = {
  interactions: Interaction[];
  interactionSelected: Interaction;
  onInteractionClick: (interactionClicked: Interaction) => any;
}

const TalkSidebar = ({ interactions, onInteractionClick }: TalkSidebarProps) => {

  const [interactionsAux, setInteractionsAux] = useState<Interaction[]>([])

  useEffect(() => {
    const newInteractionsAux = [...interactions]
    setInteractionsAux(newInteractionsAux)
  }, [interactions])

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

      {interactions.length > 0 &&
        <List className={classes.list}>
          {
            interactionsAux.map((x) => {
              const avatarText = getUserAvatar(x.firstName, x.lastName)
              return (
                <ListItem
                  key={x.id}
                  className={classes.listItem}
                  onClick={() => onInteractionClick(x)}
                >
                  <ListItemAvatar>
                    <Avatar>{avatarText}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`${x.firstName} ${x.lastName}`}
                    secondary={x.lastMessage} />
                </ListItem>
              )
            })
          }
        </List>}

      {interactions.length === 0 &&
        <NotFoundContainer>
          <SearchIcon fontSize="large" />
          <Typography variant="body2">You haven't talked to anyone</Typography>
        </NotFoundContainer>}

    </Sidebar>
  )
}

export default TalkSidebar
