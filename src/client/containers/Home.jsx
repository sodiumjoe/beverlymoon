import React from 'react';
import Figure from '../components/Figure.jsx';

const Home = () => (
  <article>
    <header>
      <figure><img src='/img/home2.jpg'/></figure>
    </header>
    <div className='content'>
      <section className='lead'>
        <h2>I&rsquo;m a Creative Director for <a href='http://cincodesign.com'>Cinco&nbsp;Design</a>.</h2>
        <p>My passion is for curating experiences through products and invoking beauty in everyday things.</p>
        <p>Always curious, I&rsquo;m looking for refreshing new projects and like-minded individuals to collaborate with.</p>
      </section>
      <main>
        <Figure
          link='/about'
          img='/img/about.jpg'
          title='About'
          description='Some stuff about me'
        />
        <Figure
          link='/portfolio'
          img='/img/portfolio.jpg'
          title='Portfolio'
          description="Some cool shit i've done"
        />
      </main>
    </div>
  </article>
);

export default Home;
