import React from 'react';
import { render } from 'react-dom';
import About from './containers/About';
import App from './containers/App';
import Home from './containers/Home';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

browserHistory.listen(location => setTimeout(() => location.action !== 'POP' && window && window.scrollTo(0, 0)));

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      {/*
      <Route path='portfolio/:id' component={Portfolio} />
      */}
    </Route>
  </Router>,
  document.getElementById('app')
);
