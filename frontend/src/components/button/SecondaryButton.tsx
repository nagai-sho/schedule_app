import { Button } from '@mui/material';
import React from 'react';
import colorCodes from '../../config/colors';

interface Props {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}

const CancelButton: React.FC<Props> = ({ onClick, title, disabled }) => {
  return (
    <Button
      sx={{
        minWidth: '10px',
        backgroundColor: disabled
          ? colorCodes.background.disabled
          : colorCodes.background.default,
        color: disabled ? colorCodes.text.inverse : colorCodes.text.default,
        fontWeight: 700,
        borderRadius: '8px',
        padding: '8px 12px',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: colorCodes.hover.tertiary,
        },
        '&:focus:not(.Mui-disabled)': {
          outline: 'none',
          boxShadow: 'none',
        },
        '&:active:not(.Mui-disabled)': {
          outline: 'none',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(1px)',
          backgroundColor: colorCodes.action.inverse,
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default CancelButton;
