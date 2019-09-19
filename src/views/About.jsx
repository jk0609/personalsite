import React from 'react';
import TextSection from './components/TextSection';

// TODO: DEV ONLY
let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let aboutText = {
  firstSection:
    "I'm a web developer specializing in React and Javascript. I enjoy building quality web applications that solves my clients' problems, and luckily I'm pretty good at it. Seattle, WA is where I spend my time and I'm always available if someone needs interesting work done well."
};

const About = () => (
  <>
    <h2 className="section-title">About</h2>
    <div className="text-sections">
      <TextSection
        sectionTitle="Who's this guy?"
        sectionText={aboutText.firstSection}
      />
      <TextSection sectionTitle="What's he enjoy?" sectionText={loremIpsum} />
    </div>
  </>
);

export default About;
