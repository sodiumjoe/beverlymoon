import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { string } = PropTypes;

const Figure = ({ title, img, link, description }) => (
  <figure>
    {link ? (
      <Link to={link}>
        <img src={img}/>
      </Link>
    ) : <img src={img}/>}
    <figcaption>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </figcaption>
  </figure>
);

Figure.propTypes = {
  title: string,
  img: string,
  link: string,
  description: string
};

export default Figure;
