import React from 'react';
<<<<<<< HEAD
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
=======
import styled from 'styled-components';

const Hero = () => {
  return (
    <StyledContainer>Aca vamos a desarrollar la seccion Hero</StyledContainer>
>>>>>>> f8990fcbf1d37934f66f1664b34f8e8475c734ec
  );
};

export default Hero;

const StyledContainer = styled.div`
  display: flex;
  background-color: yellow;
`;
