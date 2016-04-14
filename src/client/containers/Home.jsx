import React from 'react';
import Figure from '../components/Figure.jsx';
import Page from '../components/Page.jsx';

const Home = () => (
  <Page headerImgSrc='/img/home2.jpg'>
    <section className='lead'>
      <h2>I&rsquo;m a Creative Director for <a href='http://cincodesign.com'>Cinco&nbsp;Design</a>.</h2>
      <p>My passion is for curating experiences through products and invoking beauty in everyday things.</p>
      <p>Always curious, I&rsquo;m looking for refreshing new projects and like-minded individuals to collaborate with.</p>
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
