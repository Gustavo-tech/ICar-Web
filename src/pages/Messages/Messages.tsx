import { useReactOidc } from '@axa-fr/react-oidc-context'
import { Grid, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { useContext, useEffect, useState } from 'react'
import { getTalks } from '../../api/account/get'
import { TalkResponse } from '../../api/response-types/account'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import { UIContext } from '../../contexts/UIContext'
import {
  DetailsWrapper,
  Message, NickName,
  TalkBody,
  TalkHeader,
  TalkHeaderTitle, UserPic,
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
              <TalkHeader>
                <TalkHeaderTitle>ICar</TalkHeaderTitle>
              </TalkHeader>
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

                <Grid item xs={2} justify="center" alignItems="center">
                  <SendIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <DetailsWrapper>
            <UserPic>GH</UserPic>
            <NickName>Gustavo Henrique</NickName>
          </DetailsWrapper>
        </Grid>
      </Grid>
    </>
  )
}

export default Messages
