import styled from "styled-components"
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  mainGrid: {
    marginTop: '3%',
    padding: '1%'
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: '3% 4%'
  },
  contactContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  description: {
    marginTop: '5%'
  }
})

export const Page = styled.div`
  width: 100%;
  height: 100%;
`

export const NameHeader = styled.header`
  margin-bottom: 3%;
`

type CarNameProps = {
  inRed?: boolean;
}

export const CarName = styled.span<CarNameProps>`
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;
  font-size: 5vh;
  color: ${props => props.inRed ? '#BD1A05' : '#323131'}
`
