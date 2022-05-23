import React, { useState } from 'react';
import styled from 'styled-components';

const PokeSearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e);
    
   if (onSearch) {
        onSearch(e);
    } 

  };

  return (
    <PokeSearchBarContainer>
      <PokeSearchBarInput
        type="text"
        placeholder='Type to search...'
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </PokeSearchBarContainer>
  );
};

export default PokeSearchBar;

const PokeSearchBarContainer = styled.div``;

const PokeSearchBarInput = styled.input`
  display: flex;
  padding: 0.5vw;
  justify-content: center;
  width: 30vw;
  border-radius: 30px 30px;
  margin-right: 1vw;
`;
