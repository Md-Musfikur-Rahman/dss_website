import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Logo from 'src/components/logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/website" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box
              component="img"
              src="/assets/images/home/wropseo-logo.png"
              sx={{ width: 80, height: 80, cursor: 'pointer' }}
            />
          </Link>
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Link href="#services" passHref>
            <Button color="inherit">Services</Button>
          </Link>
          <Link href="#testimonials" passHref>
            <Button color="inherit">Testimonials</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
          <Button variant="contained" color="primary" href="#cta">
            Get Started
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            backgroundColor: 'white',
            position: 'absolute',
            top: '64px',
            width: '100%',
            zIndex: 10,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Link href="#services" passHref>
            <Button color="inherit" sx={{ justifyContent: 'flex-start' }}>
              Services
            </Button>
          </Link>
          <Link href="#testimonials" passHref>
            <Button color="inherit" sx={{ justifyContent: 'flex-start' }}>
              Testimonials
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button color="inherit" sx={{ justifyContent: 'flex-start' }}>
              Contact
            </Button>
          </Link>
          <Button variant="contained" color="primary" href="#cta" sx={{ margin: '8px' }}>
            Get Started
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
