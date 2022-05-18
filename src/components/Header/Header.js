import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Ipokeball } from '../../assets/icons/pokeball';
import { Ihamburger } from '../../assets/icons/hamburger';

const headerData = [
  { label: 'Home', href: '#home' },
  { label: 'History', href: '#history' },
  { label: 'Video', href: '#video' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pokedex', href: '/pokedex' },
  { label: 'MyFavs', href: '/my-favs' },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 50);
    };

    // Bind the event listener
    document.addEventListener('scroll', handleScroll);
    return () => {
      // Unbind the event listener
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderTagStyled>
      <HeaderContainer isScrolling={isScrolling}>
        <HeaderLogoContainer href="/">
          <Ipokeball size="32px" />
          <HeaderText>Pokedex</HeaderText>
        </HeaderLogoContainer>
        <HeaderNav>
          {headerData.map((item, idx) => (
            <HeaderNavLink href={item.href} key={idx}>
              {item.label}
            </HeaderNavLink>
          ))}
        </HeaderNav>
        <HeaderHamburgerContainer>
          <HamburgerButton onClick={() => setShowMenu(!showMenu)}>
            <Ihamburger size="32px" />
          </HamburgerButton>
          {showMenu && (
            <HamburgerMenu>
              {headerData.map((item, idx) => (
                <HamburgerLink href={item.href} key={idx}>
                  {item.label}
                </HamburgerLink>
              ))}
            </HamburgerMenu>
          )}
        </HeaderHamburgerContainer>
      </HeaderContainer>
    </HeaderTagStyled>
  );
};

export default Header;

const HeaderTagStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const HeaderContainer = styled.div`
  background-color: ${({ isScrolling }) => (isScrolling ? 'white' : '#f0f07b')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: ${({ isScrolling }) => (isScrolling ? '0px 2px 25px 0px black' : '0')};
  transition: all 0.5s ease;
`;

const HeaderLogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const HeaderText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-left: 12px;
`;

const HeaderNav = styled.nav`
  display: none;

  @media (min-width: 768.1px) {
    display: flex;
    width: 360px;
    justify-content: space-around;
  }
`;

const HeaderNavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

const HeaderHamburgerContainer = styled.div`
  display: flex;

  @media (min-width: 768.1px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  all: unset;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 76px;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 20px 30px grey;
`;

const HamburgerLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-bottom: 12px;

  &:hover {
    opacity: 0.7;
  }
`;
