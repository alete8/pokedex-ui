import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
// import BackToTop from '../../components/PokeButton/BackToTop';
import PokeButton from '../../components/PokeButton/PokeButton';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <History />
      <Video />
      <Contact />
      <Footer />
      <ToTop onClick={() => window.scrollTo(0, 0)}>
        <PokeButton variant="secondary">Subir</PokeButton>
      </ToTop>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const ShowBtn = () => {
  const [display, setdisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const display = window.scrollY <= 450 ? 'none' : 'show';
      setdisplay(display);
    };
    window.addEventListener('scroll', handleScroll);    
  }, []);
  return display;
};

const ToTop = styled.div`
  display:${ShowBtn};
  position: fixed;
  bottom: 50px;
  right: 40px;
`;
