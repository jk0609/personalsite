import styled from 'styled-components';

export default styled.div`
  text-align: center;
  padding-bottom: 2em;
  margin: 0 20%;

  h1 {
    font-size: 4em;
    margin: 0.25em 0.5em;
  }

  .section-title {
    font-size: 2.5em;
  }

  div.text-section:nth-child(odd) {
    background: #fff;
    color: #2f2f2f;
  }

  // Transition Styles
  .slide {
    position: absolute;
    width: 60%;
  }

  .slide-enter {
    z-index: 10;
    transform: translate3d(
      ${props => (props.direction === 'left' ? '100%' : '-100%')},
      0,
      0
    );
  }

  .slide-enter.slide-enter-active {
    transform: translate3d(0, 0, 0);
    transition: transform 800ms;
  }

  .slide-exit {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }

  // prop is briefly right then changes to left
  .slide-exit.slide-exit-active {
    transform: translate3d(
      ${props => (props.direction === 'left' ? '-100%' : '100%')},
      0,
      0
    );
    opacity: 0;
    transition: opacity 800ms, transform 800ms;
  }
`;
