import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2f2f2f;
    color: #fff;
    margin: 0;
  }

  .hidden {
    visibility: hidden;
  }
`;

export default GlobalStyle;
