import {
  find,
  isNull,
  map,
  matchesProperty
} from 'lodash';
import React, { createClass, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Figure from '../components/Figure.jsx';
import LightBox from '../components/LightBox.jsx';
import { projects } from '../data';

const {
  object
} = PropTypes;

const Project = createClass({

  render() {

    const { params: { id } } = this.props;
    const { selectedItemIndex } = this.state;
    const {
      title,
      items,
      lead,
      content
    } = find(projects, matchesProperty('id', id));
    const selectedItem = !isNull(selectedItemIndex) && items[selectedItemIndex];
    const onClickNext = selectedItemIndex === items.length -1
      ? null
      : () => this.selectItemIndex(selectedItemIndex + 1);
    const onClickPrev = selectedItemIndex === 0
      ? null
      : () => this.selectItemIndex(selectedItemIndex - 1);
    const getMarkup = () => ({ __html: content });

    return (
      <div>
        <div className='text-content-container'>
          <h3>{title}</h3>
          <div className='text-content'>
            <p className='lead'>{lead}</p>
            <span dangerouslySetInnerHTML={getMarkup()}></span>
          </div>
        </div>
        <main>
          {map(items, (item, index) =>
             <Figure
               key={item.src}
               onClick={() => this.selectItemIndex(index)}
               {...item}
             />
          )}
        </main>
        { selectedItem
          ? (
            <LightBox
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
              onClose={() => this.selectItemIndex(null)}
            >
              <ReactCSSTransitionGroup
                transitionName='lightbox-img'
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Figure
                  key={selectedItemIndex}
                  {...selectedItem}
                />
              </ReactCSSTransitionGroup>
            </LightBox>
            )
          : null
        }
      </div>
    );
  },

  selectItemIndex(index) {
    this.setState({ selectedItemIndex: index });
  },

  getInitialState: () => ({ selectedItemIndex: null }),

  propTypes: {
    params: object
  }

});

export default Project;
