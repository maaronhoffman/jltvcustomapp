import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
