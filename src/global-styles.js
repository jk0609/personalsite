import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #2f2f2f;
    color: #fff;
    margin: 0;
  }

  p,
  label {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .hidden {
    visibility: hidden;
  }
`;

export default GlobalStyle;
