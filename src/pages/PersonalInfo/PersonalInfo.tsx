import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {
  Page,
  PageTitle,
  Description,
  SpinnerDiv
} from './styles'
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

  const content = isLoading ? (
    <SpinnerDiv>

    </SpinnerDiv>
  ) : (
    <div>
      <PageTitle>Account information</PageTitle>
      <Description>Your basic account information</Description>
      <Grid container direction="row">
        <Container>
          <TextField label="Phone" value={profile.phone_number} disabled />

          <TextField label="Email" disabled value={profile.email} />

          <TextField label="User" disabled value={profile.name} />

          <TextField label="Account Creation Date" disabled value={accountCreationDate} />
          <Button>Edit</Button>
        </Container>
      </Grid>
    </div>
  )

  return (
    <>
      <Navbar showSearch={false} />
      <Page>
        <SidebarSettings />
        {content}
      </Page>
    </>
  )
}

export default PersonalInfo
