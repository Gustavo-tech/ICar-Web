import React, { useContext } from 'react'
import { ModalContext } from '../../../contexts/ModalContext';
import CloseIcon from '@material-ui/icons/Close';
import {
  StyledModalHeader,
  MenuSpan
} from './styles';

interface ModalHeaderProps {
  headerTitle: string;
}

const ModalHeader = ({ headerTitle }: ModalHeaderProps) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <StyledModalHeader>
      <MenuSpan>{headerTitle}</MenuSpan>
      <CloseIcon onClick={closeModal} />
    </StyledModalHeader>
  )
}

export default ModalHeader
