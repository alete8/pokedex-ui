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
        placeholder="Type to search..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </PokeSearchBarContainer>
  );
};

export default PokeSearchBar;

const PokeSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PokeSearchBarInput = styled.input`
  border-radius: 30px 30px;
  width: 100%;
  padding: 12px;
`;
