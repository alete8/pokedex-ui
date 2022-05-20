import React from 'react';
import styled from 'styled-components';

import { BarCode } from '../../assets/icons/barcode';

const Footer = () => {
  return (
    <FooterContainer>
      <h3>The Pokémon Company</h3>
      <h4>ALete ♥ Farvon</h4>
      <BarCode size="60" />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    align-items:center;
    height: 65px;
    background-color: gray;
    margin-top:2vw;
    justify-content:space-around;
    
    h4{
        font-size: 1.3em;

    h3{
        font-size: 1.3em;
`;
