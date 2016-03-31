import _ from 'lodash';
import React, { PropTypes } from 'react';
import Figure from '../components/Figure';
import { projects } from '../data';

const {
  object
} = PropTypes;

const Project = ({ params: { id } }) => {

  const {
    title,
    description,
    items
  } = _.find(projects, _.matchesProperty('id', id));

  return (
    <article>
      <header>
        <figure><img src='/img/portfolio.jpg'/></figure>
      </header>
      <div className='content'>
        <h2>{title}</h2>
        <main>
        {_.map(items, ({ description, img }) =>
           <Figure
             key={img}
             description={description}
             img={img}
           />
        )}
        </main>
      </div>
    </article>
  );
};

Project.propTypes = {
  params: object
};

export default Project;
