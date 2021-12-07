import { useContext, useEffect } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useRouteMatch } from 'react-router'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import {
  Container,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './styles'

type MatchProps = {
  id: string;
}

const NewsDetail = () => {

  const { title, text, userIsAuthor, fetchNewsById } = useContext(NewsContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile
  const match = useRouteMatch<MatchProps>()
  const id = match.params.id

  useEffect(() => {
    fetchNewsById(access_token, id, email!)
  }, [access_token, id, email])

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      <Container className={classes.mainContainer}>
        <Grid container>
          <Grid
            item
            container
            justify="flex-end"
            alignItems="center"
            xs={12}
          >
            <Tooltip title="edit">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="delete">
              <IconButton>
                <DeleteIcon color="primary" />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Paper className={classes.paper}>
              <Typography
                variant="h4"
                color="primary"
                align="center"
                gutterBottom
              >
                {title}
              </Typography>

              <Typography variant="body1" align="justify">{text}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default NewsDetail
