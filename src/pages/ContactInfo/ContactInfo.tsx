import { Container, Grid, Typography } from '@material-ui/core'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSettings from '../../components/Sidebars/SidebarSettings/SidebarSettings'
import { useStyles } from './styles'

const ContactInfo = () => {

  const classes = useStyles()
  return (
    <>
      <Navbar showSearch={false} />
      <Grid
        container
        spacing={2}
        className={classes.pageStyle}
      >
        <Grid item xs={3}>
          <SidebarSettings />
        </Grid>

        <Grid
          container
          item
          xs={9}
          direction="column"
          justify="center"
          alignItems="center"
        >

        </Grid>
      </Grid>
    </>
  )
}

export default ContactInfo
