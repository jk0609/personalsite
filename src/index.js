import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import PageWrapper from './views/PageWrapper/PageWrapper.jsx';

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
