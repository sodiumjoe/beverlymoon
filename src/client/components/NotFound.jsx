import _ from 'lodash';
import React from 'react';
import { NAV_LINKS } from '../constants';
import NavLink from '../components/NavLink.jsx';

const NotFound = () => (
  <article>
    <header>
      <figure>
        <div className='placeholder-container'>
          <div className='placeholder header'></div>
        </div>
      </figure>
    </header>
    <div className='content'>
      <h2>Sorry, didn't find anything here.</h2>
      <main>
        <ul className='nav-links not-found'>
          {_.map(NAV_LINKS, link => <li key={link.title}>
            <NavLink {...link}/>
          </li>)}
        </ul>
      </main>
    </div>
  </article>
);

export default NotFound;
