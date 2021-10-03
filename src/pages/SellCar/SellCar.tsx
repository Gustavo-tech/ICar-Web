import { useReactOidc } from '@axa-fr/react-oidc-context'
import AddIcon from '@material-ui/icons/Add'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { addCar } from '../../api/car/post'
import ConfirmationModal from '../../components/Modals/Confirmation/Confirmation'
import AppNavbar from '../../components/Navbar/Navbar'
import { ModalContext } from '../../contexts/ModalContext'
import { capitalizeText } from '../../utilities/string-utilities'
import {
  AddPictureButton,
  FormContainer,
  Page,
  PicturesWrapper,
  SubmitButton
} from './styles'

const SellCar = () => {

  const { openModal } = useContext(ModalContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser

  const [plateIsInvalid, setPlateIsInvalid] = useState(false)
  const [makerIsInvalid, setMakerIsInvalid] = useState(false)
  const [modelIsInvalid, setModelIsInvalid] = useState(false)
  const [cityIsInvalid, setCityIsInvalid] = useState(false)

  const [plateIsValid, setPlateIsValid] = useState(false)
  const [makerIsValid, setMakerIsValid] = useState(false)
  const [modelIsValid, setModelIsValid] = useState(false)
  const [cityIsValid, setCityIsValid] = useState(false)

  const [pictures, setPictures] = useState<string[]>([])
  const [plate, setPlate] = useState('')
  const [maker, setMaker] = useState('')
  const [model, setModel] = useState('')
  const [makeDate, setMakeDate] = useState(new Date().getFullYear())
  const [makedDate, setMakedDate] = useState(new Date().getFullYear() + 1)
  const [kilometersTraveled, setKilometersTraveled] = useState(0.0)
  const [price, setPrice] = useState(1000.00)
  const [acceptsChange, setAcceptsChange] = useState(false)
  const [ipvaIsPaid, setipvaIsPaid] = useState(false)
  const [isLicensed, setisLicensed] = useState(false)
  const [isArmored, setIsArmored] = useState(false)
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('#000000')
  const [exchangeType, setExchangeType] = useState('Automatic')
  const [gasolineType, setGasolineType] = useState('flex')
  const [city, setCity] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [savedSuccessfully, setSavedSuccessfully] = useState(false)

  function onAddPictureClick() {
    const inputElement = document.getElementById('add-picture-input')
    inputElement?.click()
  }

  function onPictureSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = event.target
    const file: File = inputElement.files![0]

    let fr: FileReader = new FileReader()
    fr.onload = () => {
      let newCarPics = [...pictures]
      newCarPics.push(fr.result?.toString()!)
      setPictures(newCarPics)
    }
    fr.readAsDataURL(file)
  }

  function handlePlateChange(value: string): void {
    value = value.toUpperCase()
    setPlate(value)

    let regExp = new RegExp('[A-Z]{3}[-][0-9]{4}')

    if (regExp.test(value)) {
      setPlateIsValid(true)
      setPlateIsInvalid(false)
    }
    else {
      setPlateIsValid(false)
      setPlateIsInvalid(true)
    }
  }

  function handleNameChange(value: string, setValue: (value: string) => void, minimumLength: Number,
    trueFunction: () => void, falseFunction: () => void): void {
    value = capitalizeText(value)
    setValue(value)

    if (value.length >= minimumLength) {
      trueFunction()
    }

    else {
      falseFunction()
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault()
    const userEmail = profile.email!
    addCar(access_token, {
      pictures,
      plate,
      maker,
      model,
      makeDate,
      makedDate,
      price,
      kilometersTraveled,
      acceptsChange,
      ipvaIsPaid,
      isLicensed,
      isArmored,
      message,
      color,
      exchangeType,
      gasolineType,
      city,
      userEmail
    }, (response) => {
      setSavedSuccessfully(response.status === 200)
      openModal("confirm")
      setShowModal(true)
    })
  }

  return (
    <>
      <AppNavbar showSearch={false} />
      {showModal &&
        <ConfirmationModal
          title={savedSuccessfully ? "Success" : "Error"}
          text={savedSuccessfully ?
            "Your car is in our catalog now!" :
            "Some error happened while registering your car"}
          success={savedSuccessfully}
          onConfirm={() => setShowModal(false)}
        />}

      {!showModal &&
        <Page>
          <FormContainer>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <input
                id="add-picture-input"
                type="file"
                style={{ visibility: 'hidden' }}
                onChange={event => onPictureSelected(event)}
              />

              <PicturesWrapper>
                {
                  pictures.map((item) => (
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
                        isValid={plateIsValid}
                        isInvalid={plateIsInvalid}
                        onChange={e => handlePlateChange(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Maker</Form.Label>
                      <Form.Control
                        isValid={makerIsValid}
                        isInvalid={makerIsInvalid}
                        placeholder="Type the maker of your car"
                        value={maker}
                        onChange={e => handleNameChange(e.target.value, (value) => setMaker(value), 3, () => {
                          setMakerIsValid(true)
                          setMakerIsInvalid(false)
                        }, () => {
                          setMakerIsValid(false)
                          setMakerIsInvalid(true)
                        })}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label>Model</Form.Label>
                      <Form.Control
                        isValid={modelIsValid}
                        isInvalid={modelIsInvalid}
                        placeholder="Type the model of your car"
                        value={model}
                        onChange={e => handleNameChange(e.target.value, (value) => setModel(value), 2,
                          () => {
                            setModelIsValid(true)
                            setModelIsInvalid(false)
                          }, () => {
                            setModelIsValid(false)
                            setModelIsInvalid(true)
                          })}
                        required
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
                        min={1942}
                        max={new Date().getFullYear() + 1}
                        placeholder="Type the started make date of your car"
                        type="number"
                        onChange={e => setMakeDate(Number.parseInt(e.target.value))}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label>Maked Date</Form.Label>
                      <Form.Control
                        value={makedDate}
                        type="number"
                        min={1942}
                        max={new Date().getFullYear() + 1}
                        placeholder="Type the end make date of your car"
                        onChange={e => setMakedDate(Number.parseInt(e.target.value))}
                        required
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
                        required
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
                        min={1000}
                        onChange={e => setPrice(Number.parseFloat(e.target.value))}
                        required
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
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label>Type Of Exchange</Form.Label>
                      <Form.Control
                        as="select"
                        value={exchangeType}
                        onChange={e => setExchangeType(e.target.value)}
                      >
                        <option>Automatic</option>
                        <option>Manual</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label>Gasoline type</Form.Label>
                      <Form.Control
                        as="select"
                        value={gasolineType}
                        onChange={e => setGasolineType(e.target.value)}
                      >
                        <option>Flex</option>
                        <option>Gasoline</option>
                        <option>Diesel</option>
                        <option>Eletric</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={city}
                        isValid={cityIsValid}
                        isInvalid={cityIsInvalid}
                        onChange={e => handleNameChange(e.target.value, (value) => setCity(value), 2,
                          () => {
                            setCityIsValid(true)
                            setCityIsInvalid(false)
                          }, () => {
                            setCityIsValid(false)
                            setCityIsInvalid(true)
                          })}
                        required
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
                        placeholder="Type a message about this car"
                        onChange={e => setMessage(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Check
                        checked={acceptsChange}
                        label="I Accept Change"
                        onChange={e => setAcceptsChange(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Check
                        checked={ipvaIsPaid}
                        label="Ipva Is Paid"
                        onChange={e => setipvaIsPaid(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Check
                        checked={isLicensed}
                        label="The Car Is Licensed"
                        onChange={e => setisLicensed(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Check
                        checked={isArmored}
                        label="The Car Is Armored"
                        onChange={e => setIsArmored(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>

              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </FormContainer>
        </Page>}
    </>
  )
}

export default SellCar
