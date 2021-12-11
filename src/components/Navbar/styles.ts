import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  navbar: {
    height: '9vh',
    width: '100%',
    backgroundColor: 'var(--red)'
  },
  brand: {
    fontFamily: 'Satisfy, cursive',
    color: 'var(--white)',
    paddingLeft: '1.5%',
    cursor: 'pointer'
  },
  menuButton: {
    backgroundColor: 'var(--black)',
    height: '100%',
    width: '4%',
    borderRadius: 0
  },
  menuIcon: {
    fill: 'white',
    '&:hover': {
      fill: 'var(--red)'
    }
  }
})
