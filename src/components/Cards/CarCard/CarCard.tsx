import Carousel from 'react-bootstrap/Carousel'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import RoomIcon from '@material-ui/icons/Room'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import {
  Card,
  CardBody,
  CardFooter,
  MakerSpan,
  ModelSpan,
  NameWrapper,
  Picture,
  PicturesWrapper,
  Info
} from './styles'

type CardProps = {
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
      <PicturesWrapper>
        <Carousel>
          {
            pictures.map(x => (
              <Carousel.Item key={x}>
                <Picture src={x} alt="Car-picture" />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </PicturesWrapper>
      <NameWrapper>
        <MakerSpan>{maker}</MakerSpan>
        <ModelSpan>{model}</ModelSpan>
      </NameWrapper>
      <CardBody>
        <Info><DirectionsCarIcon /> {kilometersTraveled} KM</Info>
        <Info><RoomIcon /> {city}</Info>
        <Info><CalendarTodayIcon /> {makeDate}/{makedDate}</Info>
      </CardBody>
      <CardFooter>
        <h5 style={{ textAlign: 'left' }}>R${price}</h5>
      </CardFooter>
    </Card>
  )
}

export default CarCard
