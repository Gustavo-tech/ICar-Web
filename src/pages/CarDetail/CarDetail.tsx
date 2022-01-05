import { useContext, useEffect, useState } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useHistory, useParams } from 'react-router-dom'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import { CarContext } from '../../contexts/CarContext'
import {
  CarName,
  NameHeader,
  Page,
  useStyles
} from './styles'
import LabelWithValue from '../../components/LabelWithValue/LabelWithValue'
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField
} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { MessageContext } from '../../contexts/MessageContext'
import { ContactContext } from '../../contexts/ContactContext'

const CarDetail = () => {

  const [showContactWarning, setShowContactWarning] = useState<boolean>(false)

  const history = useHistory()

  const { isLoading } = useContext(UIContext)
  const {
    maker,
    model,
    makeDate,
    makedDate,
    kilometers,
    exchangeType,
    gasolineType,
    color,
    acceptsChange,
    message,
    contact,
    fetchCar
  } = useContext(CarContext)
  const {
    messageText,
    setMessageText,
    addUserInteraction
  } = useContext(MessageContext)

  const { userHasContact, fetchMyContact } = useContext(ContactContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetchCar(id, access_token)
    fetchMyContact(access_token)
  }, [])

  function getBoolAnswer(value?: boolean): string {
    if (value)
      return "Yes"

    return "No"
  }

  function handleSendMessageClick(): void {
    if (userHasContact)
      addUserInteraction(id, access_token)

    else
      setShowContactWarning(true)
  }

  const classes = useStyles()
  return (
    <Page>
      <AppNavbar showSearch />

      {isLoading &&
        <CircularProgress />}

      {!isLoading &&
        <>
          <Dialog
            open={showContactWarning}
            onClose={() => setShowContactWarning(false)}
          >
            <DialogContent>
              <DialogContentText>
                You can't send a message because you don't have a contact,
                you can create one by clicking on the create account
                button below
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button
                variant="outlined"
                onClick={() => setShowContactWarning(false)}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/account/contact')}
              >
                Create account
              </Button>
            </DialogActions>
          </Dialog>

          <Grid container spacing={3} className={classes.mainGrid}>

            <Grid item xs={8}>
              <Container className={classes.infoContainer}>
                <NameHeader>
                  <CarName>{maker}</CarName> <CarName inRed>{model}</CarName>
                </NameHeader>

                <Grid container>
                  <Grid item xs={3}>
                    <LabelWithValue label="Year" value={`${makeDate}/${makedDate}`} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="KM" value={kilometers.toString()} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Exchange" value={exchangeType} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Gasoline type" value={gasolineType} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={3}>
                    <LabelWithValue label="Color" value={color} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Accepts change" value={getBoolAnswer(acceptsChange)} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Year" value={`${makeDate}/${makedDate}`} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={3}>
                    <LabelWithValue label="KM" value={kilometers.toString()} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
                  </Grid>
                </Grid>

                <TextField
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={10}
                  disabled
                  fullWidth
                  className={classes.description}
                  value={message}
                />
              </Container>
            </Grid>

            <Grid
              container
              item
              xs={4}
              alignItems='flex-start'
            >
              <Container className={`${classes.infoContainer} ${classes.contactContainer}`}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={contact.emailAddress} />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={contact.phoneNumber} />
                  </ListItem>
                </List>

                <TextField
                  label="Message"
                  variant="outlined"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={7}
                  multiline
                  fullWidth
                />

                <Grid container justify="flex-start" className={classes.sendMessageFooter}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessageClick}
                  >
                    Send
                  </Button>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </>}
    </Page>
  )
}

export default CarDetail
