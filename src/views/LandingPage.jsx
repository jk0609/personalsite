import React, { Fragment, useEffect } from 'react';
import Typewriter from 'react-typing-animation';

import StyledLandingPageWrapper from './styledComponents/StyledLandingPageWrapper';

const typedText = [
  'web developer',
  'Javascript fan',
  'tech enthusiast',
  'tabletop gamer',
  'pretty ok guy'
];

export const LandingPage = () => {
  const typewriterRef = React.createRef();

  useEffect(() => {
    // Resets typewriter text on component mount/update. Documented solution currently doesn't work, hence this workaround.
    // https://www.npmjs.com/package/react-typewriter
    typewriterRef.current.updateState({ text: [''] });
  });

  return (
    <StyledLandingPageWrapper>
      <h1>Hi, I'm Jon.</h1>
      <h1 className="typewriter-prefix">I'm a </h1>
      <Typewriter
        className="typewriter"
        loop={true}
        cursorClassName="typewriter-cursor"
        speed={20}
        ref={typewriterRef}
      >
        {typedText.map((text, i) => (
          <Fragment key={i}>
            <span className="typewriter-header">{text}.</span>
            <Typewriter.Backspace delay={800} count={text.length + 4} />
          </Fragment>
        ))}
      </Typewriter>
      <h1>Let's build something.</h1>
    </StyledLandingPageWrapper>
  );
};

export default LandingPage;
