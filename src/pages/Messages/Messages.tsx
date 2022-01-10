import { useEffect, useContext, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import {
  Avatar,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import {
  MessageContainer,
  TalkBody,
  useStyles
} from './styles'
import { MessageContext } from '../../contexts/MessageContext'
import { Interaction } from '../../models/interaction'
import { parseUserWithJwt } from '../../utilities/token-utilities'
import { hubUrl } from '../../constants/urls'
import { Message } from '../../models/message'
import { getCarWithId } from '../../api/car/get'

const Messages = () => {

  const [connection, setConnection] = useState<HubConnection | null>(null)
  const [carPicture, setCarPicture] = useState<string>('')
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

  const talkBodyRef = useRef<HTMLDivElement>(null)
  const history = useHistory()

  useEffect(() => {
    fetchUserInteractions(access_token)
  }, [])

  useEffect(() => {
    setMessages([])
  }, [])

  useEffect(() => {
    if (interactionSelected.subjectId !== '') {
      getCarWithId(access_token, interactionSelected.subjectId)
        .then(response => {
          if (response.status === 200) {
            const { data } = response
            setCarPicture(data.pictures[0])
          }
        })
    }
  }, [interactionSelected])

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
          if (message.fromUser === interactionSelected.withUserId) {
            handleNewMessage(message)
          }
        })

        connection.on("MessageSent", (message: Message) => {
          handleNewMessage(message)
        })

        await connection.start()
        await connection.invoke('connect', access_token)

        setConnection(connection)
      } catch (error) {
        console.error(error)
      }
    }

    connect()
  }, [])

  function handleInteractionClick(interaction: Interaction): void {
    setInteractionSelected(interaction)
    fetchMessagesWithUser(interaction.withUserId, interaction.subjectId, access_token)

    if (talkBodyRef.current) {
      talkBodyRef.current.scrollTop = talkBodyRef.current.scrollHeight
    }
  }

  async function handleSendMessageClick(): Promise<any> {
    if (connection) {
      const { withUserId, subjectId } = interactionSelected
      setMessageText('')
      await connection.invoke('SendMessage', access_token, withUserId, subjectId, messageText)
    }
  }

  function handleNewMessage(message: Message): void {
    addMessage(message)
    talkBodyRef.current!.scrollTop = talkBodyRef.current!.scrollHeight
  }

  function handleAvatarClick(): void {
    setMessages([])
    history.push(`/selling/${interactionSelected.subjectId}`)
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

        {messages.length > 0 &&
          <Grid item xs={9}>
            <Grid container spacing={1} direction="column">
              <Grid
                container
                item
                xs={12}
                justify="space-between"
                alignItems="center"
                className={classes.talkHeader}
              >
                <Typography variant="h6" className={classes.talkHeaderTitle} color="primary">
                  {`${interactionSelected.firstName} ${interactionSelected.lastName}`}
                </Typography>

                {carPicture !== '' &&
                  <Avatar
                    src={carPicture}
                    className={classes.carAvatar}
                    onClick={handleAvatarClick}
                  />}
              </Grid>

              <Grid item xs={12}>
                <TalkBody ref={talkBodyRef}>
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
          </Grid>}
      </Grid>
    </>
  )
}

export default Messages
