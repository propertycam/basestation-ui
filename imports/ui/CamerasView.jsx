import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Cameras } from '../api/cameras.js';
import Camera from './Camera.jsx';
 
// App component - represents the whole app
class CamerasView extends Component {
 
  renderCameras() {
    return this.props.cameras.map((camera) => (
      <Camera key={camera._id} camera={camera} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>CamerasView</h1>
        </header>
        <ul>
          {this.renderCameras()}
        </ul>
      </div>
    );
  }
}

CamerasView.propTypes = {
  cameras: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    //cameras: Cameras.find({}).fetch(),
    cameras: Cameras.find({}, { sort: { createdAt: -1}}).fetch(),
  };
}, CamerasView);

