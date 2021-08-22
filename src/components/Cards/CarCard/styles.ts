import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  border: 1px solid #C7C7C7;
  width: 29%;
  height: 78%;
  margin: 0 20px 20px 20px;
  cursor: pointer;

  &:hover {
    background-color: #EAE9E9;
  }
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
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
`

export const ModelSpan = styled.span`
  font-family: 'Crimson Text', serif;
  font-style: normal;
  font-weight: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: var(--red);
`

export const InfoSpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  margin: 1% 0;
`

export const CardBody = styled.div`
  display: flex;
  padding: 5% 7%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CardFooter = styled.footer`
  width: 100%;
  padding: 4% 7%;
`
