import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'

type MakerCardProps = {
  makerName: string;
  onCardClick: (maker: string) => any;
}

const MakerCard = ({ makerName, onCardClick }: MakerCardProps) => {

  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper} onClick={() => onCardClick(makerName)}>
        <Typography variant="h3" className={classes.maker}>{makerName}</Typography>
      </Paper>
    </Grid>
  )
}

export default MakerCard
