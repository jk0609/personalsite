import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StyledContentWrapper from './styledComponents/StyledContentWrapper';

import Masthead from './components/Masthead';
import Contact from './components/Contact';
import LandingPage from '../views/LandingPage';
import AboutMe from '../views/AboutMe';
import Learning from '../views/Learning';
import Portfolio from '../views/Portfolio';

const PageWrapper = props => (
  <>
    <Router>
      <Masthead />
      <StyledContentWrapper>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/learning" component={Learning} />
        <Route path="/portfolio" component={Portfolio} />
      </StyledContentWrapper>
      {React.Children.toArray(props.children)}
      <Contact />
    </Router>
  </>
);

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array
};

export default PageWrapper;
