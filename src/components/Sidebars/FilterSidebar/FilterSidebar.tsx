import {
  Sidebar,
  useStyles
} from './styles'
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core'

const FilterSidebar = () => {

  const classes = useStyles()
  return (
    <Sidebar>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="maker-label">Maker</InputLabel>
        <Select
          labelId="maker-label"
          id="maker-select"
          label="Maker"
        >
          <MenuItem value="">All</MenuItem>
        </Select>
      </FormControl>
    </Sidebar >
  )
}

export default FilterSidebar
