import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const FileInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const useStyles = makeStyles({
  picture: {
    height: '14vh'
  },
  nextButton: {
    marginTop: '8%'
  },
  titleGrid: {
    marginTop: '2%'
  },
  imagesGrid: {
    marginTop: '3%'
  },
  imgHolder: {
    height: '28vh',
    boxShadow: '5px 5px 20px -3px rgba(0,0,0,0.39)'
  }
})
