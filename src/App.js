import React, { Component } from 'react';

import Webcam from 'react-webcam';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { errorMsg: '', height: 0, width: 0 };

    this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  getUserMediaError() {
    this.setState({ errorMsg: 'Unfortunately getUserMedia function from  Stream API is not available on your device/browser. If using iOS, try the app with Safari.' });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    const { width, height } = this.state;

    if (!width || !height) return null;

    const videoConstraints = {
      facingMode: { exact: "environment" },
      width,
      height,
      audio: false,
      onUserMediaError: this.getUserMediaError,
    };

    return (
      <span>
        { this.renderError() }
        <Webcam
          height={height}
          width={width}
          videoConstraints={videoConstraints}
        />
      </span>
    );
  }
}

export default App;
