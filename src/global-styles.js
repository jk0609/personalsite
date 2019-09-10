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

  // Transition Styles
  .slide {
    position: absolute;
  }

  .slide-enter {
    opacity: 0;
    transform: scale(1.1) translate3d(100%, 0, 0);
  }

  .slide-enter.slide-enter-active {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
    transition: opacity 400ms, transform 400ms;
  }

  .slide-exit {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }

  .slide-exit.slide-exit-active {
    opacity: 0;
    transform: scale(0.9) translate3d(-100%, 0, 0);
    transition: opacity 400ms, transform 400ms;
  }
`;

export default GlobalStyle;
