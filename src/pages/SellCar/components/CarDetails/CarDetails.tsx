import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AssignmentIcon from '@material-ui/icons/Assignment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useStyles, Form } from './styles'

type CarDetailsProps = {
  onNextClick: () => void;
}

const CarDetails = ({ onNextClick }: CarDetailsProps) => {

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

      <Grid container direction="column" className={classes.fieldsGrid}>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Plate"
              fullWidth
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
