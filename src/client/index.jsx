import React from 'react';
import { render } from 'react-dom';
import About from './containers/About';
import App from './containers/App';
import Home from './containers/Home';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      {/*
      <Route path='projects/:id' component={Projects} />
      <Route path='portfolio/:id' component={Portfolio} />
      */}
    </Route>
  </Router>
), document.getElementById('root'));
