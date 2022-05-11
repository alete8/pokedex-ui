import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Header /> 
      <Hero />
      <History/>
      <Video/>
      <Contact/>
    </div>
  );
};

export default Home;
