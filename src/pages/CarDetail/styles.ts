import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100%;
`

export const NameHeader = styled.header`
  margin-bottom: 3%;
`

export const InfosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
`

export const InfoContainer = styled.div`
  background-color: white;
  border-radius: 17px;
  width: 70%;
  height: 80%;
  padding: 3%;
  box-shadow: 5px 5px 29px -4px rgba(0,0,0,0.21);
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
