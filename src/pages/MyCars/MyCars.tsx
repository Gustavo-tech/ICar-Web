import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import CarCard from '../../components/Cards/CarCard/CarCard'
import AppNavbar from '../../components/Navbar/Navbar'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import { CarContext } from '../../contexts/CarContext'
import { UIContext } from '../../contexts/UIContext'
import { Car } from '../../api/response-types/car'
import {
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

        <Grid
          container
          item
          xs={9}
          spacing={2}
        >
          {
            cars.map((car: Car) => (
              <Grid item xs={4}>
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
                  location={car.address.localidade}
                  picture={car.pictures[0]}
                  numberOfViews={car.numberOfViews}
                />
              </Grid>
            ))
          }
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
