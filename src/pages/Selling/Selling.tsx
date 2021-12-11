import { useReactOidc } from '@axa-fr/react-oidc-context'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import { useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import CarCard from '../../components/Cards/CarCard/CarCard'
import CircularProgress from '@material-ui/core/CircularProgress'
import AppNavbar from '../../components/Navbar/Navbar'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import { CarContext } from '../../contexts/CarContext'
import { UIContext } from '../../contexts/UIContext'
import { Car, CarOverview } from '../../models/car'
import {
  CenteredContent,
  useStyles
} from './styles'
import { Typography } from '@material-ui/core'

const SellingCars = () => {

  const { isLoading, isModalOpen } = useContext(UIContext)
  const { fetchCars, cars } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchCars(access_token)
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
      <Grid container spacing={4} className={classes.grid}>

        <Grid item xs={3}>
          <FilterSidebar />
        </Grid>

        <Grid
          item
          container
          spacing={2}
          xs={9}
        >
          {
            cars.map((car: CarOverview) => (
              <Grid item xs={4}>
                <CarCard
                  key={car.id}
                  id={car.id}
                  maker={car.maker}
                  model={car.model}
                  kilometersTraveled={car.kilometersTraveled}
                  makeDate={car.makedDate}
                  makedDate={car.makedDate}
                  price={car.price}
                  location={car.address.localidade}
                  picture={car.pictures[0]}
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
        <RemoveShoppingCartIcon fontSize="small" color="primary" />
        <Typography variant="h6">Ops... looks like we haven't a selling car yet</Typography>
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
