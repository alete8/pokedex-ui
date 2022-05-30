import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FullHeart } from '../../assets/icons/fullHeart';
import { EmptyHeart } from '../../assets/icons/emptyHeart';
import IconType from '../../assets/icons/types/TypesIcons';

const bgColor = {
  grass:
    'linear-gradient(0deg, rgba(59,144,46,0.6) 10%, rgba(206,232,169,0.6) 32%, rgba(86,185,89,0.6) 65%, rgba(173,230,122,0.6) 100%)',
  fire: 'linear-gradient(0deg, rgba(198,147,71,0.6) 0%, rgba(235,55,10,0.6) 32%, rgba(251,210,138,0.6) 66%, rgba(194,55,55,0.6) 100%)',
  water:
    'linear-gradient(0deg, rgba(144,159,222,0.6) 0%, rgba(71,233,229,0.6) 32%, rgba(115,196,219,0.6) 66%, rgba(89,146,236,0.6) 100%)',
  bug: 'linear-gradient(0deg, rgba(140,181,49,0.6) 0%, rgba(206,232,169,0.6) 32%, rgba(178,185,86,0.6) 65%, rgba(173,230,122,0.6) 100%)',
  normal:
    'linear-gradient(0deg, rgba(181,140,49,0.6) 0%, rgba(231,232,169,0.6) 32%, rgba(185,157,86,0.6) 65%, rgba(230,203,122,0.6) 100%)',
  poison:
    'linear-gradient(0deg, rgba(144,49,181,0.6) 0%, rgba(232,169,220,0.6) 32%, rgba(159,86,185,0.6) 65%, rgba(185,122,230,0.6) 100%)',
  electric:
    'linear-gradient(0deg, rgba(152,156,48,0.6) 0%, rgba(235,232,10,0.6) 32%, rgba(247,251,138,0.6) 66%, rgba(194,185,55,0.6) 100%)',
  ground:
    'linear-gradient(0deg, rgba(152,102,7,0.6) 0%, rgba(221,168,13,0.6) 32%, rgba(204,151,24,0.6) 66%, rgba(245,181,15,0.6) 100%)',
  fairy:
    'linear-gradient(0deg, rgba(246,151,239,0.6) 0%, rgba(239,240,190,0.6) 32%, rgba(244,190,201,0.6) 66%, rgba(215,154,236,0.6) 100%)',
  fighting:
    'linear-gradient(0deg, rgba(186,166,158,0.6) 0%, rgba(223,223,223,0.6) 32%, rgba(223,190,190,0.6) 66%, rgba(142,136,136,0.6) 100%)',
  psychic:
    'linear-gradient(0deg, rgba(242,174,247,0.6) 0%, rgba(133,150,237,0.6) 32%, rgba(156,120,214,0.6) 66%, rgba(124,115,200,0.6) 100%)',
  rock: 'linear-gradient(0deg, rgba(93,93,96,0.6) 0%, rgba(137,137,144,0.6) 32%, rgba(119,119,119,0.6) 66%, rgba(84,85,89,0.6) 100%)',
  ghost:
    'linear-gradient(0deg, rgba(215,215,219,0.6) 0%, rgba(162,172,173,0.6) 32%, rgba(185,196,199,0.6) 66%, rgba(120,136,139,0.6) 100%)',
  ice: 'linear-gradient(0deg, rgba(212,220,224,0.6) 0%, rgba(174,225,231,0.6) 32%, rgba(200,206,208,0.6) 66%, rgba(199,237,245,0.6) 100%)',
  dragon:
    'linear-gradient(0deg, rgba(222,187,144,0.6) 0%, rgba(233,166,71,0.6) 32%, rgba(232,230,154,0.6) 66%, rgba(236,187,89,0.6) 100%)',
};

const PokeCard = ({ pokemon, onClick }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // Initialize myFavs
    if (localStorage.getItem('myFavs')) {
      let favs = JSON.parse(localStorage.getItem('myFavs'));
      if (favs.find((fav) => fav === pokemon.id)) {
        setIsFav(true);
      }
    } else {
      let favs = [];
      localStorage.setItem('myFavs', JSON.stringify(favs));
    }
    // eslint-disable-next-line
  }, []);

  const handleAddRemoveFav = (id) => {
    let favs = JSON.parse(localStorage.getItem('myFavs'));

    if (favs.find((fav) => fav === id)) {
      favs.splice(favs.indexOf(id), 1);
    } else {
      favs.push(id);
      setIsFav(true);
    }

    localStorage.setItem('myFavs', JSON.stringify(favs));

    if (onClick) {
      onClick();
    }
  };

  const pokemonType = pokemon.type.split(' - ');
  const pokemonTypeIcon = pokemonType[0].toLowerCase();
  console.log(pokemonTypeIcon);

  return (
    <PokeCards pokemon={pokemon} bgColor={bgColor[pokemonType[0]]}>
      <FavIcon onClick={() => handleAddRemoveFav(pokemon.id)}>
        {isFav ? <FullHeart size="32px" /> : <EmptyHeart size="24" />}
      </FavIcon>
      <Circle>
        <img src={pokemon.image} alt={pokemon.name} />
      </Circle>

      <PokeCardText>{pokemon.name}</PokeCardText>
      <span>{pokemon.type}</span>
      <IconTypeContainer>
        <IconType poketype={pokemonTypeIcon} size="54px" />
      </IconTypeContainer>
    </PokeCards>
  );
};

export default PokeCard;

const PokeCards = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px 40px;
  background: ${({ bgColor }) => bgColor};
  filter: alpha(opacity=20);
  box-shadow: inset 1px 1px 4px #979797, 0 0 15px #ddd;
  margin-bottom: 40px;
  overflow: hidden;

  :hover {
    transform: translateY(-7px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.4), inset 1px 1px 4px #979797;
  }

  @media (min-width: 768.1px) {
    margin: 40px;
  }
`;

const Circle = styled.div`
  background-color: #efedec;
  border-radius: 50%;
  box-shadow: 0 0 20px #979797;
`;

const PokeCardText = styled.span`
  padding: 5px;
  font-weight: bold;
  z-index: 5;

  :first-letter {
    text-transform: capitalize;
  }
`;

const IconTypeContainer = styled.div`
  display: flex;
  margin-top: -40px;
  transform: translate(-60px, 55px);

  z-index: 1;
`;

const FavIcon = styled.div`
  display: flex;
  position: absolute;
  transform: translate(60px, -100px);
`;
