import React  from 'react';
import styled from 'styled-components';
import './Hero.css';
import PokeButton from '../PokeButton/PokeButton';
import { HeroWave } from '../../assets/icons/heroWave';

const pikachuImg = require.context('../../assets', true);

const Hero = () => {
  return (
    <div id="home">
    <HeaderInHero/>

      <div className="home">
        
        <div className="homeImg">
          <img
            
            src={pikachuImg('./heroPikachu.png')}
            alt="Pikachu"
            className="homeImgPikachu"
          ></img>
        </div>

        <div id="home" className="homeWelcome">
          <h1>Welcome to Pokedex</h1>
          <p>Join our comunity to find Pokémon's news</p>
        </div>
      </div>

      <div className="heroWave">  
        <HeroWave size="64"/>
      </div>
      
      <div className='heroButtonBox'>
        <PokeButton>View more</PokeButton>
      </div>
    </div>
  );
};

export default Hero;


const HeaderInHero = styled.div`
  
  display:none;

  @media (min-width: 768.1px) {
      display: flex;
      width: 100%;
      height: 50px;
}
`;
  