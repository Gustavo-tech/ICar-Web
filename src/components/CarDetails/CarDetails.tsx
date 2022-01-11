import { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import AssignmentIcon from '@material-ui/icons/Assignment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useStyles, Form } from './styles'
import { CarContext } from '../../contexts/CarContext'
import { capitalizeText } from '../../utilities/string-utilities'
import CarValidator from '../../utilities/validators/car-validator'
import { getCarColors } from '../../constants/colors'

type CarDetailsProps = {
  isUpdate: boolean;
  onNextClick: () => void;
  onBackClick: () => void;
}

const CarDetails = ({ isUpdate, onNextClick, onBackClick }: CarDetailsProps) => {

  const [plateIsValid, setPlateIsValid] = useState(true)
  const [makeDateIsValid, setMakeDateIsValid] = useState(true)
  const [makedDateIsValid, setMakedDateIsValid] = useState(true)
  const [kilometersIsValid, setKilometersIsValid] = useState(true)
  const [priceIsValid, setPriceIsValid] = useState(true)

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
    setMakedDate,
    kilometers,
    setKilometers,
    price,
    setPrice,
    exchangeType,
    setExchangeType,
    gasolineType,
    setGasolineType,
    color,
    setColor,
    message,
    setMessage,
    ipvaIsPaid,
    setIpvaIsPaid,
    acceptsChange,
    setAcceptsChange,
    isLicensed,
    setIsLicensed,
    isArmored,
    setIsArmored
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

  function handleMakeDateChange(value: string): void {
    const year: number = Number.parseInt(value)
    let isValid: boolean = CarValidator.validateDate(year)

    if (makedDate)
      isValid = year <= makedDate

    setMakeDateIsValid(isValid)
    setMakeDate(value !== '' ? year : new Date().getFullYear())
  }

  function handleMakedDateChange(value: string): void {
    const year: number = Number.parseInt(value)
    let isValid: boolean = CarValidator.validateDate(year)

    if (makeDate)
      isValid = year >= makeDate

    setMakedDateIsValid(isValid)
    setMakedDate(value !== '' ? year : new Date().getFullYear())
  }

  function handleKilometersChange(value: string): void {
    const vl: number = Number.parseInt(value)
    const isValid: boolean = CarValidator.validateKilometers(vl)

    setKilometers(value !== '' ? vl : 0)
    setKilometersIsValid(isValid)
  }

  function handleExchangeTypeChange(value: unknown): void {
    switch (value) {
      case "Automatic":
        setExchangeType("Automatic")
        break

      case "Manual":
        setExchangeType("Manual")
        break

      default:
        break
    }
  }

  function handleGasolineTypeChange(value: unknown): void {
    switch (value) {
      case "Diesel":
        setGasolineType("Diesel")
        break

      case "Gasoline":
        setGasolineType("Gasoline")
        break

      case "Eletric":
        setGasolineType("Eletric")
        break

      case "Flex":
        setGasolineType("Flex")
        break

      default:
        break
    }
  }

  function handleColorChange(value: unknown): void {
    switch (value) {
      case "#F9312B":
        setColor("#F9312B")
        break

      case "#F97C2B":
        setColor("#F97C2B")
        break

      case "#F3DB0E":
        setColor("#F3DB0E")
        break

      case "#0EF32A":
        setColor("#0EF32A")
        break

      case "#7DF30E":
        setColor("#7DF30E")
        break

      case "#0EF3CD":
        setColor("#0EF3CD")
        break

      case "#0EB8F3":
        setColor("#0EB8F3")
        break

      case "#0E6CF3":
        setColor("#0E6CF3")
        break

      case "#AA0EF3":
        setColor("#AA0EF3")
        break

      case "#F30EBF":
        setColor("#F30EBF")
        break

      case "#FFFFFF":
        setColor("#FFFFFF")
        break

      case "#000000":
        setColor("#000000")
        break

      default:
        break
    }
  }

  function handlePriceChange(value: string): void {
    if (value === '') {
      setPrice(0)
    }

    else {
      const vle: number = Number.parseInt(value)
      const isValid: boolean = CarValidator.validatePrice(vle)
      setPriceIsValid(isValid)
      setPrice(vle)
    }
  }

  const classes = useStyles()
  const colors = getCarColors()
  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      onNextClick()
    }}>
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
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Maker"
              value={maker}
              fullWidth
              required
              onChange={(e) => capitalizeAndSet(e.target.value, setMaker)}
              disabled={isUpdate}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Model"
              value={model}
              fullWidth
              required
              onChange={(e) => capitalizeAndSet(e.target.value, setModel)}
              disabled={isUpdate}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Plate"
              value={plate}
              fullWidth
              onChange={(e) => handlePlateChange(e.target.value)}
              error={!plateIsValid}
              helperText={!plateIsValid ? 'This plate is not valid' : ''}
              required
              disabled={isUpdate}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Make Date"
              value={makeDate}
              fullWidth
              onChange={(e) => handleMakeDateChange(e.target.value)}
              error={!makeDateIsValid}
              helperText={!makeDateIsValid ? 'This year is not valid' : ''}
              required
              disabled={isUpdate}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Maked Date"
              value={makedDate}
              fullWidth
              onChange={(e) => handleMakedDateChange(e.target.value)}
              error={!makedDateIsValid}
              helperText={!makedDateIsValid ? 'This year is not valid' : ''}
              required
              disabled={isUpdate}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Kilometers"
              value={kilometers}
              fullWidth
              onChange={(e) => handleKilometersChange(e.target.value)}
              error={!kilometersIsValid}
              helperText={!kilometersIsValid ? 'Kilometers is less than zero' : ''}
              required
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              label="Price"
              value={price}
              fullWidth
              onChange={(e) => handlePriceChange(e.target.value)}
              error={!priceIsValid}
              helperText={!priceIsValid ? 'Price must be greater than 1000' : ''}
              required
            />
          </Grid>

          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth required disabled={isUpdate}>
              <InputLabel id="exchange-type-label">Exchange</InputLabel>
              <Select
                labelId="exchange-type-label"
                id="exchange-type"
                label="Exchange"
                value={exchangeType}
                onChange={(e) => handleExchangeTypeChange(e.target.value)}
              >
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth required disabled={isUpdate}>
              <InputLabel id="gasoline-type-label">Gasoline type</InputLabel>
              <Select
                labelId="gasoline-type-label"
                id="gasoline-type"
                label="Gasoline type"
                value={gasolineType}
                onChange={(e) => handleGasolineTypeChange(e.target.value)}
              >
                <MenuItem value={undefined}>None</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Gasoline">Gasoline</MenuItem>
                <MenuItem value="Flex">Flex</MenuItem>
                <MenuItem value="Eletric">Eletric</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                label="Color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
              >
                {
                  colors.map(x => (
                    <MenuItem value={x.value} key={x.id}>{x.color}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={12}>
            <TextField
              multiline
              fullWidth
              value={message}
              variant="outlined"
              label="Message"
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={ipvaIsPaid} onChange={(e) => setIpvaIsPaid(e.target.checked)} />}
              label="Ipva Is Paid"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={isLicensed} onChange={(e) => setIsLicensed(e.target.checked)} />}
              label="Is Licensed"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={isArmored} onChange={(e) => setIsArmored(e.target.checked)} />}
              label="Is Armored"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={acceptsChange} onChange={(e) => setAcceptsChange(e.target.checked)} />}
              label="Accepts Change"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="space-between" alignItems="center" className={classes.nextGrid}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          startIcon={<ArrowBackIosIcon />}
          onClick={onBackClick}
        >
          Back
        </Button>

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
