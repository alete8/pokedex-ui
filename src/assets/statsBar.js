import React from 'react';
import styled from 'styled-components';

const StatsBar = ({value,statColor}) => {

   let valueToRender = (value*100)/200;

return (
  <TotalBar >
    <ProgresBar valueToRender={valueToRender} statColor={statColor}>{value}</ProgresBar>
  </TotalBar>
  );
};

export default StatsBar;

const TotalBar = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  font-size: 0.7em;
  border: 1px solid rgba(107,63,91,0.3);
border-radius: 10px;
background-color: rgba(107,63,91,0.2);
`;

const ProgresBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({valueToRender})=> valueToRender}%;
  border-radius:10px;
  Background-color: ${({ statColor }) => statColor};
`;

/* 

const colorByStats = {
    hp:'rgba(235,109,87,1)',
    attack:'rgba(235,109,87,1)',
    defense:'rgba(235,109,87,1)',
    specialAttack:'rgba(235,109,87,1)',
    specialDefense:'rgba(235,109,87,1)',
    speed:'rgba(235,109,87,1)',
}; */