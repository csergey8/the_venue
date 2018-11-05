import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
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
      </div>
    );
  }
}

export default App;
