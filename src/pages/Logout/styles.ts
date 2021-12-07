import styled from "styled-components"
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '75%',
    width: '34%',
    borderRadius: 7
  },
  icon: {
    transform: 'scale(3)',
    marginBottom: '15%'
  }
})

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  width: 100vw;
  height: 100vh;
`
