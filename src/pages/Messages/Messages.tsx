import { useReactOidc } from '@axa-fr/react-oidc-context'
import { Avatar, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { useContext, useEffect, useState } from 'react'
import { getTalks } from '../../api/account/get'
import { TalkResponse } from '../../api/response-types/account'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import { UIContext } from '../../contexts/UIContext'
import EmailIcon from '@material-ui/icons/Email'
import {
  Message,
  NickName,
  TalkBody,
  TalkHeaderTitle,
  UserInfo,
  useStyles
} from './styles'

const Messages = () => {

  const { isLoading, setIsLoading } = useContext(UIContext);
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const email = profile.email

  const [talks, setTalks] = useState<TalkResponse[]>([])

  useEffect(() => {
    setIsLoading(true)
    getTalks(access_token, email, (data) => {
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

        <Grid item xs={6}>
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
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    label="message"
                    variant="outlined"
                    placeholder="Type your message"
                  />
                </Grid>

                <Grid container item xs={2} justify="center" alignItems="center">
                  <SendIcon className={classes.sendIcon} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={3}
        >
          <UserInfo>
            <Avatar>GH</Avatar>
            <Typography variant="h6">Gustavo Henrique</Typography>

            <List>
              <ListItem>
                <ListItemIcon className={classes.listIcon}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="gustavo@gmail.com" />
              </ListItem>
            </List>
          </UserInfo>
        </Grid>
      </Grid>
    </>
  )
}

export default Messages
