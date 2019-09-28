import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PageWrapper from './views/PageWrapper/PageWrapper.jsx';

// Import CSS reset and Global Styles
import GlobalStyle from './global-styles';
import './fonts.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <PageWrapper />
    </Router>
  </>,
  document.getElementById('root')
);
