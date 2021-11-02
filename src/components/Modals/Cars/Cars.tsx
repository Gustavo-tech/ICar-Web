import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { UIContext } from '../../../contexts/UIContext'
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
  const { isModalOpen, modalType, closeModal } = useContext(UIContext)

  function handleModalClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
  }

  function handleLinkClick() {
    closeModal()
  }

  return ReactDOM.createPortal(
    <>
      {
        isModalOpen && modalType === "cars" &&
        <ModalEffect onClick={closeModal}>
          <Modal onClick={e => handleModalClick(e)}>
            <ModalHeader headerTitle="Cars" />
            <ModalBody>
              <LinkButton to="/mycars" onClick={() => handleLinkClick()}>
                <DashboardIcon />
                <span>My cars</span>
              </LinkButton>
              <LinkButton to="/car/sell" onClick={() => handleLinkClick()}>
                <MonetizationOnIcon />
                <span>Sell</span>
              </LinkButton>
              <LinkButton to="/selling" onClick={() => handleLinkClick()}>
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
