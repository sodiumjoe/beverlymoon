import React, { PropTypes } from 'react';
import Figure from './Figure.jsx';

const {
  string
} = PropTypes;

const Header = props => (
  <header>
    <Figure
      {...props}
      aspectRatio='header'
    />
  </header>
);

Header.propTypes = {
  src: string
};

export default Header;
