import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Snaps } from '../api/snaps.js';

import Snap from './Snap.jsx';
 
// App component - represents the whole app
class App extends Component {
//  getSnaps() {
//    return [
//      { _id: 1, src: 'snaps/00001.jpg' },
//      { _id: 2, src: 'snaps/00002.jpg' },
//      { _id: 3, src: 'snaps/00003.jpg' },
//    ];
//  }
 
  renderSnaps() {
    return this.props.snaps.map((snap) => (
      <Snap key={snap._id} snap={snap} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Snaps</h1>
        </header>
 
        <ul>
          {this.renderSnaps()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  snaps: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    snaps: Snaps.find({}).fetch(),
  };
}, App);


