import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { usePrevious } from '../../sharedResources/hooks';

import StyledContentWrapper from './components/styledComponents/StyledContentWrapper';

import Masthead from './components/Masthead';
import Contact from './components/Contact';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PageWrapper = props => {
  let paths = {
    '/': 0,
    '/about': 1,
    '/portfolio': 2
  };

  const prevPath = usePrevious(props.location.pathname);
  const [direction, changeDirection] = useState('left');

  useEffect(() => {
    let currentPath = props.location.pathname;
    paths[prevPath] > paths[currentPath]
      ? changeDirection('right')
      : changeDirection('left');
  }, [paths, prevPath, props.location.pathname]);

  return (
    <>
      <Masthead />
      <Route
        render={({ location }) => (
          <StyledContentWrapper direction={direction}>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="slide"
                timeout={{ enter: 800, exit: 400 }}
                mountOnEnter={false}
                unmountOnExit={true}
              >
                <div className="slide">
                  <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </StyledContentWrapper>
        )}
      />
      <Contact />
    </>
  );
};

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array,
  location: PropTypes.object
};

export default withRouter(PageWrapper);
