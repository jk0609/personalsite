import React from 'react';
import TextSection from './components/TextSection';

// TODO: DEV ONLY
let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const AboutMe = () => (
  <>
    <h2 className="section-title">About Me</h2>
    <TextSection sectionTitle="text-section-title" sectionText={loremIpsum} />
    <TextSection sectionTitle="text-section-title" sectionText={loremIpsum} />
    <TextSection sectionTitle="text-section-title" sectionText={loremIpsum} />
    <TextSection sectionTitle="text-section-title" sectionText={loremIpsum} />
  </>
);

export default AboutMe;
