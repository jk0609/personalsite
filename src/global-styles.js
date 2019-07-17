import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    font-family: 'Titillium Web', sans-serif;
  }

  #app {
    // background-color: grey;
    height: 100%;
    min-height: 100%;
    min-width: 100%;

    & > div {
      height: 100%;
      min-height: 100%;
    }
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
