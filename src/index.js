import React from 'react';
import ReactDOM from 'react-dom';
import PageWrapper from './views/PageWrapper.jsx';

// Import CSS reset and Global Styles
import GlobalStyle from './global-styles';
import './fonts.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <PageWrapper />
  </>,
  document.getElementById('root')
);
