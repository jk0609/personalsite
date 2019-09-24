import React from 'react';
import SkillBar from './SkillBar';

export const Skills = props => (
  <div className={`skill-item ${props.className}`}>
    {props.skills.map((skill, i) => (
      <React.Fragment key={i}>
        <span>{skill.name}</span>
        <SkillBar percentage={skill.percentage} />
      </React.Fragment>
    ))}
  </div>
);

export default Skills;
