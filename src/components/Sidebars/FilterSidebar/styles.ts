import styled from "styled-components"
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  filterField: {
    margin: '2%'
  },
  sidebar: {
    backgroundColor: 'white',
    padding: '5%'
  },
  searchButton: {
    marginTop: '7%'
  }
})

export const Sidebar = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid #CECECE;
  padding: 3%;
`
