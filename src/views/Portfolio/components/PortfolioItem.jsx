import React, { useState } from 'react';

import StyledPortfolioItemWrapper from './styledComponents/StyledPortfolioItemWrapper';

const PortfolioItem = ({ title, description }) => {
  const [isHovered, toggleHovered] = useState(false);

  return (
    <StyledPortfolioItemWrapper
      isHovered={isHovered}
      onMouseEnter={() => toggleHovered(!isHovered)}
      onMouseLeave={() => toggleHovered(!isHovered)}
    >
      <div className="portfolio-item-image">
        <img
          src={require('../../../sharedResources/assets/placeholder.png')}
          alt="alt text"
        />
        <div className={`portfolio-item-links ${isHovered ? '' : 'hidden'}`}>
          <a>Source Code</a>
          <a>Live Site</a>
        </div>
        {/* stack icons */}
      </div>
      <div className="portfolio-item-description">
        <p className="portfolio-item-stack">JS | Node | MySQL</p>
        <h2>{title}</h2>
        <p className="portfolio-item-text">{description}</p>
      </div>
    </StyledPortfolioItemWrapper>
  );
};

export default PortfolioItem;
