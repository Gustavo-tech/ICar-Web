import { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {
  Form,
  useStyles
} from './styles'
import { removeAllCharFromString } from '../../../../utilities/string-utilities'
import { CarContext } from '../../../../contexts/CarContext'

type CarAddressProps = {
  onNextClick: () => void;
  onPreviousClick: () => void;
}

const CarAddress = ({ onPreviousClick, onNextClick }: CarAddressProps) => {

  const [localZipCode, setLocalZipCode] = useState<string | undefined>(undefined)

  const {
    zipCode,
    district,
    location,
    street,
    fetchAddress
  } = useContext(CarContext)

  function handleFormSubmit(): void {
    onNextClick()
  }

  function handleZipCodeChange(value: string): void {
    if (value.length < 9) {
      const nValue: string = removeAllCharFromString(value)
      setLocalZipCode(nValue)
      if (nValue.length === 8) {
        try {
          fetchAddress(nValue)
        } catch (e) {

        }
      }
    }
  }

  const classes = useStyles()
  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      handleFormSubmit()
    }}>
      <Grid container>
        <Grid container item justify="flex-start" alignItems="center" xs={12}>
          <Grid container item justify="center" xs={1}>
            <LocationOnIcon color="primary" fontSize="large" />
          </Grid>

          <Grid container item xs={11}>
            <Typography variant="h4" color="primary">Location</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2} className={classes.inputGrid}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Zip Code"
              value={localZipCode}
              helperText="Write only numbers"
              onChange={(e) => handleZipCodeChange(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled
              variant="outlined"
              label="District"
              value={district}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              disabled
              variant="outlined"
              label="Street"
              value={street}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              disabled
              variant="outlined"
              label="Location"
              value={location}
            />
          </Grid>
        </Grid>

        <Grid container justify="space-between" alignItems="center" className={classes.footer}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<ArrowBackIosIcon />}
              onClick={onPreviousClick}
            >
              Back
            </Button>
          </Grid>

          <Grid item container justify="flex-end" xs={6}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<NavigateNextIcon />}
              onClick={onNextClick}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

export default CarAddress
