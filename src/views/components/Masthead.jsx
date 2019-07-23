import React from 'react';
import { Link } from 'react-router-dom';
import StyledMastheadWrapper from '../styledComponents/StyledMastheadWrapper';

export const Masthead = () => (
  <StyledMastheadWrapper>
    <div className="masthead-links">
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/">Home</Link>
    </div>
  </StyledMastheadWrapper>
);

export default Masthead;
