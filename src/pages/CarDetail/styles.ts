import styled from "styled-components"
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  mainGrid: {
    padding: '1%',
  },
  infoContainer: {
    backgroundColor: 'white',
    border: '1px solid #DFDFDF',
    borderRadius: 7,
    padding: '3% 4%',
    marginBottom: '5%',
  },
  sendMessageFooter: {
    marginTop: '4%'
  },
  contactContainer: {
    width: '80%',
    border: '1px solid #DFDFDF',
    borderRadius: 7,
  },
  description: {
    marginTop: '5%'
  },
  label: {
    color: '#696977',
    fontSize: '2.4vh'
  },
  carDetailsFooter: {
    marginTop: '4%'
  }
})

export const Page = styled.div`
  width: 100%;
  height: 100%;
`

export const NameHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3%;
`

type CarColorProps = {
  color: string;
}

export const CarColor = styled.div<CarColorProps>`
  display: block;
  width: 70%;
  height: 4vh;
  background-color: ${props => props.color};
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
