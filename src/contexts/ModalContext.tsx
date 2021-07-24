import { useState } from 'react'
import { ReactNode } from 'react'
import { createContext } from 'react'

interface ModalContextInterface {
  isOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextInterface)

interface ModalProvider {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProvider) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  function openModal(type: string) {
    setIsOpen(true)
    setModalType(type)
  }

  function closeModal() {
    setIsOpen(false)
    setModalType('')
  }

  return (
    <ModalContext.Provider value={{
      isOpen: isOpen,
      modalType: modalType,
      openModal: openModal,
      closeModal: closeModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
