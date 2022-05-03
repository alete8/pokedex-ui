import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import MyFavs from './pages/MyFavs/MyFavs';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="my-favs" element={<MyFavs />} />
      </Routes>
    </div>
  );
};

export default App;
