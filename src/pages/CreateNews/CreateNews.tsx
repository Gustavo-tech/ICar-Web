import { useContext, useState } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from '@material-ui/core'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'
import { UIContext } from '../../contexts/UIContext'
import { useStyles } from './styles'

const CreateNews = () => {

  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { text, setText, title, setTitle, addNews } = useContext(NewsContext)
  const { isLoading, success, setSuccess } = useContext(UIContext)

  const [titleIsValid, setTitleIsValid] = useState<boolean>(true)
  const [textIsValid, setTextIsValid] = useState<boolean>(true)
  const [userSubmited, setUserSubmited] = useState<boolean>(false)

  function handleTitleChange(changedText: string): void {
    let isValid: boolean = true
    if (changedText === '')
      isValid = false

    setTitleIsValid(isValid)
    setTitle(changedText)
  }

  function handleTextChange(changedText: string): void {
    let isValid: boolean = true
    if (changedText === '')
      isValid = false

    setTitleIsValid(isValid)
    setText(changedText)
  }

  function resetComponent(): void {
    setText('')
    setTitle('')
    setTitleIsValid(true)
    setTextIsValid(true)
    setUserSubmited(false)
    setSuccess(false)
  }

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      {isLoading &&
        <CenteredSpinner />}

      {!isLoading && !userSubmited &&
        <form onSubmit={(e) => {
          e.preventDefault()
          addNews(access_token)
          setUserSubmited(true)
        }}>
          <Container className={classes.formContainer}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              Create News
            </Typography>

            <TextField
              label="title"
              value={title}
              fullWidth
              variant="outlined"
              error={!titleIsValid}
              required
              className={classes.formField}
              onChange={(e) => handleTitleChange(e.target.value)}
            />

            <TextField
              label="text"
              value={text}
              fullWidth
              variant="outlined"
              multiline
              rows={15}
              error={!textIsValid}
              required
              className={classes.formField}
              onChange={(e) => handleTextChange(e.target.value)}
            />

            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Create
            </Button>
          </Container>
        </form>}

      {!isLoading && userSubmited && success &&
        <Dialog
          open={true}
          onClose={resetComponent}
        >
          <DialogTitle>News saved successfully!</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Your news was saved successfully, now the users can read it.
              You can edit or delete it on my news section
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              onClick={resetComponent}
              color="primary"
            >
              Create another
            </Button>

            <Button
              variant="contained"
              onClick={resetComponent}
              color="primary"
            >
              Go to my news
            </Button>
          </DialogActions>
        </Dialog>}

      {!isLoading && userSubmited && !success &&
        <Dialog
          open={true}
          onClose={resetComponent}
        >
          <DialogTitle>Some error occurred while saving this news</DialogTitle>

          <DialogContent>
            <DialogContentText>
              We couldn't save this news, hopefully if you try again, everything
              is going to be alright!
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              onClick={() => addNews(access_token)}
              color="primary"
            >
              Try again
            </Button>
          </DialogActions>
        </Dialog>}
    </>
  )
}

export default CreateNews
