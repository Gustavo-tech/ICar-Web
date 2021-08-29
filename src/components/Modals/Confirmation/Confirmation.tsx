import React from 'react'
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
}

const ConfirmationModal = ({ title, text, success }: ConfirmationModalProps) => {
  return (
    <ModalEffect>
      <Modal>
        <Title success={success}>{title}</Title>
        <StyledP success={success}>{text}</StyledP>
        <ModalFooter>
          <OkButton success={success}>OK</OkButton>
        </ModalFooter>
      </Modal>
    </ModalEffect>
  )
}

export default ConfirmationModal
