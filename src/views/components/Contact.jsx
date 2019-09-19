import React, { useState } from 'react';
import StyledContactWrapper from '../styledComponents/StyledContactWrapper';

import { ReactComponent as Github } from '../../sharedResources/assets/github.svg';
import { ReactComponent as LinkedIn } from '../../sharedResources/assets/linkedin.svg';
import { ReactComponent as Gmail } from '../../sharedResources/assets/gmail.svg';
import { ReactComponent as Arrow } from '../../sharedResources/assets/arrow.svg';
import { ReactComponent as Resume } from '../../sharedResources/assets/cv.svg';

export const Contact = () => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <StyledContactWrapper className={isOpen ? 'open' : 'closed'}>
      <div className="arrow-container">
        <Arrow
          className={isOpen ? 'close-arrow' : 'open-arrow'}
          onClick={() => toggleOpen(!isOpen)}
        />
      </div>
      <Github />
      <LinkedIn />
      <Gmail />
      <Resume />
    </StyledContactWrapper>
  );
};

export default Contact;
