import { CenteredDiv } from './styles'
import Spinner from 'react-bootstrap/Spinner'

type CenteredSpinnerProps = {
  animation: 'grow' | 'border'
}

const CenteredSpinner = ({ animation }: CenteredSpinnerProps) => {
  return (
    <CenteredDiv>
      <Spinner animation={animation} variant="danger" />
    </CenteredDiv>
  )
}

export default CenteredSpinner
