import React from 'react';
import About from './containers/About.jsx';
import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import Portfolio from './containers/Portfolio.jsx';
import Project from './containers/Project.jsx';
import NotFound from './containers/NotFound.jsx';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

export default env => {
  const history = env === 'server' ? createMemoryHistory() : useScroll(() => browserHistory)();
  return function Routes () {
    return (
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='portfolio' component={Portfolio}>
            <Route path=':id' component={Project} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  };
};
