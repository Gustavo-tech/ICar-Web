import { createContext, ReactNode, useState } from 'react'

interface UIContextInterface {
  // states
  isLoading: boolean;
  isModalOpen: boolean;
  modalType: string;
  menuTabSelected: number;
  success: boolean;

  // set states
  setIsLoading: (value: boolean) => void;
  openModal: (type: string) => void;
  setMenuTabSelected: (index: 0 | 1 | 2 | 3) => void;
  setSuccess: (success: boolean) => void;

  // context API's
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
  const [menuTabSelected, setMenuTabSelected] = useState(0)
  const [success, setSuccess] = useState<boolean>(false)

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
        // states
        isLoading: loading,
        isModalOpen: isModalOpen,
        modalType: modalType,
        menuTabSelected,
        success,

        // set states
        setIsLoading: setIsLoading,
        openModal: openModal,
        setMenuTabSelected,
        setSuccess,

        // context API's
        closeModal: closeModal
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider
