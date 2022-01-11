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
import { CarOverview } from '../../models/car'
import {
  CenteredContent,
  useStyles
} from './styles'
import { Typography } from '@material-ui/core'

const SellingCars = () => {

  const { isLoading } = useContext(UIContext)
  const { fetchCars, cars } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchCars(access_token)
  }, [])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch />

      {isLoading &&
        <CenteredContent>
          <CircularProgress />
        </CenteredContent>}

      {!isLoading &&
        <Grid container spacing={4} className={classes.grid}>

          <Grid item xs={3}>
            <FilterSidebar onSearchClick={() => fetchCars(access_token)} />
          </Grid>

          <Grid
            item
            container
            spacing={2}
            xs={9}
          >
            {cars.length > 0 &&
              cars.map((car: CarOverview) => {
                return (
                  <Grid key={car.id} item xs={4}>
                    <CarCard
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
                )
              })
            }

            {cars.length === 0 &&
              <CenteredContent>
                <RemoveShoppingCartIcon fontSize="small" color="primary" />
                <Typography variant="h6">Ops... we didn't find any car</Typography>
              </CenteredContent>}
          </Grid>
        </Grid>}
    </>
  )
}

export default SellingCars
