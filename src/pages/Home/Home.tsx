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

const Home = () => {

  const { fetchNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchNews(access_token)
  }, [])

  const classes = useStyles()
  return (
    <>
      <Navbar showSearch={false} />

      {isLoading &&
        <CenteredContent>
          <CircularProgress color="primary" />
        </CenteredContent>}

      {!isLoading &&
        <Container className={classes.container}>
          <Grid container justify="space-between" alignItems="flex-end">
            <Typography variant="h6" color="primary">Last News</Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<TvIcon />}
            >
              Check All
            </Button>
          </Grid>
        </Container>}

    </>
  )
}

export default Home
