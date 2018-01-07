import {
  isEmpty,
  map,
  reject
} from 'lodash';
import classNames from 'classnames';
import { Link } from 'react-router';
import React, { createClass, PropTypes } from 'react';
import Logo from '../components/Logo.jsx';
import NavLink from '../components/NavLink.jsx';
import { SOCIAL_LINKS, NAV_LINKS } from '../constants';

const getTopPath = pathname => reject(pathname.split('/'), isEmpty)[0] || '';

const {
  any,
  object
} = PropTypes;

const App = createClass({
  render() {
    const { location: { pathname }, children } = this.props;
    const { isActive } = this.state;
    const topPath = getTopPath(pathname);
    const navLinks = map(NAV_LINKS, link =>
     <li key={link.title}><NavLink {...link} onClick={this.handleNavClick}/></li>
    );
    return (
      <div id='root' className={classNames({ 'menu-open': isActive })}>
        <nav id='mobile-nav'>
          <ul className='nav-links'>
            {navLinks}
          </ul>
        </nav>
        <nav id='nav'>
          <Link id='logo' to='/'>
            <Logo className={topPath}/>
          </Link>
          <ul className={classNames('nav-links', topPath)}>
            {navLinks}
          </ul>
          <button
            id='mobile-nav-button'
            className={classNames('hamburger', { 'is-active': isActive }, topPath)}
            onClick={() => this.setState({ isActive: !isActive })}
          >
            <span>toggle menu</span>
          </button>
        </nav>
        {children}
        <footer>
          <ul className='social'>
            {map(SOCIAL_LINKS, ({ href, title, src }) => <li className={title} key={title}><a title={title} href={href}><img src={src}/></a></li>)}
          </ul>
          <section className='contact'>
            <p>Copyright &copy; 2016 &bull; Beverly Moon</p>
            <span>
              <address>Portland, Oregon</address>
            </span>
          </section>
        </footer>
      </div>
    );
  },
  getInitialState: () => ({ isActive: false }),
  handleNavClick() {
    this.setState({ isActive: false });
  },
  propTypes: {
    children: any,
    location: object
  }
});

export default App;
