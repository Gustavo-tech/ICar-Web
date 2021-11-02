import { useReactOidc } from '@axa-fr/react-oidc-context'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
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

const SellingCars = () => {

  const { isLoading } = useContext(UIContext)
  const { fetchCars, cars } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchCars(access_token)
  }, [])

  let mainContent

  if (isLoading) {
    mainContent =
      <CenteredContent>
        <Spinner animation="border" variant="danger" />
      </CenteredContent>
  }

  else if (cars.length > 0) {
    mainContent =
      <ContentGrid>
        <FilterSidebar />
        <CardsWrapper>
          {
            cars.map((car: Car) => (
              <CarCard
                key={car.id}
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
        <RemoveShoppingCartIcon />
        <h3>Ops... looks like we haven't a selling car yet</h3>
      </CenteredContent>
  }

  return (
    <>
      <AppNavbar showSearch />
      {mainContent}
    </>
  )
}

export default SellingCars
