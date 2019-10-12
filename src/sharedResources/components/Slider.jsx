import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StyledSliderWrapper from './styledComponents/StyledSliderWrapper';

const SliderContainer = props => (
  <StyledSliderWrapper direction={props.direction}>
    <TransitionGroup>
      <CSSTransition
        key={props.transitionOn}
        classNames="slide"
        timeout={{ enter: 800, exit: 400 }}
      >
        <div
          className="slide"
          style={{ width: props.width ? props.width : '100%' }}
        >
          {props.children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  </StyledSliderWrapper>
);

SliderContainer.propTypes = {
  transitionOn: PropTypes.any,
  direction: PropTypes.string,
  width: PropTypes.string
};

export default SliderContainer;
