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

  const handleOptionSelected = (option) => {
    let filteredPokemons = [...pokemons];

    if (option.value === 1) {
      filteredPokemons.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          if (a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        }
      });
      setFavorites(filteredPokemons);
    } else {
      if (option.value === 2) {
        filteredPokemons.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else {
              return 0;
            }
          }
        });
        setFavorites(filteredPokemons);
      }
    }
  };

  return (
    <PokedexContainer>
      <Header />
      <PokeSearchContainer>
        <PokeSearchBar onSearch={(e) => filterPokemon(e)} />
        <FilterContainer>
          <FilterText>Sort by</FilterText>
          <FilterMenu
            options={[
              { label: 'Pokedex No.', value: 1 },
              { label: 'A-Z', value: 2 },
              { label: 'Type', value: 3 },
            ]}
            onOptionSelected={(e) => handleOptionSelected(e)}
          />
        </FilterContainer>
      </PokeSearchContainer>
      <PokedexCardsContainer>
        {favorites &&
          favorites.map((pokemon, idx) => (
            <PokeCard pokemon={pokemon} key={idx} />
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

const FilterContainer = styled.div`
  display: flex;
`;

const FilterText = styled.div`
  color: black;
  font-size: 18px;
  line-height: 24px;
  margin-right: 4px;
`;

const PokedexCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 38px 50px;
`;
