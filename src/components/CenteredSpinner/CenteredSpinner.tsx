import { CircularProgress } from '@material-ui/core'
import { Wrapper } from './styles'


const CenteredSpinner = () => {
  return (
    <Wrapper>
      <CircularProgress color="primary" />
    </Wrapper>
  )
}

export default CenteredSpinner
