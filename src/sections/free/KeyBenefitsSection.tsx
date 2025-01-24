import { Box, Typography, Grid } from '@mui/material';
import { m } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

export default function KeyBenefitsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      title: 'Professional Online Presence',
      description:
        'Establish credibility and showcase your brand with a sleek, modern website tailored to your business.',
      icon: <CheckCircle sx={{ fontSize: 50, color: 'success.main' }} />,
    },
    {
      title: 'Boost Customer Engagement',
      description:
        'Interactive designs and user-friendly interfaces help you connect with your customers more effectively.',
      icon: <CheckCircle sx={{ fontSize: 50, color: 'success.main' }} />,
    },
    {
      title: 'Increase Revenue Potential',
      description:
        'A conversion-focused website turns visitors into paying customers, driving revenue growth for your business.',
      icon: <CheckCircle sx={{ fontSize: 50, color: 'success.main' }} />,
    },
  ];

  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: 'background.paper' }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ mb: 6, fontWeight: 'bold', color: 'text.primary' }}
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Key Benefits
      </Typography>

      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              component={m.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                textAlign: 'center',
                p: 4,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: 'background.default',
              }}
            >
              <Box sx={{ mb: 3 }}>{benefit.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} color="text.primary">
                {benefit.title}
              </Typography>
              <Typography color="text.secondary">{benefit.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
