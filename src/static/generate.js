import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../client/Routes.jsx'

match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  console.log(renderToString(<RouterContext {...renderProps} />));
});
