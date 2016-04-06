import React, { createClass, PropTypes } from 'react';
import Portal from './Portal.jsx';

const {
  any,
  func
} = PropTypes;

const LightBox = createClass({

  render() {
    const {
      children,
      onClose
    } = this.props;

    return (
      <Portal
        id='lightbox'
        onClick={onClose}
        className='lightbox'
      >
        {children}
        </Portal>
    );
  },

  componentWillMount() {
    const body = document.querySelector('body');
    this.scrollTop = body.scrollTop;
    body.style.top = `-${this.scrollTop}px`;
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
  },

  componentWillUnmount() {
    const body = document.querySelector('body');
    body.style.position = '';
    body.style.overflow = '';
    body.scrollTop = this.scrollTop;
  },

  propTypes: {
    children: any,
    onClose: func
  }

});

export default LightBox;
