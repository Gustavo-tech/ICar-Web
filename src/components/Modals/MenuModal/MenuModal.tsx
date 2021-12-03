import {
  Grid,
  Modal,
  Paper,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UIContext } from '../../../contexts/UIContext'
import { useStyles } from './styles'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import MessageIcon from '@material-ui/icons/Message'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import CreateIcon from '@material-ui/icons/Create'
import InfoIcon from '@material-ui/icons/Info'
import SecurityIcon from '@material-ui/icons/Security'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import StoreIcon from '@material-ui/icons/Store'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import ListAltIcon from '@material-ui/icons/ListAlt'

const MenuModal = () => {

  const [selectedTab, setSelectedTab] = useState<number>(0)

  const { isModalOpen, modalType, closeModal } = useContext(UIContext)

  const classes = useStyles()
  const history = useHistory()

  function handleItemClick(url: string) {
    closeModal()
    history.push(url)
  }

  const accountItems = [
    {
      id: 1,
      icon: <InfoIcon className={classes.menuIcon} />,
      text: 'Account info',
      path: '/account/personal'
    },
    {
      id: 2,
      icon: <SecurityIcon className={classes.menuIcon} />,
      text: 'Security',
      path: '/account/security'
    }
  ]

  const carItems = [
    {
      id: 1,
      icon: <AccountCircleIcon className={classes.menuIcon} />,
      text: 'My cars',
      path: '/mycars'
    },
    {
      id: 2,
      icon: <StoreIcon className={classes.menuIcon} />,
      text: 'Buy',
      path: '/selling'
    },
    {
      id: 3,
      icon: <MonetizationOnIcon className={classes.menuIcon} />,
      text: 'Sell',
      path: '/car/sell '
    },
  ]

  const newsItems = [
    {
      id: 1,
      icon: <PermContactCalendarIcon className={classes.menuIcon} />,
      text: 'My News',
      path: '/mynews'
    },
    {
      id: 2,
      icon: <ListAltIcon className={classes.menuIcon} />,
      text: 'All',
      path: '/news'
    },
    {
      id: 3,
      icon: <CreateIcon className={classes.menuIcon} />,
      text: 'Create',
      path: '/news/create '
    },
  ]

  return (
    <Modal
      open={isModalOpen && modalType === 'menu'}
      onClose={closeModal}
      className={classes.modal}
    >
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={classes.menuContainer}
      >
        <Grid item xs={12} className={classes.tabGrid}>
          <Paper>
            <Tabs
              value={selectedTab}
              onChange={(_, index) => setSelectedTab(index)}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              className={classes.tabs}
            >
              <Tab icon={<AccountBoxIcon />} label="account" />
              <Tab icon={<DriveEtaIcon />} label="cars" />
              <Tab icon={<CreateIcon />} label="news" />
              <Tab icon={<MessageIcon />} label="messages" />
            </Tabs>
          </Paper>
        </Grid>

        <Grid
          item
          container
          direction="row"
          xs={12}
          className={classes.itemsBody}
          spacing={1}
        >
          {selectedTab === 0 &&
            accountItems.map((x) => {
              return (
                <Grid
                  key={x.id}
                  item
                  container
                  xs={3}
                  alignItems="flex-start"
                  justify="flex-start"
                  className={classes.menuItem}
                >
                  <Paper
                    className={classes.paperItem}
                    onClick={() => handleItemClick(x.path)}
                  >
                    {x.icon}
                    <Typography className={classes.itemText}>{x.text}</Typography>
                  </Paper>
                </Grid>
              )
            })}

          {selectedTab === 1 &&
            carItems.map((x) => {
              return (
                <Grid
                  key={x.id}
                  item
                  container
                  xs={3}
                  alignItems="flex-start"
                  justify="flex-start"
                  className={classes.menuItem}
                >
                  <Paper
                    className={classes.paperItem}
                    onClick={() => handleItemClick(x.path)}
                  >
                    {x.icon}
                    <Typography className={classes.itemText}>{x.text}</Typography>
                  </Paper>
                </Grid>
              )
            })}

          {selectedTab === 2 &&
            newsItems.map((x) => {
              return (
                <Grid
                  key={x.id}
                  item
                  container
                  xs={3}
                  alignItems="flex-start"
                  justify="flex-start"
                  className={classes.menuItem}
                >
                  <Paper
                    className={classes.paperItem}
                    onClick={() => handleItemClick(x.path)}
                  >
                    {x.icon}
                    <Typography className={classes.itemText}>{x.text}</Typography>
                  </Paper>
                </Grid>
              )
            })}
        </Grid>
      </Grid>
    </Modal>
  )
}

export default MenuModal
