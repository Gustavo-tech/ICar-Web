import { useContext } from 'react'
import { Button, Container, TextField } from '@material-ui/core'
import { useStyles } from './styles'
import { CarContext } from '../../../contexts/CarContext'

type FilterSidebarProps = {
  onSearchClick: () => any;
}

const FilterSidebar = ({ onSearchClick }: FilterSidebarProps) => {

  const {
    makerText,
    modelText,
    minPrice,
    maxPrice,
    maxKilometers,
    setMakerText,
    setModelText,
    setMinPrice,
    setMaxPrice,
    setMaxKilometers
  } = useContext(CarContext)

  const classes = useStyles()
  return (
    <Container className={classes.sidebar}>
      <TextField
        label="Maker"
        variant="outlined"
        fullWidth
        className={classes.filterField}
        value={makerText}
        onChange={(e) => setMakerText(e.target.value)}
      />

      <TextField
        label="Model"
        variant="outlined"
        fullWidth
        className={classes.filterField}
        value={modelText}
        onChange={(e) => setModelText(e.target.value)}
      />

      <TextField
        label="Minimum Price"
        variant="outlined"
        fullWidth
        type="number"
        value={minPrice}
        className={classes.filterField}
        onChange={(e) => setMinPrice(Number.parseInt(e.target.value))}
      />

      <TextField
        label="Maximum Price"
        variant="outlined"
        fullWidth
        type="number"
        value={maxPrice}
        className={classes.filterField}
        onChange={(e) => setMaxPrice(Number.parseInt(e.target.value))}
      />

      <TextField
        label="Maximum Kilometers Traveled"
        variant="outlined"
        fullWidth
        type="number"
        value={maxKilometers}
        className={classes.filterField}
        onChange={(e) => setMaxKilometers(Number.parseInt(e.target.value))}
      />

      <Button
        color="primary"
        variant="contained"
        fullWidth
        className={classes.searchButton}
        onClick={onSearchClick}
      >
        Search
      </Button>
    </Container>
  )
}

export default FilterSidebar
