import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';

const renderApp = Routes => {
  require('./styles.less');
  render(<Routes />, document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./routes', () => {
    const Routes = require('./routes').default;
    renderApp(Routes);
  });
}

renderApp(Routes);
