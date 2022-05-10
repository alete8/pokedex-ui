import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const HeaderLogo = () => {
  const poke = 'https://cdn-icons-png.flaticon.com/512/361/361998.png';
  return (
    <a className='header-logo-conteiner' href="/">
      <img className="pokeIcon" src={poke} />
      <p>Pokedex</p>
    </a>
  );
};

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      
      <a href='#home' className='header-nav-link'>Home</a>

      <a href='#history' className='header-nav-link'>History</a>

      <a href='#video' className='header-nav-link'>Video</a>

      <a href='#contact' className='header-nav-link'>Contact</a>

      <Link to="pokedex" className='header-nav-link'>Pokedex</Link>

      <Link to="my-favs" className='header-nav-link'>MyFavs</Link>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">

      <HeaderLogo />

      <HeaderNav />

      
    </header>
  );
};

export default Header;
