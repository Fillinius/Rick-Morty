import React from 'react';
import main from './main.png'

const Home = () => {
  return (
    <main className="main">
      <div>
        <h1 className="main-text">Rick & Morty</h1>
        <img className="main-img" src={main} alt="main"></img>
      </div>
    </main>
  );
}

export default Home;