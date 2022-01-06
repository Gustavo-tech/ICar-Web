import { useEffect, useContext, useState } from 'react'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
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
  MessageContainer,
  TalkBody,
  TalkHeaderTitle,
  useStyles
} from './styles'
import { MessageContext } from '../../contexts/MessageContext'
import { Interaction } from '../../models/interaction'
import { parseUserWithJwt } from '../../utilities/token-utilities'
import { hubUrl } from '../../constants/urls'
import { Message } from '../../models/message'

const Messages = () => {

  const [connection, setConnection] = useState<HubConnection | null>(null)
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
    messageText,
    setMessages,
    setMessageText,
    fetchUserInteractions,
    fetchMessagesWithUser,
    addMessage
  } = useContext(MessageContext)

  useEffect(() => {
    fetchUserInteractions(access_token)
  }, [])

  useEffect(() => {
    async function connect() {
      try {
        const connection = new HubConnectionBuilder()
          .withUrl(`${hubUrl}/chat`, {
            accessTokenFactory: () => access_token
          })
          .configureLogging(LogLevel.Information)
          .build()

        connection.on("ReceiveMessage", (message: Message) => {
          addMessage(message)
        })

        connection.on("MessageSent", (message: Message) => {
          addMessage(message)
        })

        await connection.start()
        await connection.invoke('connect', access_token)

        setConnection(connection)
      } catch (error) {
        console.error(error)
      }
    }

    if (userInteractions.length > 0) {
      connect()
    }

  }, [userInteractions])

  function handleInteractionClick(interaction: Interaction): void {
    setInteractionSelected(interaction)
    fetchMessagesWithUser(interaction.withUserId, interaction.subjectId, access_token)
  }

  async function handleSendMessageClick(): Promise<any> {
    if (connection) {
      const { withUserId, subjectId } = interactionSelected
      setMessageText('')
      await connection.invoke('SendMessage', access_token, withUserId, subjectId, messageText)
    }
  }

  console.log(messages)
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
                    <MessageContainer key={x.id} sent={userSentTheMessage}>{x.text}</MessageContainer>
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
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                </Grid>

                <Grid container item xs={1} justify="center" alignItems="center">
                  <IconButton color="primary" onClick={handleSendMessageClick}>
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
