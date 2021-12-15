import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import { CarContext } from '../../contexts/CarContext'
import {
  CarName,
  NameHeader,
  Page,
  useStyles
} from './styles'
import LabelWithValue from '../../components/LabelWithValue/LabelWithValue'
import { CircularProgress, Container, Grid, TextField } from '@material-ui/core'

const CarDetail = () => {
  const { isLoading } = useContext(UIContext)
  const {
    maker,
    model,
    makeDate,
    makedDate,
    kilometers,
    exchangeType,
    gasolineType,
    color,
    acceptsChange,
    message,
    fetchCar
  } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetchCar(id, email!, access_token)
  }, [])

  function getBoolAnswer(value?: boolean): string {
    if (value)
      return "Yes"

    return "No"
  }

  const classes = useStyles()
  return (
    <Page>
      <AppNavbar showSearch />

      {isLoading &&
        <CircularProgress />}

      {!isLoading &&
        <Grid container spacing={3} className={classes.mainGrid}>

          <Grid item xs={8}>
            <Container className={classes.infoContainer}>
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

              <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={10}
                disabled
                fullWidth
                className={classes.description}
                value={message}
              />
            </Container>
          </Grid>

          <Grid item xs={4}>
            <Container className={classes.infoContainer}>

            </Container>
          </Grid>

        </Grid>}
    </Page>
  )
}

export default CarDetail
