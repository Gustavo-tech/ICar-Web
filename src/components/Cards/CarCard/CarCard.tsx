import {
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  CardActions
} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import {
  useStyles,
} from './styles'
import { useHistory } from 'react-router'

type CardProps = {
  id: number,
  maker: string,
  model: string,
  kilometersTraveled: number,
  city: string,
  makeDate: number,
  makedDate: number,
  pictures: string[],
  color: string,
  price: number
}

const CarCard = ({
  id,
  maker,
  model,
  kilometersTraveled,
  city,
  makeDate,
  makedDate,
  pictures,
  price
}: CardProps) => {

  const history = useHistory()

  function handleOnCardClick(id: number) {
    history.push('/selling/' + id.toString())
  }

  const classes = useStyles()
  return (
    <Card className={classes.card} onClick={() => handleOnCardClick(id)}>
      <CardActionArea>
        <CardMedia component="img" src={pictures[0]} className={classes.cardMedia} />

        <CardContent>
          <Typography variant="h5">{maker} {model}</Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <LocationOnIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={city} />
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
