import { useReactOidc } from '@axa-fr/react-oidc-context'
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { useContext, useEffect, useState } from 'react'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import { UIContext } from '../../contexts/UIContext'
import EmailIcon from '@material-ui/icons/Email'
import { getTalks } from '../../api/messages/get'
import {
  Message,
  NickName,
  TalkBody,
  TalkHeaderTitle,
  UserInfo,
  useStyles
} from './styles'
import { Talk } from '../../models/talk'

const Messages = () => {

  const { isLoading, setIsLoading } = useContext(UIContext);
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const [talks, setTalks] = useState<Talk[]>([])

  useEffect(() => {
    setIsLoading(true)
    getTalks(access_token, (data) => {
      setTalks(data)
    })
  }, [])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />
      <Grid container spacing={1} className={classes.grid}>

        <Grid item xs={3}>
          <TalkSidebar />
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
