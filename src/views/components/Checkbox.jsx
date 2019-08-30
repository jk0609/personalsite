import React from 'react';

const Checkbox = ({
  isChecked = false,
  label = null,
  isDisabled = false,
  name = ''
}) => (
  <label className="checkbox-input-label" htmlFor={name}>
    <input
      className="checkbox-input"
      type="checkbox"
      id={name}
      checked={isChecked}
      disabled={isDisabled}
    />
    {label ? <span>{label}</span> : null}
  </label>
);

export default Checkbox;
