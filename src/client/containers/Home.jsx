import React from 'react';
import Figure from '../components/Figure.jsx';
import Page from '../components/Page.jsx';

const Home = () => (
  <Page headerImgSrc='/img/home2.jpg'>
    <section className='hero'>
      <h2>Elevating experiences through products<br/> & finding the beauty in everyday things.</h2>
    </section>
    <main>
      <Figure
        link='/about'
        src='/img/about.jpg'
        title='About'
        description='A quick snapshot'
      />
      <Figure
        link='/portfolio'
        src='/img/PORTFOLIO_HERO.jpg'
        title='Portfolio'
        description='A collection of my favorites'
      />
    </main>
  </Page>
);

export default Home;
