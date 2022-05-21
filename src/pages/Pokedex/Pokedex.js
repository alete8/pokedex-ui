import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import { getAllPokemons } from '../../services/getPokemons';
import { buildPokemon } from '../../utils/buildPokemon';
import PokeCard from '../../components/PokeCard/PokeCard';
import PokeButton from '../../components/PokeButton/PokeButton';
import { SearchIcon } from '../../assets/icons/searchIcon';

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

  const [search, setSearch] = useState('Search');

  /* const filtrar = (pokeSearching) => {
    var searchResult = pokemons.filter((elemento) =>{
      if (elemento.name.toString().toLowerCase().include(pokeSearching.toLowerCase()))
      return searchResult;
    })
  } */

  return (
    <PokedexContainer>
      <Header />
      <PokeSearchContainer>
      <PokeSearch type='text' value={search}
          onFocus={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
           />
      <PokeButton variant='secondary'><SearchIcon size='24px'/></PokeButton>      
      </PokeSearchContainer>
      <PokedexCardsContainer>
        {pokemons.map((pokemon, idx) => (
          <PokeCard pokemon={pokemon} key={idx}/>
        ))}
      </PokedexCardsContainer>
    </PokedexContainer>
  );
};

export default Pokedex;

const PokedexContainer = styled.div``;

const PokeSearchContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  margin-top:2vw;
`;

const PokeSearch = styled.input`
display:flex;
padding:0.5vw;
justify-content:center;  
width:30vw;
border-radius:30px 30px;
margin-right:1vw;
`;

const PokedexCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 38px 50px;
`;

/* const PokeCard = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 12px;
`; */
