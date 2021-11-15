import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
  fieldsGrid: {
    marginTop: '2%'
  },
  nextGrid: {
    marginTop: '4%'
  }
})

export const Form = styled.form`
  margin-top: 5%;
`

export const ColorInput = styled.input`
  width: 100%;
  height: 65%;
`

export const ColorLabel = styled.label`
  display: block;
  height: 10%;
`

export const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
