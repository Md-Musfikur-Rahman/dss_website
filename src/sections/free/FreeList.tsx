import { Box, Container, Stack, Typography, Card, Button } from '@mui/material';
import { PlanFreeIcon } from 'src/assets/icons';
import { MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

import { PATH_PAGE } from 'src/routes/paths';

export default function FreeList() {
  const _pricingPlans = [
    {
      subscription: 'Free Plan',
      price: 'Free',
      caption: 'No payment required',
      lists: [
        { text: 'WP Installation and Setup', isAvailable: true },
        { text: 'Custom WP Website with up to 5 pages', isAvailable: true },
        { text: 'Responsive Design', isAvailable: true },
        { text: 'Blog Setup', isAvailable: true },
        { text: 'Basic SEO Setup', isAvailable: true },
        { text: 'Image Gallery', isAvailable: true },
        { text: 'Image Optimization', isAvailable: true },
        { text: 'Integration with Google Analytics', isAvailable: true },
        { text: '1 Week of Support', isAvailable: true },
        { text: 'Domain & Hosting', isAvailable: false },
      ],
      labelAction: 'Get Started for Free',
    },
  ];

  const plan = _pricingPlans[0];

  return (
    <Container component={MotionViewport}>
      <Stack alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h3">{plan.subscription}</Typography>
      </Stack>

      <Box gap={3} mt={3} display="grid" gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}>
        <Box></Box>
        <Card
          sx={{
            p: 5,
            boxShadow: (theme) => theme.customShadows.z24,
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            {plan.subscription}
          </Typography>

          <Stack spacing={1} direction="row" sx={{ my: 2 }}>
            <Typography variant="h5">$</Typography>
            <Typography variant="h2">{plan.price}</Typography>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              color: 'primary.main',
              textTransform: 'capitalize',
            }}
          >
            {plan.caption}
          </Typography>

          <Box sx={{ width: 80, height: 80, mt: 5 }}>
            <PlanFreeIcon />
          </Box>

          <Stack component="ul" spacing={2} sx={{ p: 0, my: 5 }}>
            {plan.lists.map((item) => (
              <Stack
                key={item.text}
                component="li"
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  typography: 'body2',
                  color: item.isAvailable ? 'text.primary' : 'text.disabled',
                }}
              >
                <Iconify
                  icon={item.isAvailable ? 'eva:checkmark-fill' : 'eva:close-fill'}
                  width={16}
                  sx={{
                    color: item.isAvailable ? 'primary.main' : 'inherit',
                  }}
                />
                <Typography variant="body2">{item.text}</Typography>
              </Stack>
            ))}
          </Stack>

          <Button fullWidth size="large" variant="contained" href={PATH_PAGE.pricing}>
            {plan.labelAction}
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
