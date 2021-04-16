import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #F0210C;
    --white: #FBF4F4;
    --black: #010101;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle;