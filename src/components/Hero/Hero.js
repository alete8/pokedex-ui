import React from 'react';
import styled from 'styled-components';

import PokeButton from '../PokeButton/PokeButton';
import HeroPikachu from '../../assets/heroPikachu.png';
import { HeroWave } from '../../assets/icons/heroWave';

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContentContainer>
        <HeroImageContainer>
          <HeroImage src={HeroPikachu} alt="Pikachu"></HeroImage>
        </HeroImageContainer>
        <HeroContent>
          <HeroTitle>Welcome to Pokedex</HeroTitle>
          <HeroSubTitle>Join our comunity to find Pokémon's news</HeroSubTitle>
          <PokeButton>View more</PokeButton>
        </HeroContent>
      </HeroContentContainer>
      <WaveContainer>
        <HeroWave height="150px" fill="#ffffff" />
      </WaveContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background-color: #f0f07b;
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768.1px) {
    height: 450px;
  }
`;

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-top: 24px;

  @media (min-width: 768.1px) {
    flex-direction: row;
    justify-content: end;
    margin-right: 20%;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 300px;
  position: absolute;
  top: 190px;
  z-index: 1;

  @media (min-width: 768.1px) {
    position: absolute;
    top: 0px;
    left: 125px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.span`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin: 12px 0px;
`;

const HeroSubTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 12px;
`;

const WaveContainer = styled.div`
  z-index: 10;
`;
