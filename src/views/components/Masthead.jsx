import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StyledMastheadWrapper from '../styledComponents/StyledMastheadWrapper';

export const Masthead = () => (
  <StyledMastheadWrapper>
    <Router>
      <div className="masthead-links">
        {/* TODO: Doesn't actually trigger a redirect */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/">Home</Link>
      </div>
    </Router>
  </StyledMastheadWrapper>
);

export default Masthead;
