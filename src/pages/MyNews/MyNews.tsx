import { useEffect, useContext } from 'react'
import { Grid } from '@material-ui/core'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import NewsCard from '../../components/Cards/NewsCard/NewsCard'

const MyNews = () => {

  const { news, fetchMyNews } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser

  useEffect(() => {
    fetchMyNews(access_token, profile.email!)
  }, [])

  return (
    <>
      <AppNavbar showSearch={false} />

      {isLoading &&
        <CenteredSpinner />}

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
    </>
  )
}

export default MyNews
