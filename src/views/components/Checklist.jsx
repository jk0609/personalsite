import React from 'react';

import Checkbox from './Checkbox';
import StyledChecklistWrapper from '../styledComponents/StyledChecklistWrapper';

const generateChecklistItems = items =>
  items.map((item, i) => (
    <Checkbox
      key={i}
      isChecked={item.checked}
      label={item.label}
      // name={item.label}
      name="test"
    />
  ));

const Checklist = ({ items = [], title = '' }) => (
  <StyledChecklistWrapper>
    <h2>{title}</h2>
    {generateChecklistItems(items)}
  </StyledChecklistWrapper>
);

export default Checklist;
