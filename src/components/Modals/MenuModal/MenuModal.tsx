import { Grid, Modal } from '@material-ui/core'
import { useContext } from 'react'
import { UIContext } from '../../../contexts/UIContext'

const MenuModal = () => {

  const { isModalOpen, modalType, closeModal } = useContext(UIContext)

  return (
    <Modal
      open={isModalOpen && modalType === 'Menu'}
      onClose={closeModal}
    >
      <h2>Hello</h2>
    </Modal>
  )
}

export default MenuModal
