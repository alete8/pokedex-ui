import React from 'react';
import styled from 'styled-components';

import { IGameboy } from '../../assets/icons/gameboy';
import { IPikachu } from '../../assets/icons/pikachu';
import { Ipokeball } from '../../assets/icons/pokeball';

const History = () => {
  return (
    <HistoryContainer >

      <h1>Pokemon History</h1>
      <HistoryAnchor id="history"/>
      <HistoryBody>
        <HistorySection color='#6dd19a' direction='left'>
          <HistoryDate color="#6dd19a">
            <HistoryIcon>
              <Ipokeball size="64" />
            </HistoryIcon>
            <h1>1980</h1>
          </HistoryDate>
          <HistoryInfoContainer>
            <HistoryInfoTitle1980>First Steps</HistoryInfoTitle1980>
            <HistoryInfoText>
              Pokémon is short for “Pocket Monsters", the original Japanese
              name. The franchise has its roots in a gaming magazine in the
              early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken
              Sugimori. Tajiri was the writer, while Sugimori was the
              illustrator.
            </HistoryInfoText>
          </HistoryInfoContainer>
        </HistorySection>
        <HistorySection color='#ee4a4a' direction='right'>
          <HistoryInfoContainer>
            <HistoryInfoTitle1996>Game Boy</HistoryInfoTitle1996>
            <HistoryInfoText>
              26 February 1996 marks the debut of the Pokémon franchise in the
              form of both those games on the Game Boy in Japan. At its heart,
              Pocket Monsters: Red and Green was a very basic Japanese
              role-playing game.
            </HistoryInfoText>
          </HistoryInfoContainer>
          <HistoryDate color="#ee4a4a">
            <HistoryIcon>
              <IGameboy size="64px" />
            </HistoryIcon>
            <h1 >1996</h1>
          </HistoryDate>
        </HistorySection>
        <HistorySection color='#ffb000' direction='left'>
          <HistoryDate color="#ffb000">
            <HistoryIcon>
              <IPikachu size="64px" />
            </HistoryIcon>
            <h1 >1998</h1>
          </HistoryDate>
          <HistoryInfoContainer>
            <HistoryInfoTitle1998>Pikachu</HistoryInfoTitle1998>
            <HistoryInfoText>
              The popularity of the anime and Yellow, I believe, led to Pikachu
              becoming the most recognizable and loved Pokémon out there. Pocket
              Monsters' success led to North America getting the games in 1998
              for the Game Boy (as Pokémon Red and Blue). These few years in the
              public saw Pokémon go from a game about a hobby to a worldwide
              phenomenon
            </HistoryInfoText>
          </HistoryInfoContainer>
        </HistorySection>
      </HistoryBody>
    </HistoryContainer>
  );
};

export default History;

const HistoryContainer = styled.section`
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 5vw;
  }
`;

const HistoryAnchor = styled.div`
  display:flex;
  position:absolute;
  margin-top: -20vw;
`;

const HistoryBody = styled.div``;

const HistorySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-top: 5%;
  width: 80vw;
  border-${({direction})=>direction}: solid;
  border-color: ${({color})=>color};
  border-width: 0.5vw;
`;

const HistoryDate = styled.div`
  display: flex;
  max-width: 15em;
  min-width: 15em;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

  h1 {
    align-self: center;
    color: ${({color})=>color};
  }
`;

const HistoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
`;

const HistoryInfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
`;

const HistoryInfoTitle1980 = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #6dd19a;
  margin-top: 5%;
`;

const HistoryInfoTitle1996 = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ee4a4a;
  margin-top: 5%;
`;

const HistoryInfoTitle1998 = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffb000;
  margin-top: 5%;
`;

const HistoryInfoText = styled.div`
  font-size: 1em;
  color: #202020;
  margin-top: 3%;
  width: auto;
  width: 100%;
  max-width: 30em;
  text-align: justify;
`;
