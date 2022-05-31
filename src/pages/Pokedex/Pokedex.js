import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import { getAllPokemons } from '../../services/getPokemons';
import { buildPokemon } from '../../utils/buildPokemon';
import PokeCard from '../../components/PokeCard/PokeCard';
import PokeSearchBar from '../../components/PokeSearchBar/PokeSearchBar';
import Footer from '../../components/Footer/Footer';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getAllPokemons().then((response) => buildPokeArray(response));
  }, []);

  const buildPokeArray = (response) => {
    let array = [];

    for (let i = 0; i < 150; i++) {
      array.push(buildPokemon(response[i].data));
    }

    setPokemons(array);
    setFavorites(array);
  };

  const filterPokemon = (text) => {
    let pokemonsFiltered = pokemons.filter((pok) =>
      pok.name.toLowerCase().includes(text.toLowerCase())
    );

    setFavorites(pokemonsFiltered);
  };

  let onMyFavsSection = false;

  return (
    <PokedexContainer>
      <Header />
      <PokeSearchContainer>
        <PokeSearchBar onSearch={(e) => filterPokemon(e)} />
        <FilterMenu
          options={[
            { label: 'Filtro 1', value: 1 },
            { label: 'Filtro 2', value: 2 },
            { label: 'Filtro 3', value: 3 },
          ]}
          onOptionSelected={(e) => console.log(e)}
        />
      </PokeSearchContainer>
      <PokedexCardsContainer>
        {favorites.map((pokemon, idx) => (
          <PokeCard
            pokemon={pokemon}
            key={idx}
            onMyFavsSection={onMyFavsSection}
          />
        ))}
      </PokedexCardsContainer>
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;

const PokedexContainer = styled.div``;

const PokeSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 25px 50px;

  @media (min-width: 768.1px) {
    margin: 78px 150px 0px;
  }
`;

const PokedexCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 38px 50px;
`;
