import React, { createClass, PropTypes } from 'react';
import { render } from 'react-dom';

const {
  any,
  number,
  string
} = PropTypes;

const Portal = createClass({

  render: () => null,

  componentDidMount() {

    const { portalId } = this.props;

    let portalElement = document.getElementById(portalId);

    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.id = portalId;
      document.body.appendChild(portalElement);
    }

    this.portalElement = portalElement;
    this.componentDidUpdate();

  },

  componentWillUnmount() {
    setTimeout(() => {
      document.body.removeChild(this.portalElement);
    }, this.props.leaveTimeout);
  },

  componentDidUpdate() {
    this.root = render(<div {...this.props} />, this.portalElement);
  },

  getDefaultProps: () => ({ leaveTimeout: 0 }),

  propTypes: {
    children: any,
    className: string,
    leaveTimeout: number,
    portalId: string.isRequired
  }

});

export default Portal;
