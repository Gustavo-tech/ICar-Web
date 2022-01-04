import { useContext, useState, useEffect } from 'react'
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import { useStyles, ContactForm } from './styles'
import { ContactContext } from '../../contexts/ContactContext'
import { Contact } from '../../models/contact'
import { useReactOidc } from '@axa-fr/react-oidc-context'

const ContactInfo = () => {

  const [isEditing, setIsEditing] = useState<boolean>(false)

  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const {
    contact,
    userHasContact,
    setContact,
    fetchMyContact,
    createContact,
    updatePhoneNumber
  } = useContext(ContactContext)

  useEffect(() => {
    fetchMyContact(access_token)
  }, [])

  function setContactCopyWithPropertyValue(propName: string, value: string): void {
    const newContact: Contact = {
      ...contact,
      [propName]: value
    }

    setContact(newContact)
  }

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
          <Typography variant="h4">Contact information</Typography>
          <Typography variant="subtitle1" gutterBottom>
            This is the contact that will be shown for all of your cars.
          </Typography>
          <ContactForm onSubmit={(e) => {
            e.preventDefault()

            if (!userHasContact)
              createContact(access_token)

            else if (userHasContact) {
              updatePhoneNumber(access_token)
              setIsEditing(false)
            }
          }}>
            <Grid
              container
              spacing={2}
              justify="space-between"
              className={classes.gridRow}
            >
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  onChange={(e) => setContactCopyWithPropertyValue('firstName', e.target.value)}
                  value={contact.firstName}
                  disabled={userHasContact}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  onChange={(e) => setContactCopyWithPropertyValue('lastName', e.target.value)}
                  value={contact.lastName}
                  disabled={userHasContact}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <TextField
              label="Phone Number"
              onChange={(e) => setContactCopyWithPropertyValue('phoneNumber', e.target.value)}
              value={contact.phoneNumber}
              disabled={!isEditing && userHasContact}
              required
              fullWidth
            />

            <Grid
              container
              justify="flex-end"
              alignItems="center"
              className={classes.gridFooter}
            >
              {!userHasContact &&
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create contact
                </Button>}

              {userHasContact && !isEditing &&
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>}

              {userHasContact && isEditing &&
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Update contact
                </Button>}
            </Grid>
          </ContactForm>
        </Grid>
      </Grid>
    </>
  )
}

export default ContactInfo
