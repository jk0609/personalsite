import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StyledContentWrapper from './styledComponents/StyledContentWrapper';

import Masthead from './components/Masthead';
import Contact from './components/Contact';
import LandingPage from '../views/LandingPage';
import About from '../views/About';
import Portfolio from '../views/Portfolio';

import { CSSTransition } from 'react-transition-group';

export const PageWrapper = props => {
  const routes = [
    { path: '/', name: 'LandingPage', Component: LandingPage },
    { path: '/about', name: 'About', Component: About },
    { path: '/portfolio', name: 'Portfolio', Component: Portfolio }
  ];

  return (
    <>
      <Router>
        <Masthead />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                classNames={'slide'}
                unmountOnExit
              >
                <StyledContentWrapper className="slide">
                  <Component />
                </StyledContentWrapper>
              </CSSTransition>
            )}
          </Route>
        ))}
        {React.Children.toArray(props.children)}
        <Contact />
      </Router>
    </>
  );
};

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array
};

export default PageWrapper;
