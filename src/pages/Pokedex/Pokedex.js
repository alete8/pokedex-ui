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

  const SortById = (filteredPokemons) => {
    filteredPokemons.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setFavorites(filteredPokemons);
  };

  const SortByName = (filteredPokemons) => {
    filteredPokemons.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    setFavorites(filteredPokemons);
  };

  const SortByType_Id = (filteredPokemons) => {
    filteredPokemons.sort((a, b) => {
      if (a.type[0] > b.type[0]) {
        return 1;
      }
      if (a.type[0] < b.type[0]) {
        return -1;
      }
      return 0;
    });
    setFavorites(filteredPokemons);
  };

  const SortByType_Name = (filteredPokemons) => {
    filteredPokemons.sort((a, b) => {
      if (a.type[0] > b.type[0]) {
        return 1;
      }
      if (a.type[0] < b.type[0]) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    setFavorites(filteredPokemons);
  };

  const handleOptionSelected = (option) => {
    let filteredPokemons = [...pokemons];

    switch (option.value) {
      case 1:
        SortById(filteredPokemons);
        break;
      case 2:
        SortByName(filteredPokemons);
        break;
      case 3:
        SortByType_Id(filteredPokemons);
        break;
      case 4:
        SortByType_Name(filteredPokemons);
        break;
      default:
        SortById(filteredPokemons);
        break;
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
              { label: 'Type & Id', value: 3 },
              { label: 'Type & Name', value: 4 },
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
