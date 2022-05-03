import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Aca vamos a desarrollar el Header
      <Link to='pokedex'>Pokedex</Link>
      <Link to='my-favs'>MyFavs</Link>
    </div>
  );
};

export default Header;
