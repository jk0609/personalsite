import React from 'react';
import StyledSkillBarWrapper from './styledComponents/StyledSkillBarWrapper';

export const SkillBar = props => (
  <StyledSkillBarWrapper percentage={props.percentage}>
    <div className="filler" />
  </StyledSkillBarWrapper>
);

export default SkillBar;
