import React from 'react';
import PropTypes from 'prop-types';

import Masthead from './components/Masthead';
import Footer from './components/Footer';

const PageWrapper = props => (
  <>
    <Masthead />
    {React.Children.toArray(props.children)}
    <Footer />
  </>
);

PageWrapper.propTypes = {
  // TODO: Get this in the right shape
  children: PropTypes.array
};

export default PageWrapper;
