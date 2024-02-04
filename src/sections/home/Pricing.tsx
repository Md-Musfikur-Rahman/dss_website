import { Container, Box, Typography, Button, Stack, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { _pricingPlans } from 'src/_mock/arrays';
import { PricingPlanCard } from '../pricing';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import { PATH_PAGE } from 'src/routes/paths';
import useResponsive from 'src/hooks/useResponsive';

export default function Pricing() {
  const isDesktop = useResponsive('up', 'md');

  const [currentTab, setCurrentTab] = useState('Essential');

  const desktopList = (
    <Container
      sx={{
        pt: 5,
        pb: 5,
        minHeight: 1,
      }}
    >
      <Box gap={3} mt={3} display="grid" gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}>
        {_pricingPlans.map((card, index) => (
          <PricingPlanCard key={card.subscription} card={card} index={index} />
        ))}
      </Box>
    </Container>
  );

  const mobileList = (
    <>
      <Stack alignItems="center" sx={{ mb: 5 }}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {_pricingPlans.map((tab) => (
            <Tab key={tab.subscription} value={tab.subscription} label={tab.subscription} />
          ))}
        </Tabs>
      </Stack>

      <Box gap={3} mt={3} display="grid" gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}>
        {_pricingPlans.map(
          (tab, index) =>
            tab.subscription === currentTab && (
              <PricingPlanCard key={tab.subscription} card={tab} index={index} />
            )
        )}
      </Box>
    </>
  );
  return (
    <>
      <Typography variant="h3" align="center" paragraph mt={10}>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align="center" mt={3} sx={{ color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic
      </Typography>

      {isDesktop ? desktopList : mobileList}

      <m.div variants={varFade().in}>
        <Box
          sx={{
            textAlign: 'center',
            mt: 5,
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h4">Still have questions?</Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
              Please describe your case to receive the most accurate advice.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Button
                color="inherit"
                size="large"
                variant="outlined"
                rel="noopener"
                href={PATH_PAGE.faqs}
              >
                Ask
              </Button>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                href={PATH_PAGE.contact}
                sx={{
                  bgcolor: 'text.primary',
                  color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                  '&:hover': {
                    bgcolor: 'text.primary',
                  },
                }}
              >
                Contact us
              </Button>
            </Stack>
          </m.div>
        </Box>
      </m.div>
    </>
  );
}
