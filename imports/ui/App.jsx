import React, { Component } from 'react';
 
import Snap from './Snap.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getSnaps() {
    return [
      { _id: 1, text: 'This is snap 1' },
      { _id: 2, text: 'This is snap 2' },
      { _id: 3, text: 'This is snap 3' },
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
