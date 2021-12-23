import { useEffect, useContext } from 'react'
import {
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

const MyNews = () => {

  const { news, fetchMyNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchMyNews(access_token)
  }, [access_token])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      {isLoading &&
        <CenteredSpinner />}

      {!isLoading &&
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
