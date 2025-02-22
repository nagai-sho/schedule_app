import { use, useState } from 'react';
import {
  AppBar,
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/kyowasetsubi_logo.png';

const setNavLinks: Array<{ text: string; url: string }> = [
  { text: 'Top', url: '/' },
  { text: '従業員', url: 'assets/edit' },
  { text: '車両', url: 'vehicles/edit' },
  { text: 'カレンダー', url: 'calender/show' },
  { text: '登録情報', url: 'mypage' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar component="header" position="fixed" id="header">
      <Container
        maxWidth={false}
        sx={{
          minHeight: '100px',
          maxHeight: '200px',
          maxWidth: { xs: '100%', md: '100%', lg: 'none' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Link to="/calender/show">
              <img src={logo} alt="Calender-Signage" height="50" width="auto" />
            </Link>
            <Typography sx={{ fontSize: '25px' }}>株式会社京和設備</Typography>
          </Box>
          <Box>
            <List
              component="nav"
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: 'center',
                    display: { xs: 'block', md: 'none' },
                  }}
                  onClick={handleDrawerOpen}
                >
                  <ListItemText primary={<MenuIcon />} />
                </ListItemButton>
              </ListItem>
              {setNavLinks.map((navLink) => (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      display: { xs: 'none', md: 'block' },
                    }}
                    component={Link}
                    to={navLink.url}
                  >
                    <ListItemText primary={navLink.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Drawer
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            PaperProps={{ style: { width: '100%' } }}
          >
            <List
              component="nav"
              sx={{ display: 'block', justifyContent: 'normal' }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={handleDrawerClose}
                  sx={{
                    textAlign: 'center',
                    borderBottom: 'solid 1px #696969',
                  }}
                >
                  <ListItemText primary={<CloseIcon />} />
                </ListItemButton>
              </ListItem>
              {setNavLinks.map((navLink) => (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleDrawerClose}
                    sx={{
                      textAlign: 'center',
                      borderBottom: 'solid 1px #696969',
                    }}
                    component={Link}
                    to={navLink.url}
                  >
                    <ListItemText primary={navLink.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
