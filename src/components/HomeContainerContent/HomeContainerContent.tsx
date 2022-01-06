import { ReactNode } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'

type HomeContainerContentProps = {
  headerTitle: string;
  buttonText: string;
  buttonIcon: ReactNode;
  onButtonClick: () => any;
  children?: ReactNode;
}

const HomeContainerContent = ({
  headerTitle,
  buttonText,
  buttonIcon,
  onButtonClick,
  children
}: HomeContainerContentProps) => {

  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container direction="column">
        <Grid
          container
          justify="space-between"
          alignItems="flex-end"
          item
          xs={12}
          className={classes.sectionHeader}
        >
          <Typography variant="h6" color="primary">{headerTitle}</Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={buttonIcon}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </Grid>

        {children}
      </Grid>

    </Container>
  )
}

export default HomeContainerContent
