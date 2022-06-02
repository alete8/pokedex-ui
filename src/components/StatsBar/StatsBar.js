import React from 'react';
import styled from 'styled-components';

const MAX_STATS = 200;

const StatsBar = ({ value, statColor }) => {
  const valueToRender = (value * 100) / MAX_STATS;

  return (
    <TotalBar>
      <ProgressBar valueToRender={valueToRender} statColor={statColor}>
        {value}
      </ProgressBar>
    </TotalBar>
  );
};

export default StatsBar;

const TotalBar = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  font-size: 0.7em;
  border: 1px solid rgba(107, 63, 91, 0.3);
  border-radius: 10px;
  background-color: rgba(107, 63, 91, 0.2);
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ valueToRender }) => valueToRender}%;
  border-radius: 10px;
  background-color: ${({ statColor }) => statColor};
`;

