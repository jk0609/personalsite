import React, { useState } from 'react';
import Slider from '../../sharedResources/components/Slider';
import StyledAboutWrapper from './StyledAboutWrapper';
import TextSection from './components/TextSection';
import Skills from './components/Skills';
import PaginationDots from './components/PaginationDots';
import { ReactComponent as Arrow } from '../../sharedResources/assets/arrow.svg';
import { skillsConfig, aboutText } from './aboutConfig';

const About = () => {
  const [direction, changeDirection] = useState('left');
  const [skillsIndex, changeSkillsIndex] = useState(0);

  return (
    <StyledAboutWrapper direction={direction}>
      <h2 className="section-title">About</h2>
      <div className="text-sections">
        <div className="head-shot">
          <img
            src={require('../../sharedResources/assets/placeholder.png')}
          ></img>
        </div>
        <TextSection sectionTitle="Who's this guy?" sectionText={aboutText} />
      </div>
      <div className="skills">
        <div className="skills-header">
          <button
            className="prev-arrow"
            onClick={() => {
              changeSkillsIndex(skillsIndex - 1);
              changeDirection('right');
            }}
            disabled={skillsIndex === 0}
          >
            <Arrow />
          </button>
          <div>
            <Slider transitionOn={skillsIndex} direction={direction}>
              <span>{skillsConfig[skillsIndex].name}</span>
            </Slider>
            <PaginationDots length={skillsConfig.length} active={skillsIndex} />
          </div>
          <button
            className="next-arrow"
            onClick={() => {
              changeSkillsIndex(skillsIndex + 1);
              changeDirection('left');
            }}
            disabled={skillsIndex === 2}
          >
            <Arrow />
          </button>
        </div>
        <Slider transitionOn={skillsIndex} direction={direction}>
          <Skills skills={skillsConfig[skillsIndex].skills} />
        </Slider>
      </div>
    </StyledAboutWrapper>
  );
};

export default About;
