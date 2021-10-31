import { useReactOidc } from '@axa-fr/react-oidc-context'
import { Avatar, ListItemAvatar, ListItemText } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import { getLogins } from '../../api/account/get'
import { LoginResponse } from '../../api/response-types/account'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import {
  Page,
  SecurityTitle
} from './styles'

const Security = () => {
  const [logins, setLogins] = useState<LoginResponse[] | undefined>(undefined)

  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile

  useEffect(() => {
    getLogins(access_token, email!, (logins) => setLogins(logins))
  }, [])

  return (
    <>
      <Navbar showSearch={false} />
      <Page>
        <SidebarSettings />
        <Container>
          <Row className="justify-content-md-center">
            <SecurityTitle>Security</SecurityTitle>
          </Row>

          <Row className="justify-content-md-center">
            <p>Here you can check all your logins to look for suspect actions.</p>
          </Row>

          <Container
            style={{
              width: '80%',
              height: '100%',
              backgroundColor: 'white',
              borderRadius: '17px',
              padding: '3%',
              overflowY: 'auto'
            }}
          >
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
          </Container>
        </Container>
      </Page>
    </>
  )
}

export default Security
