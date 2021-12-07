import { useReactOidc } from '@axa-fr/react-oidc-context'
import { Container, Grid, Typography } from '@material-ui/core'
import { useContext, useEffect } from 'react'
import NewsCard from '../../components/Cards/NewsCard/NewsCard'
import AppNavbar from "../../components/Navbar/Navbar"
import { NewsContext } from '../../contexts/NewsContext'
import { useStyles } from './styles'

const News = () => {

  const { news, fetchNews } = useContext(NewsContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  useEffect(() => {
    fetchNews(access_token)
  }, [access_token])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      <Typography
        align="center"
        variant="h4"
        color="primary"
        className={classes.title}
        gutterBottom
      >
        News
      </Typography>

      <Container>
        <Grid container spacing={2}>
          {
            news.map((x) => (
              <NewsCard key={x.id} news={x} />
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default News
