import {
  CardMedia,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import {
  useStyles,
} from './styles'
import { useHistory } from 'react-router'

type CarCardProps = {
  id: string;
  maker: string;
  model: string;
  kilometersTraveled: number;
  location: string;
  makeDate: number;
  makedDate: number;
  picture: string;
  price: number;
  numberOfViews?: number;
}

const CarCard = ({
  id,
  maker,
  model,
  kilometersTraveled,
  location,
  makeDate,
  makedDate,
  picture,
  price,
  numberOfViews
}: CarCardProps) => {

  const history = useHistory()

  function handleOnCardClick(id: string) {
    history.push('/selling/' + id)
  }

  const classes = useStyles()
  return (
    <Card className={classes.card} onClick={() => handleOnCardClick(id)}>
      <CardActionArea>
        <CardMedia image={picture} className={classes.cardMedia} />

        <CardContent>
          <Typography variant="h5">{maker} {model}</Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <LocationOnIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={location} />
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <CalendarTodayIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={`${makeDate} / ${makedDate}`} />
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <DriveEtaIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={`${kilometersTraveled} KM`} />
            </ListItem>

            {numberOfViews !== undefined &&
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <RemoveRedEyeIcon className={classes.icon} />
                </ListItemIcon>

                <ListItemText primary={numberOfViews} />
              </ListItem>}

            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <AttachMoneyIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={`${price}`} />
            </ListItem>

          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CarCard
