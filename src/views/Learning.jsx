import React from 'react';
import Checklist from './components/Checklist';

const items = [
  { label: 'React', checked: true },
  { label: 'React Redux', checked: true },
  { label: 'VueJS', checked: false }
];

const Learning = () => (
  <>
    <h2 className="section-title">Learning</h2>
    <div className="checklist-container">
      <Checklist title="Checklist 1" items={items} />
      <Checklist title="Checklist 2" items={items} />
    </div>
  </>
);

export default Learning;
