import React, { useState } from 'react';

import StyledPortfolioItemWrapper from '../styledComponents/StyledPortfolioItemWrapper';

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
          src={require('../../sharedResources/assets/placeholder.png')}
          alt="alt text"
        />
        <div className="portfolio-item-links">
          <button>Github</button>
        </div>
        {/* live site and github buttons */}
        {/* stack icons */}
        <p className="portfolio-item-stack">JS | Node | MySQL</p>
      </div>
      <div className="portfolio-item-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledPortfolioItemWrapper>
  );
};

export default PortfolioItem;
