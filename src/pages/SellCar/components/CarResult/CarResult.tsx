import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import ErrorIcon from '@material-ui/icons/Error'
import AddIcon from '@material-ui/icons/Add'
import ReplayIcon from '@material-ui/icons/Replay'
import { CarContext } from '../../../../contexts/CarContext'
import { UIContext } from '../../../../contexts/UIContext'
import {
  useStyles
} from './styles'
import { useReactOidc } from '@axa-fr/react-oidc-context'

type CarResultProps = {
  resetSteps: () => void;
}

const CarResult = ({ resetSteps }: CarResultProps) => {

  const [savedSuccessfully, setSavedSuccessfully] = useState<boolean | undefined>(false)
  const [numberOfTries, setNumberOfTries] = useState(0)

  const history = useHistory()
  const { oidcUser } = useReactOidc()
  const { profile, access_token } = oidcUser
  const { email } = profile
  const { isLoading } = useContext(UIContext)
  const { reset, createCar } = useContext(CarContext)

  useEffect(() => {
    async function create() {
      const result = await createCar(email!, access_token)
      setSavedSuccessfully(result)
    }

    create()
  }, [numberOfTries])

  function handleAddNewClick() {
    reset()
    resetSteps()
  }

  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.contentGrid}
    >
      {isLoading &&
        <Grid item xs={12}>
          <CircularProgress color="primary" />
        </Grid>}

      {!isLoading && savedSuccessfully &&
        <>
          <Grid container item justify="center" xs={12}>
            <CheckCircleIcon color="primary" className={classes.mainIcon} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" color="primary">Saved successfully</Typography>
          </Grid>

          <Grid
            item
            container
            justify="space-evenly"
            xs={5}
            className={classes.buttonsGrid}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmojiTransportationIcon />}
              onClick={() => history.push('/mycars')}
            >
              Go to my cars
            </Button>

            <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              onClick={handleAddNewClick}
            >
              Sell another
            </Button>
          </Grid>
        </>}

      {!isLoading && !savedSuccessfully &&
        <>
          <Grid container item justify="center" xs={12}>
            <ErrorIcon color="primary" className={classes.mainIcon} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" color="primary">An error happened while inserting this car</Typography>
          </Grid>

          <Grid
            item
            xs={6}
            className={classes.buttonsGrid}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<ReplayIcon />}
              onClick={() => setNumberOfTries(numberOfTries + 1)}
            >
              Retry
            </Button>
          </Grid>
        </>}
    </Grid>
  )
}

export default CarResult
