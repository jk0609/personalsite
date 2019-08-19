import React from 'react';
import StyledTextSectionWrapper from '../styledComponents/StyledTextSectionWrapper';

export const TextSection = ({ sectionTitle, sectionText }) => (
  <StyledTextSectionWrapper className="text-section">
    <div className="text-section-title">
      <h3>{sectionTitle}</h3>
    </div>
    <div>
      <p>{sectionText}</p>
    </div>
  </StyledTextSectionWrapper>
);

export default TextSection;
