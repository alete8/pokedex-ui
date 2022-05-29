import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import { getPokemonById } from '../../services/getPokemons';
import { buildPokemon } from '../../utils/buildPokemon';
import PokeCard from '../../components/PokeCard/PokeCard';
import Footer from '../../components/Footer/Footer';

const Pokedex = () => {
  const [favorites, setFavorites] = useState([]);
  const [favClicked, setFavClicked] = useState(false);

  useEffect(() => {
    const myFavs = JSON.parse(localStorage.getItem('myFavs'));
    myFavs.sort((a, b) => a - b);
    getPokemonById(myFavs).then((response) => buildPokeArray(response));
  }, [favClicked]);

  const buildPokeArray = (response) => {
    let favsAarray = [];

    for (let i = 0; i < response.length; i++) {
      favsAarray.push(buildPokemon(response[i].data));
    }

    setFavorites(favsAarray);
  };

  return (
    <MyFavsContainer>
      <Header />
      <MyFavsCardsContainer>
        {favorites && favorites.length >= 1 ? (
          favorites.map((pokemon, idx) => (
            <PokeCard
              pokemon={pokemon}
              key={idx}
              onClick={() => setFavClicked(!favClicked)}
            />
          ))
        ) : (
          <MyFavsSpan>
            Oops. It seems that there are no pokemons added to favs
          </MyFavsSpan>
        )}
      </MyFavsCardsContainer>
      <Footer />
    </MyFavsContainer>
  );
};

export default Pokedex;

const MyFavsContainer = styled.div``;

const MyFavsCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 38px 50px;
  min-height: 78.8vh;
`;

const MyFavsSpan = styled.span`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-weight: bold;
  color: black;
`;
