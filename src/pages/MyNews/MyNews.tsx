import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import NewsCard from '../../components/Cards/NewsCard/NewsCard'
import { useStyles } from './styles'
import CenteredContent from '../../components/CenteredContent/CenteredContent'
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo'

const MyNews = () => {

  const { news, fetchMyNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const history = useHistory()

  useEffect(() => {
    fetchMyNews(access_token)
  }, [access_token])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      {isLoading &&
        <CenteredSpinner />}

      {!isLoading && news.length === 0 &&
        <CenteredContent>
          <PersonalVideoIcon className={classes.noNewsIcon} />
          <Typography variant="h5">You don't have any news</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('/news/create')}
          >
            Add my first news
          </Button>
        </CenteredContent>}

      {!isLoading && news.length > 0 &&
        <>
          <Typography
            variant="h5"
            color="primary"
            align="center"
            gutterBottom
            className={classes.title}
          >
            My News
          </Typography>

          <Container className={classes.container}>
            <Grid container spacing={2}>
              {
                news.map((x) => {
                  return (
                    <NewsCard
                      key={x.id}
                      news={x}
                    />
                  )
                })
              }
            </Grid>
          </Container>
        </>}
    </>
  )
}

export default MyNews
