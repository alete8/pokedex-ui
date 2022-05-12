import React from 'react';
import styled from 'styled-components';

const POKE_ICON = 'https://cdn-icons-png.flaticon.com/512/361/361998.png';

const headerData = [
  { label: 'Home', href: '#home' },
  { label: 'History', href: '#history' },
  { label: 'Video', href: '#video' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pokedex', href: '/pokedex' },
  { label: 'MyFavs', href: '/my-favs' },
];

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer href="/">
        <HeaderLogo src={POKE_ICON} />
        <HeaderText>Pokedex</HeaderText>
      </HeaderLogoContainer>
      <HeaderNav>
        {headerData.map((item, idx) => (
          <HeaderNavLink href={item.href} key={idx}>{item.label}</HeaderNavLink>
        ))}
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: rgb(240, 240, 123);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const HeaderLogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 3vw;
`;

const HeaderLogo = styled.img`
  display: flex;
  width: 64px;
`;

const HeaderText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 10px;
  color: black;
`;

const HeaderNav = styled.nav`
  display: flex;
  width: 360px;
  justify-content: space-around;
  margin-right: 5vw;
`;

const HeaderNavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
