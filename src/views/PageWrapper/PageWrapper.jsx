import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StyledContentWrapper from './components/styledComponents/StyledContentWrapper';

import Masthead from './components/Masthead';
import Contact from './components/Contact';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PageWrapper = props => (
  <Router>
    <Masthead />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="slide"
            timeout={{ enter: 800, exit: 400 }}
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <StyledContentWrapper className="slide">
              <Switch location={location}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            </StyledContentWrapper>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
    {React.Children.toArray(props.children)}
    <Contact />
  </Router>
);

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array
};

export default PageWrapper;
