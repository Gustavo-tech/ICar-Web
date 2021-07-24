import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../../contexts/ModalContext'
import {
  Modal,
  ModalBody,
  ModalEffect,
  LinkButton
} from './styles'
import ModalHeader from '../ModalHeader/ModalHeader'
import PaymentIcon from '@material-ui/icons/Payment'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

const CarsModal = () => {
  const { isOpen, modalType, closeModal } = useContext(ModalContext)

  function handleModalClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
  }

  function handleLinkClick() {
    closeModal()
  }

  return ReactDOM.createPortal(
    <>
      {
        isOpen && modalType === "cars" &&
        <ModalEffect onClick={closeModal}>
          <Modal onClick={e => handleModalClick(e)}>
            <ModalHeader headerTitle="Cars" />
            <ModalBody>
              <LinkButton to="/cars/mycars" onClick={() => handleLinkClick()}>
                <DashboardIcon />
                <span>My cars</span>
              </LinkButton>
              <LinkButton to="/car/sell" onClick={() => handleLinkClick()}>
                <MonetizationOnIcon />
                <span>Sell</span>
              </LinkButton>
              <LinkButton to="/account/security" onClick={() => handleLinkClick()}>
                <PaymentIcon />
                <span>Buy</span>
              </LinkButton>
            </ModalBody>
          </Modal>
        </ModalEffect>
      }
    </>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default CarsModal
