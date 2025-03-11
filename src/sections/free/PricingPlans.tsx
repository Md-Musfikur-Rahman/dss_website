import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { m } from 'framer-motion';

interface PricingPlanProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

const PricingCard = ({ title, description, features, price, isPopular }: PricingPlanProps) => {
  return (
    <Card
      component={m.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      sx={{
        p: 4,
        borderRadius: 3,
        boxShadow: isPopular
          ? '0px 12px 24px rgba(0, 123, 255, 0.3)'
          : '0px 6px 12px rgba(0, 0, 0, 0.1)',
        border: isPopular ? '2px solid #0056b3' : '1px solid #e0e0e0',
        background: isPopular
          ? 'linear-gradient(135deg, #007bff, #0056b3)'
          : 'linear-gradient(135deg, #f9f9f9, #ffffff)',
        color: isPopular ? 'common.white' : 'text.primary',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        {/* Plan Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 3,
            color: isPopular ? 'rgba(255, 255, 255, 0.9)' : '#333',
          }}
        >
          {title}
        </Typography>

        {/* Plan Description */}
        <Typography
          sx={{
            textAlign: 'center',
            mb: 2,
            fontSize: 16,
            color: isPopular ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
          }}
        >
          {description}
        </Typography>

        {/* Price */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 3,
            color: isPopular ? 'rgba(255, 255, 255, 0.95)' : '#007bff',
          }}
        >
          {price}
        </Typography>

        {/* Features List */}
        <Box
          component="ul"
          sx={{
            pl: 2,
            mb: 4,
            listStyle: 'none',
            textAlign: 'left',
            color: isPopular ? 'rgba(255, 255, 255, 0.9)' : '#555',
          }}
        >
          {features.map((feature, index) => (
            <Typography
              key={index}
              component="li"
              sx={{
                mb: 1,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: isPopular ? 'common.white' : '#007bff',
                  mr: 1.5,
                }}
              />
              {feature}
            </Typography>
          ))}
        </Box>

        {/* CTA Button */}
        <Button
          variant={isPopular ? 'contained' : 'outlined'}
          color={isPopular ? 'secondary' : 'primary'}
          fullWidth
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            py: 1.5,
            borderRadius: '20px',
            boxShadow: isPopular ? '0px 6px 12px rgba(255, 255, 255, 0.2)' : 'none',
            '&:hover': {
              background: isPopular ? 'rgba(255, 255, 255, 0.15)' : '#007bff',
              color: isPopular ? 'common.white' : '#fff',
            },
          }}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

export default function PricingSection() {
  const plans = [
    {
      title: 'Startup Package',
      description: 'Ideal for small businesses or startups.',
      price: 'BDT 15,000',
      features: [
        '1–100 products',
        'Basic theme customization',
        'SSL certificate for security',
        'Basic payment gateways (Bkash, Rocket, COD)',
        'Local shipping integrations',
        'Basic SEO tools',
        '1 custom domain (.com / .shop)',
        'Email-based customer support',
        '1 year of free hosting',
      ],
    },
    {
      title: 'Growth Package',
      description: 'For growing businesses with moderate product catalogs.',
      price: 'BDT 40,000',
      features: [
        'Up to 500 products',
        'Full theme customization',
        'Advanced payment gateway options',
        'Unlimited bandwidth and storage',
        'Inventory and order management tools',
        'Advanced shipping integrations and tracking',
        'Email marketing integration',
        'Google Analytics integration',
        'Priority customer support',
        'Multi-language support',
      ],
      isPopular: true,
    },
    {
      title: 'Full-Scale Solution',
      description: 'For large businesses looking to scale aggressively.',
      price: 'BDT 70,000',
      features: [
        'Unlimited products',
        'Fully custom website design',
        'Premium payment gateway integrations',
        'Mobile App (optional)',
        'Advanced SEO and marketing tools',
        'Loyalty programs, discounts, CRM tools',
        'Multi-currency support',
        'Advanced shipping integrations',
        'Business growth consulting (optional)',
        '24/7 customer support',
      ],
    },
  ];

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: 'background.default', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
        Pricing Plans
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary' }}>
        Choose a plan that suits your business needs and budget.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PricingCard {...plan} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
