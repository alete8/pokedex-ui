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
  size = 'md',
  variant = 'primary',
  type='button',
}) => {
  const Button = sizes[size];
  return (
    <Button disabled={disabled} fullWidth={fullWidth} variant={variant} type={type}>
      {children} 
    </Button>
  );
};

export default PokeButton;
