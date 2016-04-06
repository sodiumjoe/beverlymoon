import _ from 'lodash';
import React, { PropTypes } from 'react';
import Figure from '../components/Figure.jsx';
import Page from '../components/Page.jsx';
import NotFound from '../components/NotFound.jsx';
import { projects } from '../data';

const {
  any,
  object
} = PropTypes;

const Portfolio = ({
  children,
  params: { id } = {}
}) => (!children || children && _.includes(_.map(projects, 'id'), id))
  ? <Page headerImgSrc='/img/portfolio3.jpg'>
      {children || (
        <div>
          <h2>Portfolio</h2>
          <main>
            {_.map(projects, ({ title, description, id, items }) => (
             <Figure
               key={id}
               title={title}
               description={description}
               link={`/portfolio/${id}`}
               src={_.first(items).src}
             />
            ))}
          </main>
        </div>
      )}
    </Page>
  : <NotFound />;

Portfolio.propTypes = {
  children: any,
  params: object
};

export default Portfolio;
