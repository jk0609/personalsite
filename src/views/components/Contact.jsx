import React, { useState } from 'react';
import StyledContactWrapper from '../styledComponents/StyledContactWrapper';

import { ReactComponent as GithubIcon } from '../../sharedResources/assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../sharedResources/assets/linkedin.svg';
import { ReactComponent as GmailIcon } from '../../sharedResources/assets/gmail.svg';
import { ReactComponent as ArrowIcon } from '../../sharedResources/assets/arrow.svg';

export const Contact = () => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <StyledContactWrapper
      className={isOpen ? 'open' : 'closed'}
      onClick={() => {
        toggleOpen(!isOpen);
      }}
    >
      <div className="arrow-container">
        <ArrowIcon className={isOpen ? 'close-arrow' : 'open-arrow'} />
      </div>
      <span>
        <GithubIcon />
      </span>
      <span>
        <LinkedinIcon />
      </span>
      <span>
        <GmailIcon />
      </span>
    </StyledContactWrapper>
  );
};

export default Contact;
