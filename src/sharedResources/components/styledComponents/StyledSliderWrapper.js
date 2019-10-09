import styled from 'styled-components';

export default styled.div`
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
