import React, { useState } from 'react';

import Checkbox from './Checkbox';
import StyledChecklistWrapper from '../styledComponents/StyledChecklistWrapper';

const Checklist = ({ items }) => {
  const [open, toggleOpen] = useState(true);

  return (
    <StyledChecklistWrapper>
      <h2 onClick={() => toggleOpen(!open)}>Checklist Title</h2>
      <div className={open ? 'open' : ''}>
        <Checkbox
          isChecked={true}
          label="test"
          isDisabled={false}
          name="test"
        />
      </div>
    </StyledChecklistWrapper>
  );
};

export default Checklist;
