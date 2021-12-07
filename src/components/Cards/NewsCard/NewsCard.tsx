import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import { useHistory } from 'react-router'
import News from '../../../models/news'
import { useStyles } from './styles'

type NewsCardProps = {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {

  const history = useHistory()
  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Card className={classes.newsCard} onClick={() => history.push('/news/details/' + news.id)}>
        <CardContent className={classes.newsContent}>
          <Typography color="primary" variant="h6" gutterBottom>{news.title}</Typography>
          <Typography variant="body2">{news.text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default NewsCard
