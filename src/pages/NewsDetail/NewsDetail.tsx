import { useContext, useEffect } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useRouteMatch } from 'react-router'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import { Container, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'

type MatchProps = {
  id: string;
}

const NewsDetail = () => {

  const { title, text, fetchNewsById } = useContext(NewsContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const match = useRouteMatch<MatchProps>()
  const id = match.params.id

  useEffect(() => {
    fetchNewsById(access_token, id)
  }, [access_token, id])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      <Paper className={classes.paper}>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="body1" align="justify" display="inline">{text}</Typography>
      </Paper>
    </>
  )
}

export default NewsDetail
