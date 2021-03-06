import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venue_nfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div style={{
        height: "1500px",
        backgroundColor: "cornflowerblue"
      }}>

        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
