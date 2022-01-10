import { useContext, useEffect, useState } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useHistory, useParams } from 'react-router-dom'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import { CarContext } from '../../contexts/CarContext'
import {
  CarColor,
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
  TextField,
  Typography
} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonIcon from '@material-ui/icons/Person'
import { MessageContext } from '../../contexts/MessageContext'
import { ContactContext } from '../../contexts/ContactContext'
import CarGallery from '../../components/CarGallery/CarGallery'
import { parseUserWithJwt } from '../../utilities/token-utilities'

const CarDetail = () => {

  const [showContactWarning, setShowContactWarning] = useState<boolean>(false)
  const [userIsOwner, setUserIsOwner] = useState<boolean>(false)

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
    pictures,
    price,
    ipvaIsPaid,
    isLicensed,
    isArmored,
    fetchCar,
    reset
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

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    const { emails } = parseUserWithJwt(access_token)
    const userEmail = emails[0].toLocaleLowerCase()
    const carEmail = contact.emailAddress.toLowerCase()
    setUserIsOwner(userEmail === carEmail)
  }, [access_token, contact])

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

          <CarGallery pictures={pictures} />

          <Grid container spacing={3} className={classes.mainGrid}>
            <Grid item xs={8}>
              <Container className={classes.infoContainer}>
                <NameHeader>
                  <div>
                    <CarName>{maker}</CarName> <CarName inRed>{model}</CarName>
                  </div>
                  <CarName>$ {price}</CarName>
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
                    <Typography display="block" className={classes.label}>Color</Typography>
                    <CarColor color={color} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Accepts change" value={getBoolAnswer(acceptsChange)} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Ipva Is Paid" value={getBoolAnswer(ipvaIsPaid)} />
                  </Grid>

                  <Grid item xs={3}>
                    <LabelWithValue label="Is Licensed" value={getBoolAnswer(isLicensed)} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={3}>
                    <LabelWithValue label="Is Armored" value={getBoolAnswer(isArmored)} />
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
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${contact.firstName} ${contact.lastName}`} />
                  </ListItem>

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

                {!userIsOwner &&
                  <>
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
                  </>}

                {userIsOwner &&
                  <Grid container justify="flex-start" className={classes.sendMessageFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => history.push('/account/contact')}
                    >
                      Edit Contact
                    </Button>
                  </Grid>}
              </Container>
            </Grid>
          </Grid>
        </>}
    </Page>
  )
}

export default CarDetail
