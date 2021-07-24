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
import { Col, Container, Form, Row } from 'react-bootstrap';

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
          <Form>
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

            <Container style={{ margin: '4% 0' }}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Car Plate</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Maker</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Make Date</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Maked Date</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Kilometers Traveled</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Accepts Change</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Ipva Is Paid</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Is Licensed</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Is Armored</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Type of exchange</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormContainer>
      </Page>
    </>
  )
}

export default SellCar
