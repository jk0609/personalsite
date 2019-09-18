import React from 'react';
import Checklist from './components/Checklist';
import StyledLearningWrapper from './styledComponents/StyledLearningWrapper';

const frontEndItems = [
  { label: 'HTML', checked: true },
  { label: 'CSS & CSS Prepreprocessors', checked: true },
  { label: 'AngularJS', checked: true },
  { label: 'Angular', checked: true },
  { label: 'React', checked: true },
  { label: 'React Redux', checked: true },
  { label: 'useState and useEffect hooks', checked: true },
  { label: 'VueJS', checked: false }
];

const backEndItems = [
  { label: 'Ruby on Rails', checked: true },
  { label: 'PostgreSQL', checked: true },
  { label: 'MySQL', checked: true },
  { label: 'Node.js', checked: true },
  { label: 'Express', checked: true },
  { label: 'GraphQL', checked: false },
  { label: 'Docker', checked: false },
  { label: 'AWS Deployment', checked: false },
  { label: 'MongoDB', checked: false }
];

const dataStructuresAndAlgorithms = [
  { label: 'Arrays and Dynamic Arrays', checked: true },
  { label: 'Linked Lists', checked: true },
  { label: 'Stacks and Queues', checked: true },
  { label: 'Hash Tables', checked: true },
  { label: 'Time Complexity', checked: true },
  { label: 'Binary Search', checked: true },
  { label: 'Insertion Sort', checked: true },
  { label: 'Merge Sort', checked: true },
  { label: 'Binary Trees', checked: false }
];

const languages = [
  { label: 'Javascript', checked: true },
  { label: 'Python', checked: true },
  { label: 'Ruby', checked: true },
  { label: 'C#', checked: false }
];

const Learning = () => (
  <StyledLearningWrapper>
    <h2 className="section-title">Stuff I'm Learning</h2>
    <div className="learning-text">
      <h4>What's this for?</h4>
      <p>
        It' just something I saw on another personal site that I liked. There's
        an overwhelming amount of things to learn in software and MORE. Feel
        free to use this as a list of skills. I won't claim to have mastered
        every checked item, but it does mean I've spent significant time with it
        and could use it practically given a little time to refresh myself.
      </p>
    </div>
    <div className="checklist-container">
      <Checklist title="Front End" items={frontEndItems} />
      <Checklist title="Back End and DevOps" items={backEndItems} />
      <Checklist
        title="Data Structures & Algorithms"
        items={dataStructuresAndAlgorithms}
      />
      <Checklist title="Languages" items={languages} />
    </div>
  </StyledLearningWrapper>
);

export default Learning;
