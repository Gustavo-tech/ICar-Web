import { useReactOidc } from '@axa-fr/react-oidc-context'
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getUserCars } from '../../api/car/get'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import AppNavbar from '../../components/Navbar/Navbar'
import {
  CardsWrapper,
  CenteredContent,
  ContentGrid
} from './styles'
import Car from '../../models/car'
import CarCard from '../../components/Cards/CarCard/CarCard'
import { UIContext } from '../../contexts/UIContext'
import { CarContext } from '../../contexts/CarContext'
import CarSearchModel from '../../api/search-models/car'

const SellingCars = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [carsAux, setCarsAux] = useState<Car[]>([])
  const [searchModel, setSearchModel] = useState<CarSearchModel>(new CarSearchModel())

  const { oidcUser } = useReactOidc()
  const { isLoading, setIsLoading } = useContext(UIContext)
  const { fetchCars } = useContext(CarContext)
  const { profile, access_token } = oidcUser
  const { email } = profile

  useEffect(() => {
    fetchCars(access_token, searchModel)
  }, [])

  let mainContent

  if (isLoading) {
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

export default SellingCars
