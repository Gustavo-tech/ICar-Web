import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'
import MessagesModal from '../Modals/Messages/Messages'
import { useContext } from 'react'
import { UIContext } from '../../contexts/UIContext'
import AccountModal from '../Modals/Account/Account'
import CarsModal from '../Modals/Cars/Cars'
import MenuModal from '../Modals/MenuModal/MenuModal'
import { Button, Grid, Typography } from '@material-ui/core'

type AppNavBarProps = {
  showSearch: boolean;
}

const AppNavbar = ({ showSearch }: AppNavBarProps) => {

  const { openModal } = useContext(UIContext)

  function openNavigationModal(type: string) {
    openModal(type)
  }

  const classes = useStyles()
  return (
    <>
      <MessagesModal />
      <AccountModal />
      <CarsModal />
      <MenuModal />
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.navbar}
      >
        <Typography variant="h4" className={classes.brand}>ICar</Typography>
        <Button
          className={classes.menuButton}
          onClick={() => openNavigationModal('account')}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
      </Grid>
    </>
  )
}

export default AppNavbar
