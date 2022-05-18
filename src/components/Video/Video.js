import React from 'react';
import styled from 'styled-components';

import { HeroWave } from '../../assets/icons/heroWave';
import PokeButton from '../PokeButton/PokeButton';
import './Video.css';

const Video = () => {
  return (
    <VideoSectionContainer id="video">
      <HeroWave height="150px" fill="white" direction="down" />
      <VideoContent>
        <VideoContainer>
          <VideoIFrame
            src="https://www.youtube.com/embed/uDIoEbbFKAY?controls=0"
            frameBorder="0"
            title="Pokemón"
          ></VideoIFrame>
        </VideoContainer>
        <VideoText>
          <span> Checkout the Official Pokémon Youtube channel</span>
          <VideoBtn href="https://www.youtube.com/c/PokemonLATAM">
            <PokeButton variant="secondary" size="lg">
              View more
            </PokeButton>
          </VideoBtn>
        </VideoText>
      </VideoContent>
      <HeroWave height="150px" fill="white" />
    </VideoSectionContainer>
  );
};

export default Video;

const VideoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #0778a5;
`;

const VideoContent = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  height:400px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex:2;
  max-width:50vw;
  height:28vw;
`;

const VideoIFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const VideoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width:30vw;
  font-size: 3vw;
  font-weight: bold;

  span {
    text-align: center;
    font-size: 3vw;
    margin-bottom:2vw;
  }
`;

const VideoBtn = styled.a`
  text-decoration: none;
`;
