import _ from 'lodash';
import React, { createClass, PropTypes } from 'react';
import Figure from '../components/Figure.jsx';
import LightBox from '../components/LightBox.jsx';
import { projects } from '../data';

const {
  object
} = PropTypes;

const Project = createClass({
  render() {

    const {
      params: {
        id
      }
    } = this.props;

    const { selectedItemIndex } = this.state;

    const {
      title,
      items
    } = _.find(projects, _.matchesProperty('id', id));

    const selectedItem = !_.isNull(selectedItemIndex) && items[selectedItemIndex];

    return (
      <div>
        <h2>{title}</h2>
        <main>
          {_.map(items, (item, index) =>
             <Figure
               key={item.src}
               onClick={() => this.selectItem(index)}
               {...item}
             />
          )}
        </main>
        { selectedItem
          ? (
            <LightBox onClose={() => this.selectItem(null)}>
              <Figure {...selectedItem}/>
            </LightBox>
            )
          : null
        }
      </div>
    );
  },

  selectItem(index) {
    this.setState({ selectedItemIndex: index });
  },

  getInitialState: () => ({ selectedItemIndex: null }),

  propTypes: {
    params: object
  }

});

export default Project;
