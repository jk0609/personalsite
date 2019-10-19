import styled from 'styled-components';

export default styled.div`
  // Transition Styles
  .slide {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2em;
  }

  .slide-enter {
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
    transform: translate3d(0, 0, 0);
  }

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
