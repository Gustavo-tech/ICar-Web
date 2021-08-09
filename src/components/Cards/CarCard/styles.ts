import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  border: 1px solid #C7C7C7;
  width: 29%;
  height: 80%;
  margin: 0 20px 20px 20px;
`

export const Picture = styled.img`
  width: 100%;
  height: 30vh;
`

export const NameDiv = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 22%;
  width: 70%;
`

export const MakerSpan = styled.span`
  font-family: 'Crimson Text', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 40px;
`

export const ModelSpan = styled.span`
  font-family: 'Crimson Text', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 20px;
  color: var(--red);
`

export const ColorMark = styled.div`
  height: 60%;
  border-bottom: 1px solid #B0B0B0;
  border-left: 1px solid #B0B0B0;
  border-right: 1px solid #B0B0B0;
  width: 14%;
  margin-left: 10%;
  background-color: ${props => props.color};
`

export const InfoSpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin: 1% 0;
`

export const CardBody = styled.div`
  display: flex;
  padding: 3% 12%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CardFooter = styled.footer`
  width: 100%;
  padding: 8% 7%;
`
