import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import { useEffect, useState } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { User } from '../../models/user'
import { parseUserWithJwt } from '../../utilities/token-utilities'

const PersonalInfo = () => {
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const [user, setUser] = useState<User>({
    oid: '',
    name: '',
    extension_phone: '',
    emails: []
  })

  useEffect(() => {
    const newUser = parseUserWithJwt(access_token)
    setUser(newUser)
  }, [access_token])

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

          <Typography variant="h4">Account information</Typography>
          <Typography variant="subtitle1" gutterBottom>Your basic account information</Typography>
          <Container className={classes.infoContainer}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  value={user.extension_phone}
                  fullWidth
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={user.emails[0]}
                  fullWidth
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={user.name}
                  fullWidth
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
        </Grid>
      </Grid>
    </>
  )
}

export default PersonalInfo
