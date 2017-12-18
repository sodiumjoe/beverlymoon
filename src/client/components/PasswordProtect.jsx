import React, { PropTypes, Component } from 'react';
import shajs from 'sha.js';

const { func } = PropTypes;

export default class PasswordProtect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: false,
      password: '',
      height: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPrompt = this.renderPrompt.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.setState({ height: window.innerHeight - 287 });
    }
  //   const hash = localStorage && localStorage.getItem('beverlymoon.com:pwHash');

  //   if (!hash) {
  //     return this.setState({ loading: false });
  //   }

  //   return this.checkHash(hash)
  //     .then(() => this.setState({
  //       loggedIn: true,
  //       loading: false
  //     }))
  //     .catch(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.input && this.input.focus();
  }

  getHash(password) {
    return new shajs.sha256().update(password).digest('hex');
  }

  checkHash(hash) {
    return fetch(`/${hash}`)
      .then(response => (response.status === 200)
        ? null
        : Promise.reject()
      );
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const hash = this.getHash(this.state.password);
    // localStorage && localStorage.setItem('beverlymoon.com:pwHash', hash);
    return this.checkHash(hash)
      .then(() => this.setState({
        loggedIn: true,
        loading: false
      }))
      .catch(() => this.setState({ loading: false }));
  }

  renderPrompt() {
    const {
      handleSubmit,
      handleChange,
      state: { password, height }
    } = this;

    return (
      <div
        className='content password'
        style={{ height }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input
              type='password'
              ref={ref => this.input=ref}
              value={password}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    );
  }

  render() {
    const {
      loggedIn,
      loading
    } = this.state;

    return loading
      ? null
      : loggedIn
      ? this.props.children()
      : this.renderPrompt();
  }
}

PasswordProtect.propTypes = {
  children: func.isRequired
};
