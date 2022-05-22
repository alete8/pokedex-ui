import React from 'react';
import { SMButton, MDButton, LGButton } from './StyledButton';

const sizes = {
  sm: SMButton,
  md: MDButton,
  lg: LGButton,
};

const PokeButton = ({
  children,
  disabled,
  fullWidth,
  onClick,
  size = 'md',
  variant = 'primary',
  type = 'button',
}) => {
  const Button = sizes[size];

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={() => handleClick()}
      variant={variant}
      type={type}
    >
      {children}
    </Button>
  );
};

export default PokeButton;
