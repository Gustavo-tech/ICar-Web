import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import CarCard from '../../components/Cards/CarCard/CarCard'
import AppNavbar from '../../components/Navbar/Navbar'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import { CarContext } from '../../contexts/CarContext'
import { UIContext } from '../../contexts/UIContext'
import Car from '../../models/car'
import {
  CardsWrapper,
  CenteredContent,
  ContentGrid
} from './styles'

const MyCars = () => {

  const { isLoading, isModalOpen } = useContext(UIContext)
  const { cars, fetchMyCars } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile

  useEffect(() => {
    fetchMyCars(access_token, email!)
  }, [])

  let mainContent

  if (isLoading) {
    mainContent =
      <CenteredContent> <Spinner animation="border" variant="danger" /> </CenteredContent>
  }

  else if (cars.length > 0 && !isModalOpen) {
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
