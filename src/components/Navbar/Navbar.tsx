import EmailIcon from '@material-ui/icons/Email'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {
  Brand,
  Button,
  ButtonsDiv,
  Navbar
} from './styles'
import MessagesModal from '../Modals/Messages/Messages'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import AccountModal from '../Modals/Account/Account'
import CarsModal from '../Modals/Cars/Cars'

const AppNavbar = () => {
  const { openModal } = useContext(ModalContext)

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
