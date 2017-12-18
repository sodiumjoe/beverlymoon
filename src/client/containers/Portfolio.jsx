import {
  first,
  includes,
  map
} from 'lodash';
import React, { PropTypes } from 'react';
import Figure from '../components/Figure.jsx';
import Page from '../components/Page.jsx';
import PasswordProtect from '../components/PasswordProtect.jsx';
import NotFound from '../components/NotFound.jsx';
import { projects } from '../data';

const {
  any,
  object
} = PropTypes;

const Portfolio = ({
  children,
  params: { id } = {}
}) => (!children || children && includes(map(projects, 'id'), id))
  ? (
    <PasswordProtect>
      {() => <Page headerImgSrc='/img/PORTFOLIO_HEADER3.jpg'>
        {children || (
          <div>
            <h2>Selected Works</h2>
            <main>
              {map(projects, ({ title, description, id, items }) => (
                <Figure
                  key={id}
                  title={title}
                  description={description}
                  link={`/portfolio/${id}`}
                  src={id === 'hora' ? items[5].src : first(items).src}
                />
              ))}
            </main>
          </div>
        )}
      </Page>}
    </PasswordProtect>
  )
  : <NotFound />;

Portfolio.propTypes = {
  children: any,
  params: object
};

export default Portfolio;
