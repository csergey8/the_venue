import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venue_nfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div style={{
        height: "1500px",
        backgroundColor: "cornflowerblue"
      }}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
