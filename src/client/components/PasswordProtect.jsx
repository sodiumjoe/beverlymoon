import React, { PropTypes, Component } from 'react';

const { func } = PropTypes;

export default class PasswordProtect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: true,
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPrompt = this.renderPrompt.bind(this);
  }

  componentWillMount() {
    const hash = localStorage && localStorage.getItem('beverlymoon.com:pwHash');

    if (!hash) {
      return this.setState({ loading: false });
    }

    return this.checkHash(hash)
      .then(() => this.setState({
        loggedIn: true,
        loading: false
      }))
      .catch(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.input && this.input.focus();
  }

  getHash(password) {
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const msgBuffer = new TextEncoder('utf-8').encode(password);
    return crypto.subtle.digest('SHA-256', msgBuffer).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    });
  }

  checkHash(hash) {
    return fetch(`/${hash}`)
      .then(response => (console.log(response), (
        response.status === 200))
        ? null
        : Promise.reject()
      );
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.getHash(this.state.password)
      .then(hash => {
        localStorage && localStorage.setItem('beverlymoon.com:pwHash', hash);
        return hash;
      })
      .then(this.checkHash)
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
      state: { password }
    } = this;

    return (
      <div
        className='content password'
        style={{ height: window.innerHeight - 287 }}
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
