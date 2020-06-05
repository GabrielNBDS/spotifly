import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #121212;
    color: #1ECF5F;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #1ECF5F;
  }

  button, a {
    cursor: pointer;
  }
`;
