import { createContext, ReactNode, useState } from 'react'

interface UIContextInterface {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isModalOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
}

export const UIContext = createContext({} as UIContextInterface)

interface UIContextProps {
  children: ReactNode;
}

const UIProvider = ({ children }: UIContextProps) => {
  const [loading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>('')

  function openModal(type: string) {
    setIsModalOpen(true)
    setModalType(type)
  }

  function closeModal() {
    setIsModalOpen(false)
    setModalType('')
  }

  return (
    <UIContext.Provider
      value={{
        isLoading: loading,
        setIsLoading: setIsLoading,
        isModalOpen: isModalOpen,
        modalType: modalType,
        openModal: openModal,
        closeModal: closeModal
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider
