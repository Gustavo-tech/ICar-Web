import EmailIcon from '@material-ui/icons/Email';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Brand,
  Button,
  ButtonsDiv,
  Navbar
} from './styles';

const AppNavbar = () => (
  <Navbar>
    <Brand>ICar</Brand>
    <ButtonsDiv>
      <Button>
        <EmailIcon />
      </Button>
      <Button>
        <DriveEtaIcon />
      </Button>
      <Button>
        <AccountCircleIcon />
      </Button>
    </ButtonsDiv>
  </Navbar>
)

export default AppNavbar;
