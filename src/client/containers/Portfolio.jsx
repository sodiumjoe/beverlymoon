import _ from 'lodash';
import React from 'react';
import Figure from '../components/Figure';
import { projects } from '../data';

const Portfolio = () => (
  <article>
    <header>
    <figure><img src='/img/portfolio.jpg'/></figure>
    </header>
    <div className='content'>
      <h2>Portfolio</h2>
      <main>
        {_.map(projects, ({ title, description, id, items }) =>
           <Figure
             key={id}
             title={title}
             description={description}
             link={`/portfolio/${id}`}
             img={_.first(items).img}
           />
        )}
      </main>
    </div>
  </article>
);

export default Portfolio;
