import _ from 'lodash';
import React, { PropTypes } from 'react';
import Figure from '../components/Figure.jsx';
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
    <div>
      <h2>{title}</h2>
      <main>
        {_.map(items, ({ description, img }) =>
           <Figure
             key={img}
             description={description}
             src={img}
           />
        )}
      </main>
    </div>
  );
};

Project.propTypes = {
  params: object
};

export default Project;
