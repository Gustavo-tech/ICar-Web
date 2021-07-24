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
  const [carPictures, setCarPictures] = useState<string[]>([])

  function onAddPictureClick() {
    const inputElement = document.getElementById('add-picture-input');
    inputElement?.click()
  }

  function onPictureSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = event.target;
    const file: File = inputElement.files![0];

    let fr: FileReader = new FileReader();
    fr.onload = () => {
      let newCarPics = [...carPictures];
      newCarPics.push(fr.result?.toString()!);
      setCarPictures(newCarPics);
    }
    fr.readAsDataURL(file);
  }

  return (
    <>
      <AppNavbar />
      <Page>
        <FormContainer>
          <form>
            <input
              id="add-picture-input"
              type="file"
              style={{ visibility: 'hidden' }}
              onChange={event => onPictureSelected(event)}
            />

            <PicturesWrapper>
              {
                carPictures.map((item) => (
                  <img src={item} key={item} style={{ margin: '0 10px' }} />
                ))
              }
              <AddPictureButton onClick={onAddPictureClick} type="button">
                <AddIcon />
                <span>Add Picture</span>
              </AddPictureButton>
            </PicturesWrapper>

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </Page>
    </>
  )
}

export default SellCar
