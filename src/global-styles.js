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
    z-index: 10;
    transform: translate3d(100%, 0, 0);
  }

  .slide-enter.slide-enter-active {
    transform: translate3d(0, 0, 0);
    transition: transform 800ms;
  }

  .slide-exit {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }

  .slide-exit.slide-exit-active {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
    transition: opacity 800ms, transform 800ms;
  }
`;

export default GlobalStyle;
