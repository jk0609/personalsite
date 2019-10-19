import React from 'react';
import { Link } from 'react-router-dom';
import StyledMastheadWrapper from './styledComponents/StyledMastheadWrapper';

export const Masthead = props => (
  <StyledMastheadWrapper isScrolled={props.isScrolled}>
    <div className="masthead">
      {/* TODO: Replace with left side icon/logo */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  </StyledMastheadWrapper>
);

export default Masthead;
