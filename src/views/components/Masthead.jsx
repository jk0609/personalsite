import React from 'react';
import { Link } from 'react-router-dom';
import StyledMastheadWrapper from '../styledComponents/StyledMastheadWrapper';

export const Masthead = () => (
  <StyledMastheadWrapper>
    <div className="masthead">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  </StyledMastheadWrapper>
);

export default Masthead;
