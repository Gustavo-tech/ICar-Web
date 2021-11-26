import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './styles'
import { useEffect, useState, useContext } from 'react'
import { getUserInfo } from '../../api/account/get'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { UIContext } from '../../contexts/UIContext'

const PersonalInfo = () => {
  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { profile, access_token } = oidcUser

  const [accountCreationDate, setAccountCreationDate] = useState('')

  const email = profile.email
  useEffect(() => {
    setIsLoading(true)
    getUserInfo('Bearer ' + access_token, email, (data) => {
      setAccountCreationDate(new Date(data.accountCreationDate).toDateString())
      setIsLoading(false)
    })
  }, [])

  const classes = useStyles()
  return (
    <>
      <Navbar showSearch={false} />
      <Grid
        container
        spacing={2}
        className={classes.pageStyle}
      >
        <Grid item xs={3}>
          <SidebarSettings />
        </Grid>

        <Grid
          container
          item
          xs={9}
          direction="column"
          justify="center"
          alignItems="center"
        >
          {isLoading &&
            <CircularProgress />}

          {!isLoading &&
            <>
              <Typography variant="h4">Account information</Typography>
              <Typography variant="subtitle1" gutterBottom>Your basic account information</Typography>
              <Container className={classes.infoContainer}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      value={profile.phone_number}
                      fullWidth
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      value={profile.email}
                      fullWidth
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="User"
                      variant="outlined"
                      value={profile.name}
                      fullWidth
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Account Creation Date"
                      variant="outlined"
                      fullWidth
                      value={accountCreationDate}
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Grid>
                </Grid>

              </Container>
            </>}
        </Grid>
      </Grid>
    </>
  )
}

export default PersonalInfo
