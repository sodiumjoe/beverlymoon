import _ from 'lodash';
import React, { PropTypes } from 'react';
import Figure from '../components/Figure.jsx';
import Page from '../components/Page.jsx';
import { projects } from '../data';

const {
  any
} = PropTypes;

const Portfolio = ({ children }) => (
  <Page headerImgSrc='/img/portfolio3.jpg'>
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
             src={_.first(items).img}
           />
          ))}
        </main>
      </div>
    )}
  </Page>
);

Portfolio.propTypes = {
  children: any
};

export default Portfolio;
