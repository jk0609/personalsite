import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    font-family: 'Titillium Web', sans-serif;
    background-color: #2f2f2f;
    color: #fff;
    margin: 0;
  }

  .content-body {
    display: flex;
    justify-content: center;
  }

  p,
  label {
    font-family: 'Titillium Web', sans-serif;
  }

  .hidden {
    visibility: hidden;
  }
`;

export default GlobalStyle;
