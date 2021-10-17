import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCarWithId } from '../../api/car/get'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import Car from '../../models/car'
import {
  CarName,
  InfoContainer,
  InfosDiv,
  NameHeader,
  Page
} from './styles'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import LabelWithValue from '../../components/LabelWithValue/LabelWithValue'

const CarDetail = () => {
  const [car, setCar] = useState<Car | undefined>(undefined)

  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    setIsLoading(true)
    getCarWithId(access_token, Number.parseInt(id), (data: Car) => {
      setIsLoading(false)
      setCar(data)
    })
  }, [])

  return (
    <Page>
      <AppNavbar showSearch />

      {isLoading &&
        <CenteredSpinner animation="border" />}

      {!isLoading &&
        <InfosDiv>
          <InfoContainer>
            <NameHeader>
              <CarName>{car?.maker}</CarName> <CarName inRed>{car?.model}</CarName>
            </NameHeader>

            <Row>
              <Col lg={3}>
                <LabelWithValue label="Year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Col>

              <Col lg={3}>
                <LabelWithValue label="KM" value={car?.kilometersTraveled?.toString()} />
              </Col>

              <Col lg={3}>
                <LabelWithValue label="year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Col>

              <Col lg={3}>
                <LabelWithValue label="year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Col>
            </Row>
          </InfoContainer>
        </InfosDiv>}
    </Page>
  )
}

export default CarDetail
