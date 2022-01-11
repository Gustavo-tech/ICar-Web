import { useContext, useEffect } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CarCard from '../../components/Cards/CarCard/CarCard'
import AppNavbar from '../../components/Navbar/Navbar'
import FilterSidebar from '../../components/Sidebars/FilterSidebar/FilterSidebar'
import { CarContext } from '../../contexts/CarContext'
import { UIContext } from '../../contexts/UIContext'
import {
  CenteredContent,
  useStyles
} from './styles'
import { Button, Typography } from '@material-ui/core'
import { CarOverview } from '../../models/car'

const MyCars = () => {

  const { isLoading } = useContext(UIContext)
  const { cars, fetchMyCars } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchMyCars(access_token)
  }, [])

  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <AppNavbar showSearch={false} />
      {isLoading &&
        <CenteredContent>
          <CircularProgress />
        </CenteredContent>}

      {!isLoading &&
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={3}>
            <FilterSidebar onSearchClick={() => fetchMyCars(access_token)} />
          </Grid>

          <Grid
            container
            item
            xs={9}
            spacing={2}
          >
            {cars.length > 0 &&
              cars.map((car: CarOverview) => (
                <Grid item xs={4} key={car.id}>
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
                    numberOfViews={car.numberOfViews}
                  />
                </Grid>
              ))
            }

            {cars.length === 0 &&
              <CenteredContent>
                <Typography gutterBottom variant="h6">Ops... looks like you don't have a car selling yet</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LocalOfferIcon />}
                  onClick={() => history.push('/car/sell')}
                >
                  Sell Car
                </Button>
              </CenteredContent>}
          </Grid>
        </Grid>}
    </>
  )
}

export default MyCars
