import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useEffect, useState, useContext } from 'react'
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

const MyCars = () => {
  const [cars, setCars] = useState<Car[]>([])

  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { profile, access_token } = oidcUser
  const { email } = profile

  useEffect(() => {
    setIsLoading(true)
    getUserCars('Bearer ' + access_token, email!, (response) => {
      setCars(response.data)
      setIsLoading(false)
    })
  }, [])

  let mainContent

  if (isLoading) {
    mainContent =
      <CenteredContent> <Spinner animation="border" variant="danger" /> </CenteredContent>
  }

  else if (cars.length > 0) {
    mainContent =
      <ContentGrid>
        <FilterSidebar />
        <CardsWrapper>
          {
            cars.map((car: Car) => (
              <CarCard
                key={car.plate}
                id={car.id}
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
      <AppNavbar showSearch={false} />
      {mainContent}
    </>
  )
}

export default MyCars
