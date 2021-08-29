import styled from "styled-components";

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
  height: 100%;
  z-index: 10;
`

export const Modal = styled.div`
  background-color: var(--white);
  width: 50%;
  height: 50%;
  border-radius: 12px;
  padding: 3% 6%;
`

interface textProps {
  success: boolean;
}

export const Title = styled.h2<textProps>`
  color: ${props => props.success ? '#13DA77' : '#E5270E'};
  text-align: center;
  height: 20%;
`

export const StyledP = styled.p<textProps>`
  color: ${props => props.success ? '#13DA77' : '#E5270E'};
  text-align: center;
  font-size: 17px;
  height: 60%;
`

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`

export const OkButton = styled.button<textProps>`
  color: white;
  background-color: ${props => props.success ? '#13DA77' : '#E5270E'};
  height: 90%;
  width: 30%;
  border: 1px solid #ECECEC;
  transition-duration: 1s;

  &:hover {
    background-color: ${props => props.success ? '#14BF6A' : '#BF2510'};
  }
`
