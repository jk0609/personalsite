import React from 'react';

const Checkbox = ({ isChecked = false, label = null, name = '' }) => (
  <label className="checkbox-input-label" htmlFor={name}>
    <input
      className="checkbox-input"
      type="checkbox"
      id={name}
      checked={isChecked}
      disabled={isChecked}
      readOnly
    />
    {label ? <span>{label}</span> : null}
  </label>
);

export default Checkbox;
