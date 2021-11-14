import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { Sidebar, useStyles } from './styles'

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
