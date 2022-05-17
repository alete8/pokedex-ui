import React from 'react';
import { IGameboy } from '../../assets/icons/gameboy';
import { IPikachu } from '../../assets/icons/pikachu';
import { Ipokeball } from '../../assets/icons/pokeball';
import './History.css';

const History = () => {
  return (
    <div id="history" className="historyConteiner">
      <h1>Pokemon History</h1>
      <div className="historyBody">
        <div className="history1980">
          <div className="date1980">
            <div className="icon1980">
              <Ipokeball size="64" />
            </div>
            <h1>1980</h1>
          </div>

          <div className="history1980Info">
            <div className="historyFirstStep80">First Steps</div>
            <div className="history1980Text">
              Pokémon is short for “Pocket Monsters", the original Japanese
              name. The franchise has its roots in a gaming magazine in the
              early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken
              Sugimori. Tajiri was the writer, while Sugimori was the
              illustrator.
            </div>
          </div>
        </div>

        <div className="history1996">
          <div className="history1996Info">
            <div className="historyFirstStep96">Game Boy</div>
            <div className="history1996Text">
              26 February 1996 marks the debut of the Pokémon franchise in the
              form of both those games on the Game Boy in Japan. At its heart,
              Pocket Monsters: Red and Green was a very basic Japanese
              role-playing game.
            </div>
          </div>

          <div className="date1996">
            {/* <img className="icon1996" src={gameboy('./gameboy.svg')} /> */}
            <div className="icon1996">
              <IGameboy size="64px" />
            </div>
            <h1>1996</h1>
          </div>
        </div>

        <div className="history1998">
          <div className="date1998">
            {/* <img className="icon1998" src={pikachu('./pikachu.svg')} /> */}
            <div className="icon1998">
              <IPikachu size="64px" />
            </div>
            <h1>1998</h1>
          </div>

          <div className="history1998Info">
            <div className="historyFirstStep98">Pikachu</div>
            <div className="history1998Text">
              The popularity of the anime and Yellow, I believe, led to Pikachu
              becoming the most recognizable and loved Pokémon out there. Pocket
              Monsters' success led to North America getting the games in 1998
              for the Game Boy (as Pokémon Red and Blue). These few years in the
              public saw Pokémon go from a game about a hobby to a worldwide
              phenomenon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
