import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
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
      <BackToTop onClick={() => console.log('Anda parriba')}>
        <PokeButton variant="secondary">Subir</PokeButton>
      </BackToTop>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const BackToTop = styled.div``;
