import { useContext } from 'react'
import { UIContext } from '../../../contexts/UIContext'
import {
  Modal,
  ModalEffect,
  ModalFooter,
  OkButton,
  StyledP,
  Title
} from './styles'


type ConfirmationModalProps = {
  title: string;
  text: string;
  success: boolean;
  onConfirm: () => any;
}

const ConfirmationModal = ({ title, text, success, onConfirm }: ConfirmationModalProps) => {

  const { isModalOpen, modalType, closeModal } = useContext(UIContext)

  function handleConfirm() {
    closeModal()
    onConfirm()
  }

  return (
    <>
      {isModalOpen && modalType === "confirm" &&
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
