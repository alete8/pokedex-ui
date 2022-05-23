import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import { getAllPokemons } from '../../services/getPokemons';
import { buildPokemon } from '../../utils/buildPokemon';
import PokeCard from '../../components/PokeCard/PokeCard';
import PokeSearchBar from '../../components/PokeSearchBar/PokeSearchBar';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [Allpokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons().then((response) => buildPokeArray(response));
  }, []);

  const buildPokeArray = (apiResponse) => {
    let array = [];

    for (let i = 0; i < 150; i++) {
      array.push(buildPokemon(apiResponse[i].data));
    }

    setPokemons(array);
    setAllPokemons (array);
  };

  const filterPokemon = (text) => {
    let pokemonsFiltered = Allpokemons.filter((pok) =>
      pok.name.toLowerCase().includes(text.toLowerCase())
    );

    setPokemons(pokemonsFiltered);
  };

  return (
    <PokedexContainer>
      <Header />
      <PokeSearchContainer>
        <PokeSearchBar onSearch={(e) => filterPokemon(e)} />
      </PokeSearchContainer>
      <PokedexCardsContainer>
        {pokemons.map((pokemon, idx) => (
          <PokeCard pokemon={pokemon} key={idx} />
        ))}
      </PokedexCardsContainer>
    </PokedexContainer>
  );
};

export default Pokedex;

const PokedexContainer = styled.div``;

const PokeSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 2vw;
`;

const PokedexCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 38px 50px;
`;
