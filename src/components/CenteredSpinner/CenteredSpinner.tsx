import { CenteredDiv } from './styles'

type CenteredSpinnerProps = {
  animation: 'grow' | 'border'
}

const CenteredSpinner = ({ animation }: CenteredSpinnerProps) => {
  return (
    <CenteredDiv>
      {/* <Spinner animation={animation} variant="danger" /> */}
    </CenteredDiv>
  )
}

export default CenteredSpinner
