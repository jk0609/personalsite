import React, { useState, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';

import StyledAboutWrapper from './StyledAboutWrapper';
import TextSection from './components/TextSection';
import Skills from './components/Skills';
import PaginationDots from './components/PaginationDots';
import { ReactComponent as Arrow } from '../../sharedResources/assets/arrow.svg';
import { skillsConfig } from './skillsConfig';

// TODO: DEV ONLY
let aboutText = {
  firstSection:
    "I'm a web developer specializing in React and Javascript. I enjoy building quality web applications that solves my clients' problems, and luckily I'm pretty good at it. Seattle, WA is where I spend my time and I'm always available if someone needs interesting work done well."
};

const About = () => {
  const [transitionX, changeTransitionX] = useState('-100%');
  const [skillsIndex, changeSkillsIndex] = useState(0);

  const Transition = posed.div({
    enter: {
      x: '0',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 500
      }
    },
    exit: {
      x: transitionX,
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 500
      }
    }
  });

  return (
    <StyledAboutWrapper>
      <h2 className="section-title">About</h2>
      {/* Headshot */}
      <div className="text-sections">
        <TextSection
          sectionTitle="Who's this guy?"
          sectionText={aboutText.firstSection}
        />
      </div>
      <div className="skills">
        <div className="skills-header">
          <button
            className="prev-arrow"
            onClick={() => {
              changeSkillsIndex(skillsIndex - 1);
              changeTransitionX('-100%');
            }}
            disabled={skillsIndex === 0}
          >
            <Arrow />
          </button>
          <div>
            <span>{skillsConfig[skillsIndex].name}</span>
            <PaginationDots length={skillsConfig.length} active={skillsIndex} />
          </div>
          <button
            className="next-arrow"
            onClick={() => {
              changeSkillsIndex(skillsIndex + 1);
              changeTransitionX('100%');
            }}
            disabled={skillsIndex === 2}
          >
            <Arrow />
          </button>
        </div>
        <PoseGroup>
          <Transition className="transition" key={skillsIndex}>
            <Skills skills={skillsConfig[skillsIndex].skills} />
          </Transition>
        </PoseGroup>
      </div>
    </StyledAboutWrapper>
  );
};

export default About;
