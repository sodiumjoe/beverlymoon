import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <article>
    <header>
      <figure><img src='/img/portrait.jpg'/></figure>
    </header>
    <div className='content'>
      <section className='lead'>
        <h2>I&rsquo;m a Creative Director for <a href='http://cincodesign.com'>Cinco&nbsp;Design</a>.</h2>
        <p>My passion is for curating experiences through products and invoking beauty in everyday things.</p>
        <p>Always curious, I&rsquo;m looking for refreshing new projects and like-minded individuals to collaborate with.</p>
      </section>
      <main>
        <article>
          <Link to='/about'>
            <img src='/img/snow.jpg'/>
          </Link>
          <h3>About</h3>
          <p>Some stuff about me</p>
          <Link to='/about'>Learn more &rarr;</Link>
        </article>
        <article>
          <Link to='/portfolio'>
            <img src='/img/snow.jpg'/>
          </Link>
          <h3>Portfolio</h3>
          <p>Some cool shit i've done</p>
          <Link to='/portfolio'>Learn more &rarr;</Link>
        </article>
      </main>
    </div>
  </article>
);

export default Home;
