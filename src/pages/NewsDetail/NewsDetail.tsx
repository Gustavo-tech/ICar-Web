import { useContext, useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useRouteMatch } from 'react-router'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import { useStyles } from './styles'
import { UIContext } from '../../contexts/UIContext'

type MatchProps = {
  id: string;
}

const NewsDetail = () => {

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  const {
    title,
    text,
    userIsAuthor,
    setTitle,
    setText,
    fetchNewsById,
    updateNews,
    removeNews
  } = useContext(NewsContext)
  const { isLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const { email } = profile

  const match = useRouteMatch<MatchProps>()
  const history = useHistory()
  const id = match.params.id

  useEffect(() => {
    fetchNewsById(id, access_token)
  }, [access_token, id, email])

  function handleFormSubmit() {
    updateNews(id, access_token)
    setIsEditing(false)
  }

  function handleDeleteNewsClick() {
    removeNews(id, access_token)
    setOpenDeleteDialog(false)
    history.push('/mynews')
  }

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      {openDeleteDialog &&
        <Dialog
          open={openDeleteDialog}
          onClose={() => setOpenDeleteDialog(false)}
        >
          <DialogTitle color="primary ">Are you sure you want to delete this news?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you delete this news you won't be able to recover it
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDeleteNewsClick}
            >
              Yes
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenDeleteDialog(false)}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>}

      {!isLoading &&
        <Container className={classes.mainContainer}>
          <Grid container>

            {userIsAuthor &&
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                xs={12}
              >
                {!isEditing &&
                  <Tooltip title="edit">
                    <IconButton onClick={() => setIsEditing(true)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>}

                {isEditing &&
                  <Tooltip title="save">
                    <IconButton onClick={() => {
                      formRef!.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
                    }}>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>}

                <Tooltip title="delete">
                  <IconButton onClick={() => setOpenDeleteDialog(true)}>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </Grid>}

            <Grid
              item
              xs={12}
            >
              <Paper className={classes.paper}>

                {!isEditing &&
                  <>
                    <Typography
                      variant="h4"
                      color="primary"
                      align="center"
                      gutterBottom
                    >
                      {title}
                    </Typography>

                    <Typography variant="body1" align="justify">{text}</Typography>
                  </>}

                {isEditing &&
                  <form ref={formRef} onSubmit={(e) => {
                    e.preventDefault()
                    handleFormSubmit()
                  }}>
                    <TextField
                      variant="outlined"
                      label="title"
                      fullWidth
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className={classes.formField}
                    />

                    <TextField
                      variant="outlined"
                      label="text"
                      fullWidth
                      required
                      multiline
                      rows={15}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className={classes.formField}
                    />
                  </form>}
              </Paper>
            </Grid>
          </Grid>
        </Container>}
    </>
  )
}

export default NewsDetail
