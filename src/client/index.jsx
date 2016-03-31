import React from 'react';
import { render } from 'react-dom';
import getRoutes from './Routes';

const renderApp = Routes => {
  require('./styles.less');
  render(<Routes />, document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./Routes', () => {
    renderApp(getRoutes());
  });
}

renderApp(getRoutes());
