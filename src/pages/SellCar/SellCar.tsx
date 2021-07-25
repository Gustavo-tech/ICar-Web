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
  const [makeDate, setMakeDate] = useState(new Date().getFullYear())
  const [makedDate, setMakedDate] = useState(new Date().getFullYear() + 1)
  const [kilometersTraveled, setKilometersTraveled] = useState(0.0)
  const [price, setPrice] = useState(1000.00)
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
                    <Form.Control
                      placeholder="Type the plate of your car using the XXX-0000 format"
                      value={plate}
                      onChange={e => setPlate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Maker</Form.Label>
                    <Form.Control
                      placeholder="Type the maker of your car"
                      value={maker}
                      onChange={e => setMaker(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      placeholder="Type the model of your car"
                      value={model}
                      onChange={e => setModel(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Make Date</Form.Label>
                    <Form.Control
                      value={makeDate}
                      placeholder="Type the started make date of your car"
                      type="number"
                      onChange={e => setMakeDate(Number.parseInt(e.target.value))}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Maked Date</Form.Label>
                    <Form.Control
                      value={makedDate}
                      type="number"
                      placeholder="Type the end make date of your car"
                      onChange={e => setMakedDate(Number.parseInt(e.target.value))}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Kilometers Traveled</Form.Label>
                    <Form.Control
                      value={kilometersTraveled}
                      placeholder="Type the kilometers traveled of your car"
                      type="number"
                      onChange={e => setKilometersTraveled(Number.parseFloat(e.target.value))}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      value={price}
                      placeholder="Type the price of your car"
                      type="number"
                      onChange={e => setPrice(Number.parseFloat(e.target.value))}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      value={color}
                      type="color"
                      onChange={e => setColor(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Type Of Exchange</Form.Label>
                    <Form.Control
                      as="select"
                      value={typeOfExchange}
                      onChange={e => setTypeOfExchange(e.target.value)}
                    >
                      <option>Automatic</option>
                      <option>Manual</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      value={message}
                      as="textarea"
                      rows={7}
                      placeholder="Type a message for this car"
                      onChange={e => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check
                      label="I Accept Change"
                      onChange={e => setAcceptsChange(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Check
                      label="Ipva Is Paid"
                      onChange={e => setipvaIsPaid(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Check
                      label="The Car Is Licensed"
                      onChange={e => setisLicensed(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Check
                      label="The Car Is Armored"
                      onChange={e => setIsArmored(e.target.value)}
                    />
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
