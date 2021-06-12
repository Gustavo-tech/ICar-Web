import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #D90B1C;
    --white: #FBF4F4;
    --black: #202731;
    --gray: #CABAAB;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle;
