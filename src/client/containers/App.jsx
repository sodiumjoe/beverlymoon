import _ from 'lodash';
import { Link } from 'react-router';
import React, { PropTypes } from 'react';

const NAV_LINKS = [
  { href: '/', title: 'home' },
  { href: '/about', title: 'about' },
  { href: '/projects', title: 'projects' },
  { href: '/portfolio', title: 'portfolio' }
];

const SOCIAL_LINKS = [
  { href: 'https://twitter.com/beverlymoon', title: 'twitter', src: '/img/twitter.svg' },
  { href: 'https://instagram.com/beverlymoon', title: 'instagram', src: '/img/instagram.svg' },
  { href: 'https://www.facebook.com/beverly.n.moon', title: 'facebook', src: '/img/facebook.svg' },
  { href: 'https://pinterest.com/beverlymoon', title: 'pinterest', src: '/img/pinterest.svg' },
  { href: 'mailto:beverly@beverlymoon.com', title: 'email', src: '/img/email.svg' }
];

const getClass = pathname => _.reject(pathname.split('/'), _.isEmpty)[0];

const App = ({ children, location }) => (
  <div className={`root ${getClass(location.pathname)}`}>
    <nav id='nav'>
      <Link id='logo' to='/'>
        <span className='first'>Beverly</span>
        <span className='last'>Moon</span>
      </Link>
      <ul id='nav-links'>
        {_.map(NAV_LINKS, ({ href, title }) => <li key={title}><Link to={href}>{title}</Link></li>)}
        <li><Link className='button' to='/'>Contact</Link></li>
      </ul>
    </nav>
    <div className='content'>{children}</div>
    <footer>
      <ul className='social'>
        {_.map(SOCIAL_LINKS, ({ href, title, src }) => <li className={title} key={title}><a title={title} href={href}><img src={src}/></a></li>)}
      </ul>
      <address>
        3027 Southeast Ankeny Street, Portland Oregon
      </address>
    </footer>
  </div>
);

const {
  any,
  object
} = PropTypes;

App.propTypes = {
  children: any,
  location: object
};

export default App;
