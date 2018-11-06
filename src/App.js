import React, { Component } from 'react';

import Webcam from 'react-webcam';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { errorMsg: '' };
  }

  getUserMediaError() {
    this.setState({ errorMsg: 'Unfortunately getUserMedia function from  Stream API is not available on your device/browser. If using iOS, try the app with Safari.' });
  }

  renderError() {
    const { errorMsg } = this.state;

    if (!errorMsg) return null;

    return (
      <span class="error">
        { errorMsg }
      </span>
    );
  }

  render() {
    const videoConstraints = {
      facingMode: { exact: "environment" },
      height: window.innerHeight,
      width: window.innerWidth,
      audio: false,
      onUserMediaError: this.getUserMediaError,
    };

    return (
      <span>
        { this.renderError() }
        <Webcam videoConstraints={videoConstraints} />
      </span>
    );
  }
}

export default App;
