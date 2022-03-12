import React from 'react';
import { Link } from 'react-router-dom';

function Home(): JSX.Element {
  return (
    <div>
      <div>Home ....</div>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
