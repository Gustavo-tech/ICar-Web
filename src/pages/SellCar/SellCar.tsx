import React, { useState } from 'react'
import AppNavbar from '../../components/Navbar/Navbar';
import AddIcon from '@material-ui/icons/Add';
import {
  AddPictureButton,
  FormContainer,
  Page,
  PicturesWrapper,
  SubmitButton
} from './styles';

const SellCar = () => {
  const [carPictures, setCarPictures] = useState([])

  return (
    <>
      <AppNavbar />
      <Page>
        <FormContainer>
          <form>
            <PicturesWrapper>
              <AddPictureButton>
                <AddIcon />
                <span>Add Picture</span>
              </AddPictureButton>
            </PicturesWrapper>

            <SubmitButton>Submit</SubmitButton>
          </form>
        </FormContainer>
      </Page>
    </>
  )
}

export default SellCar
