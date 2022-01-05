import { useEffect, useContext, useState } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import {
  Grid,
  IconButton,
  TextField
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import {
  Message,
  TalkBody,
  TalkHeaderTitle,
  useStyles
} from './styles'
import { MessageContext } from '../../contexts/MessageContext'
import { Interaction } from '../../models/interaction'
import { parseUserWithJwt } from '../../utilities/token-utilities'

const Messages = () => {

  const [interactionSelected, setInteractionSelected] = useState<Interaction>({
    firstName: '',
    id: '',
    lastMessage: '',
    lastName: '',
    subjectId: '',
    userId: '',
    withUserId: ''
  })

  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const userId = parseUserWithJwt(access_token).oid

  const {
    userInteractions,
    messages,
    fetchUserInteractions,
    fetchMessagesWithUser
  } = useContext(MessageContext)

  useEffect(() => {
    fetchUserInteractions(access_token)
  }, [])

  function handleInteractionClick(interaction: Interaction): void {
    setInteractionSelected(interaction)
    fetchMessagesWithUser(interaction.withUserId, interaction.subjectId, access_token)
  }

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />
      <Grid container spacing={1} className={classes.grid}>

        <Grid item xs={3}>
          <TalkSidebar
            onInteractionClick={handleInteractionClick}
            interactionSelected={interactionSelected}
            interactions={userInteractions}
          />
        </Grid>

        <Grid item xs={9}>
          <Grid container spacing={1} direction="column">
            <Grid item xs={12}>
              <TalkHeaderTitle>ICar</TalkHeaderTitle>
            </Grid>

            <Grid item xs={12}>
              <TalkBody>
                {messages.map(x => {
                  const userSentTheMessage = x.fromUser === userId
                  return (
                    <Message key={x.id} sent={userSentTheMessage}>{x.text}</Message>
                  )
                })}
              </TalkBody>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    label="message"
                    variant="outlined"
                    placeholder="Type your message"
                  />
                </Grid>

                <Grid container item xs={1} justify="center" alignItems="center">
                  <IconButton color="primary">
                    <SendIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default Messages
