import { useEffect, useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {
  CenteredContent,
  useStyles
} from './styles'
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import TvIcon from '@material-ui/icons/Tv'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'
import NewsCard from '../../components/Cards/NewsCard/NewsCard'
import { CarContext } from '../../contexts/CarContext'

const Home = () => {

  const { news, fetchNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const {
    mostSeenCars,
    mostSeenMakers,
    fetchMostSeenCars,
    fetchMostSeenMakers
  } = useContext(CarContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchNews(access_token)
    fetchMostSeenCars(5, access_token)
    fetchMostSeenMakers(5, access_token)
  }, [])

  const classes = useStyles()
  const localNews = news.slice(0, 4)
  return (
    <>
      <Navbar showSearch={false} />

      {isLoading &&
        <CenteredContent>
          <CircularProgress color="primary" />
        </CenteredContent>}

      {!isLoading && localNews.length > 0 &&
        <Container className={classes.container}>
          <Grid container direction="column">
            <Grid
              container
              justify="space-between"
              alignItems="flex-end"
              item
              xs={12}
              className={classes.sectionHeader}
            >
              <Typography variant="h6" color="primary">Last News</Typography>
              <Button
                variant="contained"
                color="primary"
                endIcon={<TvIcon />}
              >
                Check All
              </Button>
            </Grid>

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
          </Grid>

        </Container>}

    </>
  )
}

export default Home
