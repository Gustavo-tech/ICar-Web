// React
import { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <MainDiv>
      <PicDiv src={Picture} alt="mclaren-720s" />
      <div>
        <ContentDiv>
          <StyledTitle>ICar</StyledTitle>

          <StyledLabel>Email</StyledLabel>
          <StyledInput
            onChange={event => setEmail(event.target.value)}
            value={email}
            type="email"
            required
          />

          <StyledLabel>Password</StyledLabel>
          <StyledInput
            onChange={event => setPassword(event.target.value)}
            value={password}
            type="password"
            required
          />

          <StyledMessage to="forgot">Forgot password?</StyledMessage>
          <StyledLoginBtn type="submit">Login</StyledLoginBtn>
        </ContentDiv>

      </div>
    </MainDiv>
  )
}

export default Login
