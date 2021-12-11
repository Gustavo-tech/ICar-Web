import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #BD1A05;
    --white: #F1F1F1;
    --gray: #7E8AA2;
    --blue: #263248;
    --black: #0A111F;
  }

  html, body, #app {
    min-height: 100vh;
    width: 100vw;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ABABAB;
    }
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
