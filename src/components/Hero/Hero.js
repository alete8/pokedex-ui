import React from 'react';
import './Hero.css';

const pikachuImg = require.context('../../assets', true);

const Hero = () => {
  return (
    <div>
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
        <button className="homeButton">View more</button>
      </div>
    </div>
    </div>
  );
};

export default Hero;
