import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Snap extends Component {
  render() {
    return (
      <img src={this.props.snap.src}/>
    );
  }
}
 
Snap.propTypes = {
  // This component gets the snap to display through a React prop.
  // We can use propTypes to indicate it is required
  snap: PropTypes.object.isRequired,
};
