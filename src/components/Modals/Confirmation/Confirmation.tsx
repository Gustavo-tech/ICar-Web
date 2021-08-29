import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../../contexts/ModalContext'
import {
  Modal,
  ModalEffect,
  ModalFooter,
  OkButton,
  StyledP,
  Title
} from './styles'


interface ConfirmationModalProps {
  title: string;
  text: string;
  success: boolean;
  onConfirm: () => any;
}

const ConfirmationModal = ({ title, text, success, onConfirm }: ConfirmationModalProps) => {

  const { isOpen, modalType, closeModal } = useContext(ModalContext)

  function handleConfirm() {
    closeModal()
    onConfirm()
  }

  return (
    <>
      {isOpen && modalType === "confirm" &&
        <ModalEffect>
          <Modal>
            <Title success={success}>{title}</Title>
            <StyledP success={success}>{text}</StyledP>
            <ModalFooter>
              <OkButton success={success} onClick={handleConfirm}>OK</OkButton>
            </ModalFooter>
          </Modal>
        </ModalEffect>}
    </>
  )
}

export default ConfirmationModal
