import { Container, Typography } from '@material-ui/core'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { useEffect, useState } from 'react'
import { serverUrl } from '../../constants/urls';
import { Wrapper, useStyles } from './styles'


const Logout = () => {
  const [counter, setCounter] = useState(10)

  useEffect(() => {
    if (counter === 0)
      window.location.replace(`${serverUrl}/auth/logout`)

    else
      setCounter(counter - 1)
  }, [counter])

  const classes = useStyles()
  return (
    <Wrapper>
      <Container className={classes.cardContainer}>
        <DirectionsWalkIcon
          fontSize="large"
          color="primary"
          className={classes.icon}
        />

        <Typography
          color="primary"
          variant="h5"
        >
          Hang on we are logging you out!
        </Typography>
      </Container>
    </Wrapper>
  )
}

export default Logout
