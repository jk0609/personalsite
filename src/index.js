import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import PageWrapper from './views/PageWrapper.jsx';
import Contact from './views/Contact';
import AboutMe from './views/AboutMe';

// Import CSS reset and Global Styles
import GlobalStyle from './global-styles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <PageWrapper>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </PageWrapper>
  </>,
  document.getElementById('root')
);
