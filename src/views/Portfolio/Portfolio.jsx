import React from 'react';

import StyledPortfolioWrapper from './StyledPortfolioWrapper';
import PortfolioItem from './components/PortfolioItem';

// Dev only
const title = 'Title';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Portfolio = () => (
  <StyledPortfolioWrapper>
    <h2 className="section-title">Portfolio</h2>
    <div className="portfolio-items-container">
      <PortfolioItem title={title} description={description} />
      <PortfolioItem title={title} description={description} />
    </div>
  </StyledPortfolioWrapper>
);

export default Portfolio;
