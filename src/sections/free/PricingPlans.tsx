import { Box, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import { m } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
}

const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  buttonLink,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <Card
      component={m.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: isPopular
          ? '0px 8px 20px rgba(0, 0, 0, 0.2)'
          : '0px 4px 10px rgba(0, 0, 0, 0.1)',
        border: isPopular ? '2px solid #007BFF' : '1px solid #ddd',
        backgroundColor: isPopular ? 'primary.light' : 'background.paper',
        color: isPopular ? 'common.white' : 'text.primary',
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            color: isPopular ? 'common.white' : 'primary.main',
          }}
        >
          {price}
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 3, listStyle: 'none', textAlign: 'center' }}>
          {features.map((feature, index) => (
            <Typography
              key={index}
              component="li"
              sx={{
                mb: 1,
                fontSize: 16,
                color: isPopular ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary',
              }}
            >
              {feature}
            </Typography>
          ))}
        </Box>
        <Button
          href={buttonLink}
          variant={isPopular ? 'contained' : 'outlined'}
          color={isPopular ? 'secondary' : 'primary'}
          fullWidth
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function PricingSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: 'background.default',
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        sx={{
          fontWeight: 'bold',
          mb: 4,
        }}
      >
        Affordable Pricing Plans
      </Typography>
      <Typography
        variant="body1"
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        sx={{
          mb: 6,
          color: 'text.secondary',
        }}
      >
        Choose a plan that works best for your business. No hidden fees, no surprises.
      </Typography>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Basic"
            price="$29/month"
            features={['1 Website', 'Basic Support', '5 GB Storage']}
            buttonText="Choose Basic"
            buttonLink="#"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Pro"
            price="$59/month"
            features={['5 Websites', 'Priority Support', '20 GB Storage']}
            buttonText="Choose Pro"
            buttonLink="#"
            isPopular
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={['Unlimited Websites', '24/7 Support', 'Unlimited Storage']}
            buttonText="Contact Us"
            buttonLink="#"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
