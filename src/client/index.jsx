import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Home from './containers/Home';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
