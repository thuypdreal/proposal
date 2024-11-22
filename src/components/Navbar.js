import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const pages = [
  { title: 'Trang chủ', path: '/', icon: <HomeIcon /> },
  { title: 'Tra cứu hóa đơn', path: '/search', icon: <SearchIcon /> },
  { title: 'Hướng dẫn', path: '/guide', icon: <InfoIcon /> }
];

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {pages.map((page) => (
          <ListItem 
            button 
            key={page.title}
            onClick={() => {
              navigate(page.path);
              handleDrawerToggle();
            }}
          >
            <ListItemIcon>
              {page.icon}
            </ListItemIcon>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ReceiptIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HÓA ĐƠN ĐIỆN TỬ
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <ReceiptIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HDDT
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                  startIcon={page.icon}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;