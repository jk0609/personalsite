import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Masthead from './components/Masthead';
import Footer from './components/Footer';
import App from '../App';
import AboutMe from '../views/AboutMe';
import Portfolio from '../views/Portfolio';

const PageWrapper = props => (
  <>
    <Router>
      <Masthead />
      <div>
        <Route exact path="/" component={App} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={AboutMe} />
      </div>
      {React.Children.toArray(props.children)}
      <Footer />
    </Router>
  </>
);

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array
};

export default PageWrapper;
