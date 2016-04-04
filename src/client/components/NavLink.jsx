import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

const {
  func,
  string
} = PropTypes;

const NavLink = ({ href, title, onClick }) => href === '/' ? (
  <IndexLink
    activeClassName='active'
    to={href}
    onClick={onClick}
    >
    {title}
  </IndexLink>
) : (
  <Link
    activeClassName='active'
    to={href}
    onClick={onClick}
    >
    {title}
  </Link>
);

NavLink.propTypes = {
  href: string,
  title: string,
  onClick: func
};

export default NavLink;
