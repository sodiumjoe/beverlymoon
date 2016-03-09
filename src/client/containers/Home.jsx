import React from 'react';

const Home = () => {
  return (
    <div>
      <header className='jumbo'>
        <h3>Creative Director at Cinco Design</h3>
        <p>I draw circles and squares all day long.</p>
      </header>
      <section>
        <h2>I&rsquo;m a senior product experience designer for Cinco Design.</h2>
        <p>My passion is for curating experiences through products and invoking beauty in everyday things.</p>
        <p>Always curious, I&rsquo;m looking for refreshing new projects and like-minded individuals to collaborate with.</p>
      </section>
      <section className='cards'>
        <div className='card'>
          <img src='/img/img.jpg'/>
          <h4>About</h4>
          <p>Some stuff about me</p>
          <a href='/'> Learn more &rarr;</a>
        </div>
        <div className='card'>
          <img src='/img/img.jpg'/>
          <h4>Projects</h4>
          <p>Some cool shit I did</p>
          <a href='/'> Learn more &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
