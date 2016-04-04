import React, { createClass, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const { string } = PropTypes;

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
      title,
      src,
      link,
      description,
      aspectRatio
    } = this.props;

    const {
      ready,
      firstLoad
    } = this.state;

    const img = this.getImgOrPlaceholder({ ready, firstLoad, aspectRatio, src });

    return (
      <figure>
        {link ? <Link to={link}>{img}</Link> : img}
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
        <div className={classNames('placeholder', {loading: !ready}, aspectRatio)}></div>
        <img src={src} />
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
    title: string,
    src: string,
    link: string,
    description: string,
    aspectRatio: string
  }
});

export default Figure;
