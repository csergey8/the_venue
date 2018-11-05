import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div style={{
        height: "1500px",
        backgroundColor: "cornflowerblue"
      }}>
        <Header />
      </div>
    );
  }
}

export default App;
