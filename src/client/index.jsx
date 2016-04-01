import React from 'react';
import { render } from 'react-dom';
import getRoutes from './Routes';

const renderApp = Routes => {
  render(<Routes />, document.getElementById('app'));
};

if (module.hot) {
  require('./styles.less');
  module.hot.accept('./Routes', () => {
    require('./styles.less');
    renderApp(getRoutes());
  });
}

renderApp(getRoutes());
