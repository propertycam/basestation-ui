import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Camera extends Component {
  render() {
    return (
        <img src={this.props.camera.lastsnap}/>
    );
  }
}
 
Camera.propTypes = {
  // This component gets the camera to display through a React prop.
  // We can use propTypes to indicate it is required
  camera: PropTypes.object.isRequired,
};
