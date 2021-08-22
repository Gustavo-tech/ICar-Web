import { useReactOidc } from '@axa-fr/react-oidc-context'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getUserCars } from '../../client/car/get'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import AppNavbar from '../../components/Navbar/Navbar'
import {
  CardsWrapper,
  CenteredContent,
  ContentGrid
} from './styles'
import Car from '../../models/car'
import CarCard from '../../components/Cards/CarCard/CarCard'

const MyCars = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [carsAux, setCarsAux] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)

  const { oidcUser } = useReactOidc()
  const { profile, access_token } = oidcUser
  const { email } = profile

  useEffect(() => {
    getUserCars('Bearer ' + access_token, email!, (response) => {
      setCars(response.data)
      setCarsAux(response.data)
      setLoading(false)
    })
  }, [])

  let mainContent

  if (loading) {
    mainContent =
      <CenteredContent> <Spinner animation="border" variant="danger" /> </CenteredContent>
  }

  else if (cars.length > 0) {
    mainContent =
      <ContentGrid>
        <FilterSidebar
          cars={cars}
          carsAux={carsAux}
          setCars={(cars) => setCars(cars)}
        />
        <CardsWrapper>
          {
            cars.map((car: Car) => (
              <CarCard
                key={car.plate}
                maker={car.maker}
                model={car.model}
                kilometersTraveled={car.kilometersTraveled}
                makeDate={car.makedDate}
                makedDate={car.makedDate}
                color={car.color}
                price={car.price}
                city={car.city}
                pictures={car.pictures}
              />
            ))
          }
        </CardsWrapper>
      </ContentGrid>
  }

  else {
    mainContent =
      <CenteredContent>
        <h2>Ops..</h2>
      </CenteredContent>
  }

  return (
    <>
      <AppNavbar />
      {mainContent}
    </>
  )
}

export default MyCars
