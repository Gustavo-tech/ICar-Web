import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import { CarContext } from '../../contexts/CarContext'
import {
  CarName,
  InfoContainer,
  InfosDiv,
  NameHeader,
  Page
} from './styles'
import LabelWithValue from '../../components/LabelWithValue/LabelWithValue'
import Grid from '@material-ui/core/Grid'
import { CircularProgress } from '@material-ui/core'

const CarDetail = () => {
  const { isLoading, setIsLoading } = useContext(UIContext)
  const
    {
      maker,
      model,
      makeDate,
      makedDate,
      kilometers,
      exchangeType,
      gasolineType,
      color,
      acceptsChange,
      fetchCar
    } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetchCar(access_token, id)
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
        <CircularProgress />}

      {!isLoading &&
        <InfosDiv>
          <InfoContainer>
            <NameHeader>
              <CarName>{maker}</CarName> <CarName inRed>{model}</CarName>
            </NameHeader>

            <Grid container>
              <Grid item xs={3}>
                <LabelWithValue label="Year" value={`${makeDate}/${makedDate}`} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="KM" value={kilometers.toString()} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="Exchange" value={exchangeType} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="Gasoline type" value={gasolineType} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <LabelWithValue label="Color" value={color} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="Accepts change" value={getBoolAnswer(acceptsChange)} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="Year" value={`${makeDate}/${makedDate}`} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <LabelWithValue label="KM" value={kilometers.toString()} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
              </Grid>

              <Grid item xs={3}>
                <LabelWithValue label="year" value={`${makeDate}/${makedDate}`} />
              </Grid>
            </Grid>

          </InfoContainer>
        </InfosDiv>}
    </Page>
  )
}

export default CarDetail
