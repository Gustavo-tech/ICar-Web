import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'
import { useContext } from 'react'
import { UIContext } from '../../contexts/UIContext'
import MenuModal from '../Modals/MenuModal/MenuModal'
import { Button, Grid, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

type AppNavBarProps = {
  showSearch: boolean;
}

const AppNavbar = ({ showSearch }: AppNavBarProps) => {

  const { openModal } = useContext(UIContext)

  const history = useHistory()
  const classes = useStyles()
  return (
    <>
      <MenuModal />
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.navbar}
      >
        <Typography
          variant="h4"
          className={classes.brand}
          onClick={() => history.push('/')}
        >
          ICar</Typography>
        <Button
          className={classes.menuButton}
          onClick={() => openModal('menu')}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
      </Grid>
    </>
  )
}

export default AppNavbar
