import React from 'react';
import Page from '../components/Page.jsx';

const About = () => (
  <Page headerImgSrc='/img/about3.jpg'>
    <div className='text-content-container'>
      <h3>Industrial&nbsp;Designer at&nbsp;Heart Creative&nbsp;Director by&nbsp;Trade</h3>
      <section className='text-content'>
        <p className='lead'>Based in Portland, Oregon, I design products that enhance experiences for people.</p>
        <p>I enjoy exploring how new technology can inform everyday human behavior and relationships and I strive to make contemporary objects that refine the mundane and bring us closer together.</p>
        <p>I'm a Creative Director of Product at <a href="http://cincodesign.com">Cinco Design</a> in Portland, OR. That means I'm responsible for directing creative initiatives and executing on Consumer Trends and Insights, Product Strategy, Product Concepts and CMF Strategies.</p>
        <p>Some of my clients include: Nixon, Incase, Logitech, Native, Microsoft, Dell, Intel, Pebble, Zolo.</p>
      </section>
    </div>
  </Page>
);

export default About;
