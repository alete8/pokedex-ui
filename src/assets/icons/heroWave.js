import React from 'react';
import styled from 'styled-components';

export const HeroWave = ({ height, fill }) => (
  <WaveContainer height={height}>
    <WaveSvg viewBox="0 0 500 150" preserveAspectRatio="none">
      <WavePath
        d="M0.00,49.98 C185.38,-47.84 390.24,150.50 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        fill={fill}
      ></WavePath>
    </WaveSvg>
  </WaveContainer>
);

const WaveContainer = styled.div`
  height: ${({ height }) => (height ? height : '150px')};
  overflow: hidden;
`;

const WaveSvg = styled.svg`
  height: 100%;
  width: 100%;
`;

const WavePath = styled.path`
  stroke: none;
  fill: ${({ fill }) => (fill ? fill : 'black')};
`;
