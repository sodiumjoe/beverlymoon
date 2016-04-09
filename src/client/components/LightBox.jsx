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
      onClickNext,
      onClickPrev,
      onClose
    } = this.props;

    return (
      <Portal
        portalId='lightbox'
        className='lightbox'
        leaveTimeout={300}
        ref={c => this.portal = c}
        onClick={onClose}
      >
        <div
          className='lightbox-content'
          onClick={e => e.stopPropagation()}
        >
          {children}
          <button
            className='close-button'
            onClick={onClose}
          >
            <span>close</span>
          </button>
          { onClickPrev ? (
            <button
              className='prev-button'
              onClick={onClickPrev}
            >
              <span>previous</span>
            </button>
          ) : null }
          { onClickNext ? (
            <button
              className='next-button'
              onClick={onClickNext}
            >
              <span>next</span>
            </button>
          ) : null }
        </div>
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
    this.portal.root.classList.add('fadeout');
  },

  propTypes: {
    children: any,
    onClickNext: func,
    onClickPrev: func,
    onClose: func
  }

});

export default LightBox;
