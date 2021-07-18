import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../../contexts/ModalContext';
import ChatIcon from '@material-ui/icons/Chat';
import {
  Modal,
  ModalBody,
  ModalEffect,
  LinkButton
} from './styles';
import ModalHeader from '../ModalHeader/ModalHeader';

const MessagesModal = () => {
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
        isOpen && modalType === "messages" &&
        <ModalEffect onClick={closeModal}>
          <Modal onClick={e => handleModalClick(e)}>
            <ModalHeader headerTitle="Messages" />
            <ModalBody>
              <LinkButton to="/messages" onClick={() => handleLinkClick()}>
                <ChatIcon />
                <span>Messages</span>
              </LinkButton>
            </ModalBody>
          </Modal>
        </ModalEffect>
      }
    </>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default MessagesModal
