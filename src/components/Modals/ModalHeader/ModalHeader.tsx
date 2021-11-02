import React, { useContext } from 'react'
import { UIContext } from '../../../contexts/UIContext'
import CloseIcon from '@material-ui/icons/Close'
import {
  StyledModalHeader,
  MenuSpan
} from './styles'

interface ModalHeaderProps {
  headerTitle: string;
}

const ModalHeader = ({ headerTitle }: ModalHeaderProps) => {
  const { closeModal } = useContext(UIContext)

  return (
    <StyledModalHeader>
      <MenuSpan>{headerTitle}</MenuSpan>
      <CloseIcon onClick={closeModal} />
    </StyledModalHeader>
  )
}

export default ModalHeader
