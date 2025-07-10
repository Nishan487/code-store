// src/App.js
import React from 'react';
import BookStyleStationeryPage from './BookStyleStationeryPage';
// Your main app CSS, if any

function Stationary() {
  return (
    <div className="App">
      <BookStyleStationeryPage
        initialHeadline="My Daily Log" // Optional: Set an initial headline
      >
        {/* You can still put static content here if you want */}
        <p style={{marginTop: '30px', textAlign: 'center', color: '#888'}}>
          This page is designed for quick entries under a customizable headline.
        </p>
      </BookStyleStationeryPage>

      {/* Example of another page with a different initial headline */}
      {/*
      <BookStyleStationeryPage initialHeadline="Project Alpha Brainstorm" />
      */}
    </div>
  );
}

export default Stationary;