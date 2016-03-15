import React from 'react';

const About = () => {
  return (
    <article>
      <header>
        <figure><img src='/img/portrait.jpg'/></figure>
      </header>
      <div className='content'>
        <section>
          <p>Industrial Designer at heart, Creative Director by trade.</p>

          <p>Based in Portland, Oregon, I have a deep interest in designing products that enhance people&rsquo;s experience. Curious by the everyday, new technology, and human relationship and behaviors. Inspired to make contemporary objects that refine the mundane and bring us closer together.</p>
        </section>

        <section>
          <p>Currently, I hold the position of Creative Director of Product at Cinco Design in Portland, OR. I'm responsible for directing creative initiatives and executing on Consumer Trends and Insights, Product Strategy, Product Concepts and CMF Strategies.</p>
        </section>

        <section>
          <p>Clients: Nixon, Incase, Logitech, Native, Microsoft, Dell, Intel, Pebble, Zolo</p>
        </section>
      </div>
    </article>
  );
};

export default About;
