import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { usePrevious } from '../../sharedResources/hooks';
import { OverlayScrollbarsComponent as OverlayScrollbar } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

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
  }, [props.location.pathname]); // eslint-disable-line

  return (
    <>
      <Masthead />
      <OverlayScrollbar className="os-theme-light">
        <Route
          render={({ location }) => (
            // https://blog.etch.team/react-page-transitions-make-your-website-feel-native-bf2804b011dc
            // CSSTransition rerenders and triggers animations only when the key changes, aka location.pathname.
            <StyledContentWrapper direction={direction}>
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames="slide"
                  timeout={{ enter: 800, exit: 400 }}
                >
                  <div className="slide">
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route exact path="/" component={LandingPage} />
                          <Route exact path="/about" component={About} />
                          <Route
                            exact
                            path="/portfolio"
                            component={Portfolio}
                          />
                        </Switch>
                      )}
                    />
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </StyledContentWrapper>
          )}
        />
        <Contact />
      </OverlayScrollbar>
    </>
  );
};

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array,
  location: PropTypes.object
};

export default withRouter(PageWrapper);
