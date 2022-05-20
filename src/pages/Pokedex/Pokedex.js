import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import { getAllPokemons } from '../../services/getPokemons';
import { buildPokemon } from '../../utils/buildPokemon';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons().then((response) => buildPokeArray(response));
  }, []);

  const buildPokeArray = (apiResponse) => {
    let array = [];

    for (let i = 0; i < 150; i++) {
      array.push(buildPokemon(apiResponse[i].data));
    }

    setPokemons(array);
  };

  return (
    <PokedexContainer>
      <Header />
      <PokedexCardsContainer>
        {pokemons.map((pokemon, idx) => (
          <PokeCard key={idx}>
            <span>{pokemon.name}</span>
            <span>Type: {pokemon.type}</span>
          </PokeCard>
        ))}
      </PokedexCardsContainer>
    </PokedexContainer>
  );
};

export default Pokedex;

const PokedexContainer = styled.div``;

const PokedexCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 38px 50px;
`;

const PokeCard = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 12px;
`;
