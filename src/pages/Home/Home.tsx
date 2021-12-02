import { useEffect, useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {
  CenteredContent,
  useStyles
} from './styles'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Paper
} from '@material-ui/core'
import TvIcon from '@material-ui/icons/Tv'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'

const Home = () => {

  const { news, fetchNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchNews(access_token)
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

      {!isLoading &&
        <Container className={classes.container}>
          <Grid container direction="column">
            <Grid
              container
              justify="space-between"
              alignItems="flex-end"
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
                  <Grid item xs={3}>
                    <Card className={classes.newsCard}>
                      <CardContent className={classes.newsContent}>
                        <Typography color="primary" variant="h6" gutterBottom>{x.title}</Typography>
                        <Typography variant="body2">{x.text}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>

        </Container>}

    </>
  )
}

export default Home
