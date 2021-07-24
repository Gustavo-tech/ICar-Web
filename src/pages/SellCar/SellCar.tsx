import React, { useState } from 'react'
import AppNavbar from '../../components/Navbar/Navbar'
import AddIcon from '@material-ui/icons/Add'
import {
  AddPictureButton,
  FormContainer,
  Page,
  PicturesWrapper,
  SubmitButton
} from './styles'
import { Col, Container, Form, Row } from 'react-bootstrap'

const SellCar = () => {
  const [carPictures, setCarPictures] = useState<string[]>([])

  const [plate, setPlate] = useState('')
  const [maker, setMaker] = useState('')
  const [model, setModel] = useState('')
  const [makeDate, setMakeDate] = useState('')
  const [makedDate, setMakedDate] = useState('')
  const [kilometersTraveled, setKilometersTraveled] = useState('')
  const [price, setPrice] = useState('')
  const [acceptsChange, setAcceptsChange] = useState('')
  const [ipvaIsPaid, setipvaIsPaid] = useState('')
  const [isLicensed, setisLicensed] = useState('')
  const [isArmored, setIsArmored] = useState('')
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const [typeOfExchange, setTypeOfExchange] = useState('')
  const [city, setCity] = useState('')

  function onAddPictureClick() {
    const inputElement = document.getElementById('add-picture-input')
    inputElement?.click()
  }

  function onPictureSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = event.target
    const file: File = inputElement.files![0]

    let fr: FileReader = new FileReader()
    fr.onload = () => {
      let newCarPics = [...carPictures]
      newCarPics.push(fr.result?.toString()!)
      setCarPictures(newCarPics)
    }
    fr.readAsDataURL(file)
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
                    <Form.Control onChange={e => setPlate(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Maker</Form.Label>
                    <Form.Control onChange={e => setMaker(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control onChange={e => setModel(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Make Date</Form.Label>
                    <Form.Control onChange={e => setMakeDate(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Maked Date</Form.Label>
                    <Form.Control onChange={e => setMakedDate(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Kilometers Traveled</Form.Label>
                    <Form.Control onChange={e => setKilometersTraveled(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={e => setPrice(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Accepts Change</Form.Label>
                    <Form.Control onChange={e => setAcceptsChange(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Ipva Is Paid</Form.Label>
                    <Form.Control onChange={e => setipvaIsPaid(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Is Licensed</Form.Label>
                    <Form.Control onChange={e => setisLicensed(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Is Armored</Form.Label>
                    <Form.Control onChange={e => setIsArmored(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={e => setMessage(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={e => setColor(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Type Of Exchange</Form.Label>
                    <Form.Control onChange={e => setTypeOfExchange(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={e => setCity(e.target.value)} />
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
