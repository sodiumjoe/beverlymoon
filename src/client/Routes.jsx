import React from 'react';
import About from './containers/About.jsx';
import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import Portfolio from './containers/Portfolio.jsx';
import Project from './containers/Project.jsx';
import NotFound from './containers/NotFound.jsx';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';

export default env => {
  const history = env === 'server' ? createMemoryHistory() : browserHistory;
  history.listen && history.listen(
    location => setTimeout(() => location.action !== 'POP' && window && window.scrollTo(0, 0))
  );
  return function Routes () {
    return (
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='portfolio' component={Portfolio} />
          <Route path='portfolio/:id' component={Project} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  };
};
