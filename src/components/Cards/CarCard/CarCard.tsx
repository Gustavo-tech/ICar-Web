import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  InfoSpan,
  MakerSpan,
  ModelSpan,
  NameWrapper,
  Picture
} from './styles'

interface CardProps {
  id: number,
  maker: string,
  model: string,
  kilometersTraveled: number,
  city: string,
  makeDate: number,
  makedDate: number,
  pictures: string[],
  color: string,
  price: number
}

const CarCard = ({
  id,
  maker,
  model,
  kilometersTraveled,
  city,
  makeDate,
  makedDate,
  pictures,
  price
}: CardProps) => {
  return (
    <Card to={`/selling/${id}`}>
      <Picture src={pictures ? pictures[0] : "https://via.placeholder.com/150"} />
      <NameWrapper>
        <MakerSpan>{maker}</MakerSpan>
        <ModelSpan>{model}</ModelSpan>
      </NameWrapper>
      <CardBody>
        <InfoSpan>Kilometers: {kilometersTraveled}</InfoSpan>
        <InfoSpan>City: {city}</InfoSpan>
        <InfoSpan>Year: {makeDate}/{makedDate}</InfoSpan>
      </CardBody>
      <CardFooter>
        <h5 style={{ textAlign: 'left' }}>R${price}</h5>
      </CardFooter>
    </Card>
  )
}

export default CarCard
