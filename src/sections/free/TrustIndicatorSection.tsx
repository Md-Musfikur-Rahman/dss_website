import { Box, Typography, Grid, Container } from '@mui/material';
import { m } from 'framer-motion';

const TrustIndicatorSection = () => {
  return (
    <Box
      sx={{
        py: 8,

        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Trusted by Businesses Across the Country
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
          >
            We've helped over 50+ businesses grow with professional websites and increased sales.
            Join our trusted network today!
          </Typography>

          {/* Statistics & Logos */}
          <Grid container spacing={4} justifyContent="center">
            {/* Key Statistics */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold" color="primary">
                50+
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Happy Clients
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold" color="primary">
                1M+
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Products Sold
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold" color="primary">
                99%
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Satisfaction Rate
              </Typography>
            </Grid>
          </Grid>

          {/* Trusted Client Logos */}
          <Grid container spacing={2} sx={{ mt: 6 }} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <img
                src="https://aliishba.com/wp-content/uploads/2025/01/aliishba.png"
                alt="Aliishba"
                style={{ maxWidth: '50px', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="https://mawuacraft.shop/wp-content/uploads/2024/10/logo.jpeg"
                alt="mawuacraft"
                style={{ maxWidth: '50px', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="https://corporateboxbd.com/wp-content/uploads/2024/05/update-picture.png"
                alt="corporateboxbd"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="https://clinicalpharmacycourses.com/wp-content/uploads/2023/09/cropped-pharmacy-academy-logo-clinical-pharmacy-logo-300x300-removebg-preview-1.png"
                alt="clinicalpharmacycourses"
                style={{ maxWidth: '60px', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </m.div>
      </Container>
    </Box>
  );
};

export default TrustIndicatorSection;
