import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: white;
  border: 1px solid #C7C7C7;
  width: 29%;
  height: 67%;
  margin: 0 20px 20px 20px;
  cursor: pointer;
  transition-duration: 0.5s;
  color: black;
  text-decoration: none;

  &:link {
    text-decoration: none;
  }

  &:hover {
    background-color: #EAE9E9;
    text-decoration: none;
    color: black;
  }
`

export const PicturesWrapper = styled.div`
  height: 30%;
  width: 100%;
`

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 40px;
`

export const ModelSpan = styled.span`
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: var(--red);
`

export const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.4vh 0;

  & > svg {
    transform: scale(0.7);
  }
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
