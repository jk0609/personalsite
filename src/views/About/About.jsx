import React, { useState } from 'react';
import posed from 'react-pose';

import StyledAboutWrapper from './StyledAboutWrapper';
import TextSection from './components/TextSection';

// TODO: DEV ONLY
let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let aboutText = {
  firstSection:
    "I'm a web developer specializing in React and Javascript. I enjoy building quality web applications that solves my clients' problems, and luckily I'm pretty good at it. Seattle, WA is where I spend my time and I'm always available if someone needs interesting work done well."
};

// 3 different states
// store in array, clicking right moves index up by 1 clicking left moves index down 1
// clicking right triggers right translate and vice versa
// can rotate between them

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const About = () => {
  const [skillsIndex, changeSkillsIndex] = useState(true);

  return (
    <StyledAboutWrapper>
      <h2 className="section-title">About</h2>
      <div className="text-sections">
        <TextSection
          sectionTitle="Who's this guy?"
          sectionText={aboutText.firstSection}
        />
        <TextSection sectionTitle="What's he enjoy?" sectionText={loremIpsum} />
      </div>
      <div className={'skills'}>
        <button onClick={() => changeSkillsIndex(!skillsIndex)}>Next</button>
        <Box className="skills-box" pose={skillsIndex ? 'visible' : 'hidden'}>
          {/* <p>test</p> */}
        </Box>
      </div>
    </StyledAboutWrapper>
  );
};

export default About;
