import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalEffect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  background-color: var(--white);
  width: 60%;
  height: 70%;
  border-radius: 12px;
`

export const ModalBody = styled.div`
  padding: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

export const LinkButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  width: 14%;
  height: 25%;
  text-decoration: none !important;
  margin: 0 0.6%;

  &:hover {
    background-color: var(--black);
  }

  & > * {
    fill: white;
    color: var(--white);
  }
`
