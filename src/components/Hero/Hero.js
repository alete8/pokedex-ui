import React from 'react';
import './Hero.css';

const pikachuImg = require.context('../../assets', true);

const Hero = () => {
  return (
    <div id="home">
      <div className="home">
        
        <div className="homeImg">
          <img
            src={pikachuImg('./heroPikachu.png')}
            className="homeImgPikachu"
          ></img>
        </div>

        <div id="home" className="homeWelcome">
          <h1>Welcome to Pokedex</h1>
          <p>Join our comunity to find Pokémon's news</p>
        </div>
      </div>
      <div className="heroWave">
        
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
      
      <div className='heroButtonBox'>
        <button className="homeButton">View more</button>
      </div>
      
    </div>
  );
};

export default Hero;
