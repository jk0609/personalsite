import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2f2f2f;
    color: #fff;
    margin: 0;
  }

  a {
    border-bottom: 1.5px solid transparent;
    transition: border-color 0.1s linear;
    font-size: 1.3em;
    text-decoration: none;
    color: #fff;

    :hover {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
