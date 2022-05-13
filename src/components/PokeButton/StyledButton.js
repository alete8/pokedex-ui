import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  transition: all 0.2s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background-color: lightgray;
      color: gray;
    `}

  ${({ disabled, variant }) =>
    variant === 'primary' &&
    !disabled &&
    css`
      color: white;
      background-image: linear-gradient(to right, #5aa4f8, #58d47d);
      &:hover {
        background-image: linear-gradient(to left, #5aa4f8, #58d47d);
      }
      &:active {
        transform: scale(1.05);
      }
    `}

    ${({ disabled, variant }) =>
    variant === 'secondary' &&
    !disabled &&
    css`
      color: white;
      background-image: linear-gradient(to bottom right, #a50722, #f0b535);
      &:hover {
        background-image: linear-gradient(to top right, #a50722, #f0b535);
      }
      &:active {
        transform: scale(1.05);
      }
    `}
`;

const SMButton = styled(Button)`
  padding: 0px 14px;
  height: 32px;
  font-size: 12px;
  line-height: 18px;
`;

const MDButton = styled(Button)`
  padding: 0px 20px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
`;

const LGButton = styled(Button)`
  padding: 0px 20px;
  height: 48px;
  font-size: 14px;
  line-height: 23px;
`;

export { SMButton, MDButton, LGButton };
