import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'

type LabelWithValueProps = {
  label?: string;
  value?: string;
}

const LabelWithValue = ({ label, value }: LabelWithValueProps) => {

  const classes = useStyles()
  return (
    <>
      <Typography display="block" className={classes.label}>{label}</Typography>
      <Typography display="block" className={classes.value}>{value}</Typography>
    </>
  )
}

export default LabelWithValue
