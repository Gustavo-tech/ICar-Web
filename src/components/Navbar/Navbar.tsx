import EmailIcon from '@material-ui/icons/Email'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Form from 'react-bootstrap/Form'
import {
  Brand,
  Button,
  ButtonsDiv,
  Navbar
} from './styles'
import MessagesModal from '../Modals/Messages/Messages'
import { useContext } from 'react'
import { UIContext } from '../../contexts/UIContext'
import AccountModal from '../Modals/Account/Account'
import CarsModal from '../Modals/Cars/Cars'

type AppNavBarProps = {
  showSearch: boolean;
}

const AppNavbar = ({ showSearch }: AppNavBarProps) => {

  const { openModal } = useContext(UIContext)

  function openNavigationModal(type: string) {
    openModal(type)
  }

  return (
    <>
      <MessagesModal />
      <AccountModal />
      <CarsModal />
      <Navbar>
        <Brand to="/">ICar</Brand>

        {showSearch &&
          <Form.Control
            style={{ width: '24%', outline: 'none', border: 'none' }}
            placeholder="Search for a car"
          />}

        <ButtonsDiv>
          <Button onClick={() => openNavigationModal('messages')}>
            <EmailIcon />
          </Button>
          <Button onClick={() => openNavigationModal('cars')}>
            <DriveEtaIcon />
          </Button>
          <Button onClick={() => openNavigationModal('account')}>
            <AccountCircleIcon />
          </Button>
        </ButtonsDiv>
      </Navbar>
    </>
  )
}

export default AppNavbar
