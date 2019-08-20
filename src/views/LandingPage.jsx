import React, { Fragment } from 'react';
import Typewriter from 'react-typing-animation';

let strings = ['test1', 'test2', 'test3'];

export const LandingPage = () => (
  <div>
    <h1>Hi, I'm Jon.</h1>
    <Typewriter loop={true} cursorClassName="typewriter-cursor">
      {strings.map((text, i) => (
        <Fragment key={i}>
          <span className="typewriter-header">{text}</span>
          <Typewriter.Backspace delay={2000} count={text.length + 1} />
        </Fragment>
      ))}
    </Typewriter>
  </div>
);

export default LandingPage;
