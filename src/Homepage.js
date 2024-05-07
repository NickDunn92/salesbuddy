import React from 'react';

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export default function myHomepage() {
  return (
    <div>
      <h1>
        Welcome to
        <Homepage />
      </h1>
    </div>
  )
}