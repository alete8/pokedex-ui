import React from 'react';
import styled from 'styled-components';

import { GitHub } from '../../assets/icons/github';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSpan>The Pokémon Company</FooterSpan>
      <FooterLink
        target="_black"
        rel="noreferrer"
        href="https://github.com/alete8"
      >
        <GitHub size="24px" />
        <FooterSpan>ALete</FooterSpan>
      </FooterLink>
      <FooterLink
        target="_black"
        rel="noreferrer"
        href="https://github.com/farvon"
      >
        <GitHub size="24px" />
        <FooterSpan>Farvon</FooterSpan>
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: gray;
`;

const FooterLink = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }
`;

const FooterSpan = styled.span`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-weight: bold;
  color: black;
  margin-left: 4px;
`;
