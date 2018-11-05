import React from 'react';
import Carusel from './Carusel';

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
    </div>
  )
}
