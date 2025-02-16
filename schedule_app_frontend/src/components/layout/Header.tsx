// import ReactDom from 'react-dom';
// import '../../styles/header.css';
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
// import Logo from '../../assets/images/logo.png';

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
    <header>
      <AppBar component="header" position="static">
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                textDecoration: 'none',
                color: 'text.primary',
              }}
            >
              <Typography component="h1">
                <Link to="calender/show">
                  <img
                    src="#"
                    alt="Calender-Signage"
                    height="60"
                    width="auto"
                  />
                </Link>
              </Typography>
              <Typography component="h1">
                {/* <Link to="calender/show"> */}
                <h2>株式会社京和設備</h2>
                {/* </Link> */}
              </Typography>
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
    </header>
  );
};

export default Header;
