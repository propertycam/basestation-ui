import React, { Component } from 'react';
 
import Snap from './Snap.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getSnaps() {
    return [
      { _id: 1, src: 'snaps/00001.jpg' },
      { _id: 2, src: 'snaps/00002.jpg' },
      { _id: 3, src: 'snaps/00003.jpg' },
    ];
  }
 
  renderSnaps() {
    return this.getSnaps().map((snap) => (
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
