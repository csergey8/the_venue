import React from 'react';
import Carusel from './Carusel';
import TimeUntil from './TimeUntil';

export default function Featured() {
  return (
    <div style={{
      position: 'relative'
    }}>

      <Carusel />

      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>

      <TimeUntil />
    </div>
  )
}
