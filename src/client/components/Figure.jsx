import React, { createClass, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const { func, string } = PropTypes;

const loadImg = src => {
  const img = new Image();
  const promise = new Promise((resolve, reject) => {
    img.onload = () => resolve(true);
    img.onerror = reject;
  });
  img.src = src;
  return img.complete ? Promise.resolve(false) : promise;
};

const Figure = createClass({

  render() {

    const {
      aspectRatio,
      description,
      link,
      onClick,
      src,
      title
    } = this.props;

    const {
      firstLoad,
      ready
    } = this.state;

    const img = this.getImgOrPlaceholder({ aspectRatio, firstLoad, ready, src });

    return (
      <figure>
        { link
          ? (<Link onClick={onClick} to={link}>{img}</Link>)
          : onClick
            ? (<a href='javascript:void(0);' onClick={onClick}>{img}</a>)
            : img
        }
        <figcaption>
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
        </figcaption>
      </figure>
    );

  },
  getImgOrPlaceholder({ ready, aspectRatio, src }) {
    return (
      <div className='placeholder-container'>
        { ready
          ? <img src={src} />
          : <div className={classNames('placeholder', aspectRatio)}></div>
        }
      </div>
    );
  },
  getInitialState() {
    return { ready: false };
  },
  componentDidMount() {
    loadImg(this.props.src).then(this.onReady);
  },
  onReady(firstLoad) {
    this.setState({ ready: true, firstLoad });
  },
  propTypes: {
    aspectRatio: string,
    description: string,
    link: string,
    onClick: func,
    src: string,
    title: string
  }
});

export default Figure;
