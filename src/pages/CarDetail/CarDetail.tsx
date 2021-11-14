import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCarWithId } from '../../api/car/get'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import Car from '../../models/car'
import {
  CarName,
  InfoContainer,
  InfosDiv,
  NameHeader,
  Page
} from './styles'
import LabelWithValue from '../../components/LabelWithValue/LabelWithValue'
import Grid from '@material-ui/core/Grid'

const CarDetail = () => {
  const [car, setCar] = useState<Car | undefined>(undefined)

  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    setIsLoading(true)
    getCarWithId(access_token, Number.parseInt(id), (data: Car) => {
      setIsLoading(false)
      setCar(data)
    })
  }, [])


  function getBoolAnswer(value?: boolean): string {
    if (value)
      return "Yes"

    return "No"
  }

  return (
    <Page>
      <AppNavbar showSearch />

      {isLoading &&
        <CenteredSpinner animation="border" />}

      {!isLoading &&
        <InfosDiv>
          <InfoContainer>
            <NameHeader>
              <CarName>{car?.maker}</CarName> <CarName inRed>{car?.model}</CarName>
            </NameHeader>

            <Grid container>
              <Grid item>
                <LabelWithValue label="Year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Grid>

              <Grid item>
                <LabelWithValue label="KM" value={car?.kilometersTraveled?.toString()} />
              </Grid>

              <Grid item>
                <LabelWithValue label="Exchange" value={car?.typeOfExchange?.toString()} />
              </Grid>

              <Grid item>
                <LabelWithValue label="Gasoline type" value={car?.gasolineType?.toString()} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item>
                <LabelWithValue label="Color" value={car?.color} />
              </Grid>

              <Grid item>
                <LabelWithValue label="Accepts change" value={getBoolAnswer(car?.acceptsChange)} />
              </Grid>

              <Grid item>
                <LabelWithValue label="year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item>
                <LabelWithValue label="Year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Grid>

              <Grid item>
                <LabelWithValue label="KM" value={car?.kilometersTraveled?.toString()} />
              </Grid>

              <Grid item>
                <LabelWithValue label="year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Grid>

              <Grid item>
                <LabelWithValue label="year" value={`${car?.makeDate}/${car?.makedDate}`} />
              </Grid>
            </Grid>

          </InfoContainer>
        </InfosDiv>}
    </Page>
  )
}

export default CarDetail
