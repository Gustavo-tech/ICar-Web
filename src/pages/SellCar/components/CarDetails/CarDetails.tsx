import { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AssignmentIcon from '@material-ui/icons/Assignment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useStyles, Form } from './styles'
import { CarContext } from '../../../../contexts/CarContext'
import { capitalizeText } from '../../../../utilities/string-utilities'
import CarValidator from '../../../../utilities/validators/car-validator'

type CarDetailsProps = {
  onNextClick: () => void;
}

const CarDetails = ({ onNextClick }: CarDetailsProps) => {

  const [plateIsValid, setPlateIsValid] = useState(true)
  const [makeDateIsValid, setMakeDateIsValid] = useState(true)
  const [makedDateIsValid, setMakedDateIsValid] = useState(true)

  const {
    maker,
    setMaker,
    model,
    setModel,
    plate,
    setPlate,
    makeDate,
    setMakeDate,
    makedDate,
    setMakedDate
  } = useContext(CarContext)

  function capitalizeAndSet(value: string, setFunction: (text: string) => void): void {
    const capitalizedText: string = capitalizeText(value)
    setFunction(capitalizedText)
  }

  function handlePlateChange(value: string): void {
    const upperValue: string = value.toUpperCase()
    const plateResult = CarValidator.validatePlate(upperValue)

    setPlateIsValid(plateResult)
    setPlate(upperValue)
  }

  function handleMakeDateChange(value: string) {
    const year: number = Number.parseInt(value)
    let isValid: boolean = CarValidator.validateDate(year)

    if (makedDate)
      isValid = year < makedDate

    setMakeDateIsValid(isValid)
    setMakeDate(value !== '' ? year : undefined)
  }

  const classes = useStyles()
  return (
    <Form>
      <Grid container>
        <Grid container justify="center" alignItems="center" item xs={1}>
          <AssignmentIcon color="primary" fontSize="large" />
        </Grid>

        <Grid item xs={11}>
          <Typography variant="h4" color="primary">Car details</Typography>
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.fieldsGrid} spacing={3}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Maker"
              value={maker}
              fullWidth
              onChange={(e) => capitalizeAndSet(e.target.value, setMaker)}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Model"
              value={model}
              fullWidth
              onChange={(e) => capitalizeAndSet(e.target.value, setModel)}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Plate"
              value={plate}
              fullWidth
              onChange={(e) => handlePlateChange(e.target.value)}
              error={!plateIsValid}
              helperText={!plateIsValid ? 'This plate is not valid' : ''}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Make Date"
              value={makeDate}
              fullWidth
              onChange={(e) => handleMakeDateChange(e.target.value)}
              error={!makeDateIsValid}
              helperText={!makeDateIsValid ? 'This year is not valid' : ''}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Model"
              value={model}
              fullWidth
              onChange={(e) => capitalizeAndSet(e.target.value, setModel)}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Plate"
              value={plate}
              fullWidth
              onChange={(e) => handlePlateChange(e.target.value)}
              error={!plateIsValid}
              helperText={!plateIsValid ? 'This plate is not valid' : ''}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="flex-end" alignItems="center" className={classes.nextGrid}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<NavigateNextIcon />}
          type="submit"
        >
          Next
        </Button>
      </Grid>
    </Form>
  )
}

export default CarDetails
