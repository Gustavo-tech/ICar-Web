import Typography from '@material-ui/core/Typography'

type LabelWithValueProps = {
  label?: string;
  value?: string;
}

const LabelWithValue = ({ label, value }: LabelWithValueProps) => {
  return (
    <>
      <Typography variant="subtitle2" gutterBottom color="primary" display="block">{label}</Typography>
      <Typography variant="h6" gutterBottom display="block">{value}</Typography>
    </>
  )
}

export default LabelWithValue
