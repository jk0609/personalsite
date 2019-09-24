import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';

import StyledAboutWrapper from './StyledAboutWrapper';
import TextSection from './components/TextSection';
import Skills from './components/Skills';
import PaginationDots from './components/PaginationDots';
import { ReactComponent as Arrow } from '../../sharedResources/assets/arrow.svg';
import { skillsConfig } from './skillsConfig';

// TODO: DEV ONLY
let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let aboutText = {
  firstSection:
    "I'm a web developer specializing in React and Javascript. I enjoy building quality web applications that solves my clients' problems, and luckily I'm pretty good at it. Seattle, WA is where I spend my time and I'm always available if someone needs interesting work done well."
};

const About = () => {
  const [transitionX, changeTransitionX] = useState('100%');
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
      <div className="text-sections">
        <TextSection
          sectionTitle="Who's this guy?"
          sectionText={aboutText.firstSection}
        />
        {/* TODO: write copy */}
        <TextSection sectionTitle="What's he enjoy?" sectionText={loremIpsum} />
      </div>
      <div className="skills">
        <div className="skills-header">
          <Arrow
            className="prev-arrow"
            onClick={() => {
              changeSkillsIndex(
                skillsIndex > 0 ? skillsIndex - 1 : skillsIndex
              );
              changeTransitionX('-100%');
            }}
          />
          <div>
            <span>{skillsConfig[skillsIndex].name}</span>
            <PaginationDots length={skillsConfig.length} active={skillsIndex} />
          </div>
          <Arrow
            className="next-arrow"
            onClick={() => {
              changeSkillsIndex(
                skillsIndex < 2 ? skillsIndex + 1 : skillsIndex
              );
              changeTransitionX('100%');
            }}
          />
        </div>
        <PoseGroup>
          <Transition className="transition" key={skillsIndex}>
            {/* TODO: title section, title w/ prev/next buttons */}
            <Skills skills={[{ name: 'skills one', percentage: 20 }]} />
          </Transition>
        </PoseGroup>
      </div>
    </StyledAboutWrapper>
  );
};

export default About;
