import { useEffect, useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { CenteredContent } from './styles'
import {
  CircularProgress,
  Grid,
} from '@material-ui/core'
import TvIcon from '@material-ui/icons/Tv'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'
import NewsCard from '../../components/Cards/NewsCard/NewsCard'
import { CarContext } from '../../contexts/CarContext'
import HomeContainerContent from '../../components/HomeContainerContent/HomeContainerContent'
import { useHistory } from 'react-router-dom'
import CarCard from '../../components/Cards/CarCard/CarCard'
import MakerCard from '../../components/Cards/MakerCard/MakerCard'

const Home = () => {

  const { news, fetchNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const {
    mostSeenCars,
    mostSeenMakers,
    fetchMostSeenCars,
    fetchMostSeenMakers,
    setMakerText
  } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const history = useHistory()

  useEffect(() => {
    fetchNews(access_token)
    fetchMostSeenCars(4, access_token)
    fetchMostSeenMakers(4, access_token)
  }, [])

  const localNews = news.slice(0, 4)
  return (
    <>
      <Navbar showSearch={false} />
      {isLoading &&
        <CenteredContent>
          <CircularProgress color="primary" />
        </CenteredContent>}

      {!isLoading && mostSeenCars.length > 0 &&
        <HomeContainerContent
          buttonIcon={<DriveEtaIcon />}
          buttonText="Check All"
          headerTitle="Most Seen Cars"
          onButtonClick={() => history.push("/selling")}
        >
          <Grid container item xs={12} spacing={2}>
            {mostSeenCars.map((x) => (
              <Grid item xs={3}>
                <CarCard
                  key={x.id}
                  id={x.id}
                  kilometersTraveled={x.kilometersTraveled}
                  location={x.address.localidade}
                  makeDate={x.makeDate}
                  makedDate={x.makedDate}
                  maker={x.maker}
                  model={x.model}
                  picture={x.pictures[0]}
                  price={x.price}
                />
              </Grid>
            ))}
          </Grid>

        </HomeContainerContent>}

      {!isLoading && mostSeenMakers.length > 0 &&
        <HomeContainerContent
          buttonIcon={<EmojiTransportationIcon />}
          buttonText="Check all"
          headerTitle="Most Seen Makers"
          onButtonClick={() => history.push('/selling')}
        >
          <Grid container item xs={12} spacing={2}>
            {
              mostSeenMakers.map((item, index) => {
                return (
                  <MakerCard
                    key={index}
                    makerName={item}
                    onCardClick={(maker: string) => {
                      setMakerText(maker)
                      history.push('/selling')
                    }}
                  />
                )
              })
            }
          </Grid>
        </HomeContainerContent>}

      {!isLoading && localNews.length > 0 &&
        <HomeContainerContent
          buttonIcon={<TvIcon />}
          buttonText="Check all"
          headerTitle="News"
          onButtonClick={() => history.push("/news")}
        >
          <Grid container item xs={12} spacing={2}>
            {
              localNews.map((x) => (
                <NewsCard
                  key={x.id}
                  news={x}
                />
              ))
            }
          </Grid>
        </HomeContainerContent>}
    </>
  )
}

export default Home
