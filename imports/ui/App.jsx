import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

import EventsView from './EventsView.jsx';
import CamerasView from './CamerasView.jsx';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Cameras</Tab>
          <Tab>Events</Tab>
        </TabList>
        <TabPanel><CamerasView /></TabPanel>
        <TabPanel><EventsView /></TabPanel>
      </Tabs>
    );
  }
}




