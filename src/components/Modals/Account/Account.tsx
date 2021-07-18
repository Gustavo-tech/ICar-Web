import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../../contexts/ModalContext';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {
  Modal,
  ModalBody,
  ModalEffect,
  LinkButton
} from './styles';
import ModalHeader from '../ModalHeader/ModalHeader';
import Security from '@material-ui/icons/Security';

const AccountModal = () => {
  const { isOpen, modalType, closeModal } = useContext(ModalContext);

  function handleModalClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
  }

  function handleLinkClick() {
    closeModal()
  }

  return ReactDOM.createPortal(
    <>
      {
        isOpen && modalType === "account" &&
        <ModalEffect onClick={closeModal}>
          <Modal onClick={e => handleModalClick(e)}>
            <ModalHeader headerTitle="Account" />
            <ModalBody>
              <LinkButton to="/account/personal" onClick={() => handleLinkClick()}>
                <AccountBoxIcon />
                <span>Personal</span>
              </LinkButton>
              <LinkButton to="/account/security" onClick={() => handleLinkClick()}>
                <Security />
                <span>Security</span>
              </LinkButton>
            </ModalBody>
          </Modal>
        </ModalEffect>
      }
    </>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default AccountModal
