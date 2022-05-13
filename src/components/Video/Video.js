import React from 'react';
import PokeButton from '../PokeButton/PokeButton';
import './Video.css';

const Video = () => {
  return (
    <div id="video">
      <div className="conteiner">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="videoWaveUp"
        >
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="videoWaveDown"
        >
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
        </svg>
        <div className="conteinerVideo">
          <div className="conteinerVideoFix">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uDIoEbbFKAY?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="videoText">
          <h2> Checkout the Official Pokémon Youtube channel</h2>

          <div>
            <a href="https://www.youtube.com/c/PokemonLATAM">
              <PokeButton>View more</PokeButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
