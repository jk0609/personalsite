import React from 'react';
import StyledTextSectionWrapper from './StyledTextSectionWrapper';

export const TextSection = ({ sectionTitle, sectionText }) => (
  <StyledTextSectionWrapper>
    <div className="title">
      <h3>{sectionTitle}</h3>
    </div>
    <div className="body">
      <p>{sectionText}</p>
    </div>
  </StyledTextSectionWrapper>
);

export default TextSection;
