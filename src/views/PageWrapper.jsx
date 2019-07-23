import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Masthead from './components/Masthead';
import Footer from './components/Footer';
import App from '../App';
import Contact from '../views/Contact';
import AboutMe from '../views/AboutMe';

const PageWrapper = props => (
  <>
    <Router>
      <Masthead />
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
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
