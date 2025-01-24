import { Box, Button, Typography, Stack, Grid } from '@mui/material';
import { m } from 'framer-motion';

interface PrimaryCallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function PrimaryCallToAction({
  title = 'Ready to Elevate Your Business?',
  description = 'Take the first step toward growing your online presence. Choose a package that fits your needs, or grab our free ebook for actionable insights.',
  primaryButtonText = 'Get Started Now',
  secondaryButtonText = 'Download Free Ebook',
  primaryButtonLink = '#',
  secondaryButtonLink = '#',
  imageUrl = 'https://via.placeholder.com/400x500', // Replace with actual image
  imageAlt = 'Grow Your Business',
}: PrimaryCallToActionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: 3,
        background: 'linear-gradient(135deg, #007BFF 0%, #6610F2 100%)',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        borderRadius: 3,
        boxShadow: 5,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              lineHeight: 1.2,
              fontSize: { xs: 32, md: 48 },
              letterSpacing: '-0.5px',
            }}
            component={m.div}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
            }}
            component={m.div}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            {description}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            component={m.div}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href={primaryButtonLink}
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                px: 5,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {primaryButtonText}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href={secondaryButtonLink}
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                px: 5,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 1)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {secondaryButtonText}
            </Button>
          </Stack>
        </Grid>

        {/* Right Side: Image/Graphic */}
        <Grid item xs={12} md={6}>
          <Box
            component={m.div}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            sx={{
              width: '100%',
              maxWidth: 400,
              mx: { xs: 'auto', md: '0' },
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt={imageAlt}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 5,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
