import { useEffect, useContext } from 'react'
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

const Messages = () => {

  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const { userInteractions, fetchUserInteractions } = useContext(MessageContext)

  useEffect(() => {
    fetchUserInteractions(access_token)
  }, [])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />
      <Grid container spacing={1} className={classes.grid}>

        <Grid item xs={3}>
          <TalkSidebar interactions={userInteractions} />
        </Grid>

        <Grid item xs={9}>
          <Grid container spacing={1} direction="column">
            <Grid item xs={12}>
              <TalkHeaderTitle>ICar</TalkHeaderTitle>
            </Grid>

            <Grid item xs={12}>
              <TalkBody>
                <Message sent={false}>Hello</Message>
                <Message sent={true}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus totam quis eum maxime optio nulla in, dolorem consectetur eveniet.</Message>
                <Message sent={false}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus totam quis eum maxime optio nulla in, dolorem consectetur eveniet.</Message>
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
