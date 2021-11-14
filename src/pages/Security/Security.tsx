import { useReactOidc } from '@axa-fr/react-oidc-context'
import { Avatar, Grid, ListItemAvatar, ListItemText } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorIcon from '@material-ui/icons/Error'
import { useContext, useEffect, useState } from 'react'
import { getLogins } from '../../api/account/get'
import { LoginResponse } from '../../api/response-types/account'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import { UIContext } from '../../contexts/UIContext'
import { useStyles } from './styles'

const Security = () => {

  const [logins, setLogins] = useState<LoginResponse[] | undefined>(undefined)

  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile

  useEffect(() => {
    setIsLoading(true)
    getLogins(access_token, email!, (logins) => {
      setIsLoading(false)
      setLogins(logins)
    })
  }, [])

  const classes = useStyles()
  return (
    <>
      <Navbar showSearch={false} />
      <Grid container className={classes.pageGrid}>

        <Grid item xs={3}>
          <SidebarSettings />
        </Grid>

        <Grid item xs={9}>
          <Grid container direction="column" alignItems="center">
            {/* {isLoading &&
            <CircularProgress color="primary" />} */}

            {!isLoading &&
              <>
                <Grid item xs={12}>
                  <Typography variant="h4">Security</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Here you can check all your logins to look for suspect actions.
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.listContainer}>
                  <List>
                    {
                      logins?.map(x => (
                        <>
                          <ListItem key={x.id.toString()}>
                            <ListItemAvatar>
                              <Avatar style={{ backgroundColor: 'transparent' }}>
                                {x.success && <CheckCircleIcon style={{ fill: '#29FA2C' }} />}
                                {!x.success && <ErrorIcon style={{ fill: '#F43813' }} />}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>{new Date(x.time).toString()}</ListItemText>
                          </ListItem>
                        </>
                      ))
                    }
                  </List>
                </Grid>
              </>}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Security
