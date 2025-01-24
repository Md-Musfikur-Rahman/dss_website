import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4,
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={4}>
        {/* Brand Information */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/assets/images/home/wropseo-logo.png"
            sx={{ width: 80, height: 80, cursor: 'pointer' }}
          />
          <Typography variant="body2" sx={{ mt: 1 }}>
            Empowering businesses with custom web and app solutions. Let’s grow together!
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#services" underline="hover" color="inherit">
              Services
            </Link>
            <Link href="#testimonials" underline="hover" color="inherit">
              Testimonials
            </Link>
            <Link href="#faq" underline="hover" color="inherit">
              FAQ
            </Link>
            <Link href="#contact" underline="hover" color="inherit">
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Contact and Socials */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Email: contact@wropseo.com
          </Typography>
          <Typography variant="body2">Phone: +880 1234 567 890</Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Wropseo. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="/privacy-policy" underline="hover" color="inherit">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms-and-conditions" underline="hover" color="inherit">
            Terms & Conditions
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
