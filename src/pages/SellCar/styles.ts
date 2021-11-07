import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2% 0;
`

export const FormContainer = styled.section`
  background-color: white;
  border-radius: 12px;
  padding: 2%;
  width: 80%;
  height: 100%;
`

export const PicturesWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  height: 8rem;
  width: 100%;
`

export const AddPictureButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 17%;
  padding: 3%;
  background-color: var(--red);

  & > svg {
    transform: scale(1.5);
  }

  & > * {
    fill: white;
    color: white;
  }
`

export const SubmitButton = styled.button`
  background-color: var(--red);
  color: white;
  width: 12%;
  height: 2.7rem;
  float: right;
  transition-duration: 0.7s;

  &:hover {
    background-color: #A5200F;
  }
`
