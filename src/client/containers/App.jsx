import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div>
    <nav id='nav'>
      <a id='logo' href='/'>
        <span className='first'>Beverly</span>
        <span className='last'>Moon</span>
      </a>
      <ul id='nav-links'>
        <li><a href='/'>home</a></li>
        <li><a href='/'>about</a></li>
        <li><a href='/'>projects</a></li>
        <li><a href='/'>portfolio</a></li>
        <li><a className='button' href='/'>Contact</a></li>
      </ul>
    </nav>
    <div className='content'>{children}</div>
    <footer>
      <ul className='social'>
        <li><a href='/'>twitter</a></li>
        <li><a href='/'>instagram</a></li>
        <li><a href='/'>facebook</a></li>
        <li><a href='/'>pinterest</a></li>
        <li><a href='/'>email</a></li>
      </ul>
      <address>
        3027 Southeast Ankeny Street, Portland Oregon
      </address>
    </footer>
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
