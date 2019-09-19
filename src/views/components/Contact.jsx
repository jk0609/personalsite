import React, { useState } from 'react';
import StyledContactWrapper from '../styledComponents/StyledContactWrapper';

import { ReactComponent as GithubIcon } from '../../sharedResources/assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../sharedResources/assets/linkedin.svg';
import { ReactComponent as GmailIcon } from '../../sharedResources/assets/gmail.svg';
import { ReactComponent as ArrowIcon } from '../../sharedResources/assets/arrow.svg';

export const Contact = () => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <StyledContactWrapper className={isOpen ? 'open' : 'closed'}>
      <div className="arrow-container">
        <ArrowIcon
          className={isOpen ? 'close-arrow' : 'open-arrow'}
          onClick={() => toggleOpen(!isOpen)}
        />
      </div>
      <GithubIcon alt="Github" />
      <LinkedinIcon />
      <GmailIcon />
    </StyledContactWrapper>
  );
};

export default Contact;
