// Styles
import { 
  MainDiv, 
  PicDiv,
  ContentDiv,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledMessage,
  StyledLoginBtn
} from './styles'

// Pictures
import Picture from '../../assets/images/mclaren.jpg';

const Login = () => {
  return (
    <MainDiv>
      <PicDiv src={Picture} alt="mclaren-720s" />
      <ContentDiv>
        <StyledTitle>ICar</StyledTitle>

        <StyledLabel>Email</StyledLabel>
        <StyledInput />

        <StyledLabel>Password</StyledLabel>
        <StyledInput />

        <StyledMessage to="forgot">Forgot password?</StyledMessage>
        <StyledLoginBtn>Login</StyledLoginBtn>

      </ContentDiv>
    </MainDiv>
  )
}

export default Login
