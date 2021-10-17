import {
  Label, Value
} from './styles'

type LabelWithValueProps = {
  label?: string;
  value?: string;
}

const LabelWithValue = ({ label, value }: LabelWithValueProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </>
  )
}

export default LabelWithValue
