import React, { Component } from 'react';

import Webcam from 'react-webcam';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = { errorMsg: '', height: 0, width: 0 };

    // this.updateWindowDimensions.bind(this);
  }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  // }
  
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  render() {
    // const { width, height } = this.state;

    // if (!width || !height) return null;

    const videoConstraints = {
      facingMode: { exact: "environment" },
      // width,
      // height,
      audio: false,
    };

    return (
      <Webcam
        // height={height}
        // width={width}
        videoConstraints={videoConstraints}
      />
    );
  }
}

export default App;
