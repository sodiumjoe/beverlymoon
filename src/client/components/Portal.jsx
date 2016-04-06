import _ from 'lodash';
import React, { createClass, PropTypes } from 'react';
import { render } from 'react-dom';

const {
  any,
  string
} = PropTypes;

const Portal = createClass({

  render: () => null,

  componentDidMount() {

    const {
      id
    } = this.props;

    let portalElement = window.document.getElementById(id);

    if (!portalElement) {
      portalElement = window.document.createElement('div');
      portalElement.id = id;
      window.document.body.appendChild(portalElement);
    }

    this.portalElement = portalElement;
    this.componentDidUpdate();

  },

  componentWillUnmount() {
    window.document.body.removeChild(this.portalElement);
  },

  componentDidUpdate() {

    const {
      children,
      className
    } = this.props;

    render(
      <div {..._.omit(this.props, 'id')} className={className}>
        {children}
      </div>,
      this.portalElement
    );

  },

  propTypes: {
    children: any,
    className: string,
    id: string.isRequired
  }

});

export default Portal;
