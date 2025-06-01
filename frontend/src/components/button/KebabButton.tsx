import { IconButton, Menu, TableCell } from '@mui/material';
import { ReactNode, useState } from 'react';
import colorCodes from '../../config/colors';
import { MoreVert } from '@mui/icons-material';
import React from 'react';

interface Props {
  children: ReactNode;
}

const styles = {
  icon: {
    color: colorCodes.text.default,
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
};

const KebabButton: React.FC<Props> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableCell
      sx={{
        borderColor: `${colorCodes.border.default}`,
        borderBottom: 'none',
        padding: 0,
      }}
    >
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={styles.icon}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </Menu>
    </TableCell>
  );
};

export default KebabButton;
