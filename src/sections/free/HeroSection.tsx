import { Box, Button, Typography, Grid, Container } from '@mui/material';
import { m } from 'framer-motion';

const HeroSection = () => {
  return (
    <Grid container spacing={4} alignItems="center">
      {/* Text Content */}
      <Grid item xs={12} md={6}>
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Grow Your Business <br />
            Increase Sales <br /> Build Trust
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ mb: 4, maxWidth: 400 }}>
            Transform your Facebook-based store into a professional website that helps you reach
            more customers and increase revenue.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, mr: 2 }}
            href="#pricing"
          >
            Get Your Website Now
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ px: 4 }} href="#ebook">
            Download Free Ebook
          </Button>
        </m.div>
      </Grid>

      {/* Hero Image */}
      <Grid item xs={12} md={6}>
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/images/home/zone_landing.png"
            alt="Grow Your Business"
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />
        </m.div>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
