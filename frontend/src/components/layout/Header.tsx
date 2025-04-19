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
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/kyowasetsubi_logo.png';
import colorCodes from '../../styles/colors';

const setNavLinks: Array<{ text: string; url: string }> = [
  { text: 'Top', url: '/' },
  { text: 'カレンダー', url: 'calender/show' },
  { text: '従業員', url: 'assets/edit' },
  { text: '車両', url: 'vehicles/edit' },
  { text: '登録情報', url: 'mypage/edit' },
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
    <AppBar
      component="header"
      position="fixed"
      id="header"
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'Blur(3px)',
        // backgroundColor: colorCodes.background.default || 'transparent',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          height: '10vh',
          minHeight: '70px',
          maxHeight: '200px',
          maxWidth: { xs: '100%', md: '100%', lg: 'none' },
          // backgroundColor: 'transparent',
          // backgroundColor: colorCodes.background.default,
          // opacity: '0.5',
          // backgroundColor: `${colorCodes.background.default}4D`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Link to="/calender/show">
              <img
                src={logo}
                alt="Calender-Signage"
                height="50px"
                width="50px"
              />
            </Link>
            <Typography
              sx={{
                fontSize: '25px',
                color: colorCodes.text.emphasis,
                fontWeight: 'bold',
              }}
            >
              株式会社京和設備
            </Typography>
          </Stack>
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
                <ListItem key={navLink.url} disablePadding>
                  <ListItemButton
                    to={navLink.url}
                    component={Link}
                    sx={{
                      textAlign: 'center',
                      display: { xs: 'none', md: 'block' },
                      color: colorCodes.text.default,
                      // fontWeight: 'bold',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            whiteSpace: 'nowrap',
                            fontSize: '13px',
                          }}
                        >
                          {navLink.text}
                        </Typography>
                      }
                    />
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
                <ListItem key={navLink.url} disablePadding>
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
