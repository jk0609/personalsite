import React from 'react';
import PropTypes from 'prop-types';
import StyledSkillBarWrapper from './styledComponents/StyledSkillBarWrapper';

export const SkillBar = props => (
  <StyledSkillBarWrapper percentage={props.percentage}>
    <div className="filler">
      <span className="percentage-label">{props.percentage}%</span>
    </div>
  </StyledSkillBarWrapper>
);

SkillBar.propTypes = {
  percentage: PropTypes.number
};

export default SkillBar;
