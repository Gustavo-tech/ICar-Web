import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import CarCard from '../../components/Cards/CarCard/CarCard'
import AppNavbar from '../../components/Navbar/Navbar'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import { CarContext } from '../../contexts/CarContext'
import { UIContext } from '../../contexts/UIContext'
import Car from '../../models/car'
import {
  CardsWrapper,
  CenteredContent,
  useStyles
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

  const classes = useStyles()

  let mainContent

  if (isLoading) {
    mainContent =
      <CenteredContent>
        <CircularProgress />
      </CenteredContent>
  }

  else if (cars.length > 0 && !isModalOpen) {
    mainContent =
      <Grid container className={classes.grid} spacing={4}>
        <Grid item xs={3}>
          <FilterSidebar />
        </Grid>

        <Grid item xs={9}>
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
        </Grid>
      </Grid>
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
