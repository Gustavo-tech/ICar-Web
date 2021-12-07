import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import News from '../../../models/news'
import { useStyles } from './styles'

type NewsCardProps = {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {

  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Card className={classes.newsCard}>
        <CardContent className={classes.newsContent}>
          <Typography color="primary" variant="h6" gutterBottom>{news.title}</Typography>
          <Typography variant="body2">{news.text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default NewsCard
