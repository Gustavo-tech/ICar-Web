import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #BD1A05;
    --white: #E3E3E3;
    --gray: #7E8AA2;
    --blue: #263248;
    --black: #0A111F;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
  }
`

export default GlobalStyle;
