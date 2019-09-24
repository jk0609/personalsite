import React from 'react';
import SkillBar from './SkillBar';

export const Skills = props => (
  <div className={props.className}>
    {/* TODO: .map loop to make SkillBars */}
    <SkillBar percentage={props.skills[0].percentage} />
    <SkillBar percentage={props.skills[0].percentage} />
    <SkillBar percentage={props.skills[0].percentage} />
    <SkillBar percentage={props.skills[0].percentage} />
  </div>
);

export default Skills;
