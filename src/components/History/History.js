import React from 'react';
import styled from 'styled-components';

import { IGameboy } from '../../assets/icons/gameboy';
import { IPikachu } from '../../assets/icons/pikachu';
import { Ipokeball } from '../../assets/icons/pokeball';

const History = () => {
  return (
    <HistoryContainer id="history">
      <h1>Pokemon History</h1>
      <HistoryBody>
        <History1980>
          <HistoryDate>
            <HistoryIcon>
              <Ipokeball size="64" />
            </HistoryIcon>
            <HistoryDateH11980>1980</HistoryDateH11980>
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
        </History1980>
        <History1996>
          <HistoryInfoContainer>
            <HistoryInfoTitle1996>Game Boy</HistoryInfoTitle1996>
            <HistoryInfoText>
              26 February 1996 marks the debut of the Pokémon franchise in the
              form of both those games on the Game Boy in Japan. At its heart,
              Pocket Monsters: Red and Green was a very basic Japanese
              role-playing game.
            </HistoryInfoText>
          </HistoryInfoContainer>
          <HistoryDate>
            <HistoryIcon>
              <IGameboy size="64px" />
            </HistoryIcon>
            <HistoryDateH11996>1996</HistoryDateH11996>
          </HistoryDate>
        </History1996>
        <History1988>
          <HistoryDate>
            <HistoryIcon>
              <IPikachu size="64px" />
            </HistoryIcon>
            <HistoryDateH11998>1998</HistoryDateH11998>
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
        </History1988>
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

const HistoryBody = styled.div``;

const History1980 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-top: 5%;
  width: 80vw;
  border-left: solid;
  border-color: #6dd19a;
  border-width: 0.5vw;
`;

const History1996 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-top: 5%;
  width: 80vw;
  border-right: solid;
  border-color: #ee4a4a;
  border-width: 0.5vw;
`;

const History1988 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-top: 5%;
  width: 80vw;
  border-left: solid;
  border-color: #ffb000;
  border-width: 0.5vw;
`;

const HistoryDate = styled.div`
  display: flex;
  max-width: 15em;
  min-width: 15em;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;

const HistoryDateH11980 = styled.h1`
  align-self: center;
  color: #6dd19a;
`;

const HistoryDateH11996 = styled.h1`
  align-self: center;
  color: #ee4a4a;
`;

const HistoryDateH11998 = styled.h1`
  align-self: center;
  color: #ffb000;
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
