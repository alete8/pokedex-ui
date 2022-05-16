import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import PokeButton from '../../components/PokeButton/PokeButton';

const ShowBtn = () => {
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const display = window.scrollY <= 450 ? 'none' : 'block';
      setDisplay(display);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return display;
};

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <History />
      <Video />
      <Contact />
      <Footer />
      <ToTop
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <PokeButton variant="secondary">Subir</PokeButton>
      </ToTop>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const ToTop = styled.div`
  display: ${ShowBtn};
  position: fixed;
  bottom: 50px;
  right: 40px;
`;
