import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #BD1A05;
    --white: #F1F1F1;
    --gray: #7E8AA2;
    --blue: #263248;
    --black: #0A111F;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
  }

  input {
    outline: none;
    border: none;
  }

  button {
    border: none;
  }
`

export default GlobalStyle
