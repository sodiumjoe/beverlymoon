import React, { PropTypes } from 'react';
import Header from '../components/Header.jsx';

const {
  any,
  string
} = PropTypes;

const Page = ({ children, headerImgSrc }) => (
  <article>
    <Header src={headerImgSrc}/>
    <div className='content'>{children}</div>
  </article>
);

Page.propTypes = {
  headerImgSrc: string,
  children: any
};

export default Page;
