import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'

export const useStyles = makeStyles({
  button: {
    position: 'absolute',
    backgroundColor: '#E6240A',
    '&:hover': {
      backgroundColor: '#D3240C'
    }
  },
  nextButton: {
    right: 10,
    top: '50%'
  },
  leftButton: {
    left: 10,
    top: '50%'
  },
  arrowIcon: {
    color: 'white'
  }
})

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  height: 48vh;
  width: 100%;
`

export const Picture = styled.img`
  height: 100%;
  width: 33%;
  object-fit: fill;
` 
