import React, { Fragment } from 'react';
import Typewriter from 'react-typing-animation';

import StyledLandingPageWrapper from './styledComponents/StyledLandingPageWrapper';

let typedText = [
  'web developer',
  'Javascript fan',
  'tech enthusiast',
  'tabletop gamer',
  'pretty ok guy'
];

export const LandingPage = () => (
  <StyledLandingPageWrapper>
    <h1>Hi, I'm Jon.</h1>
    <h1 className="typewriter-prefix">I'm a </h1>
    <Typewriter
      className="typewriter"
      loop={true}
      cursorClassName="typewriter-cursor"
      speed={20}
    >
      {typedText.map((text, i) => (
        <Fragment key={i}>
          <span className="typewriter-header">{text}.</span>
          <Typewriter.Backspace delay={1500} count={text.length + 4} />
        </Fragment>
      ))}
    </Typewriter>
    <h1>Let's build something.</h1>
  </StyledLandingPageWrapper>
);

export default LandingPage;
