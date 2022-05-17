import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import PokeButton from '../../components/PokeButton/PokeButton';
import { ArrowUp } from '../../assets/icons/arrowUp';

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 450);
    };

    // Bind the event listener
    document.addEventListener('scroll', handleScroll);
    return () => {
      // Unbind the event listener
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomeContainer>
      <Header />
      <Hero />
      <History />
      <Video />
      <Contact />
      <Footer />
      <ToTop
        scrolling={isScrolling}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <PokeButton variant="secondary">
          <ArrowUp size="20px" />
        </PokeButton>
      </ToTop>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  position: relative;
`;

const ToTop = styled.div`
  pointer-events: ${({ scrolling }) => (scrolling ? 'initial' : 'none')};
  opacity: ${({ scrolling }) => (scrolling ? '1' : '0')};
  transition: opacity 0.5s ease;
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 50;
`;
