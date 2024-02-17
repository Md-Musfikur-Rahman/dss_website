import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  StackProps,
  Grid,
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';
import { varFade, MotionViewport } from '../../components/animate';
import { PATH_PAGE } from 'src/routes/paths';
import { _homePlans } from 'src/_mock/arrays';
import PricingQuote from './PricingQuote';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Description />
        <Content />
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="h1">The right plan</Typography>
        <Typography variant="h2">for your business</Typography>
        <Typography variant="body1" sx={{ my: 2, maxWidth: '75%', mx: 'auto' }}>
          Finding the right plan for your business is crucial for its success. At Devsite Studio, we
          understand that every business is unique, with its own set of goals, challenges, and
          requirements. That's why we offer a range of customizable plans tailored to suit your
          specific needs.
        </Typography>
      </m.div>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Content() {
  const isDesktop = useResponsive('up', 'md');

  const [currentTab, setCurrentTab] = useState('Essential');

  const desktopList = (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{ borderRadius: 2, border: (theme) => `dashed 1px ${theme.palette.divider}` }}
    >
      {_homePlans.map((plan) => (
        <m.div key={plan.license} variants={varFade().in}>
          <PlanCard key={plan.license} plan={plan} />
        </m.div>
      ))}
    </Box>
  );

  const mobileList = (
    <>
      <Stack alignItems="center" sx={{ mb: 5 }}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {_homePlans.map((tab) => (
            <Tab key={tab.license} value={tab.license} label={tab.license} />
          ))}
        </Tabs>
      </Stack>

      <Box
        sx={{
          borderRadius: 2,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {_homePlans.map(
          (tab) =>
            tab.license === currentTab && (
              <PlanCard
                key={tab.license}
                plan={tab}
                sx={{ borderLeft: (theme) => `dashed 1px ${theme.palette.divider}` }}
              />
            )
        )}
      </Box>
    </>
  );

  return (
    <>
      {isDesktop ? desktopList : mobileList}

      <m.div variants={varFade().inDown}>
        <Box
          sx={{
            p: 5,
            mt: 10,
            mb: 5,
            borderRadius: 2,
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', mb: 5 }}>
                <m.div variants={varFade().inUp}>
                  <Typography variant="h4">Need a custom solution ?</Typography>
                </m.div>
                <Box
                  sx={{
                    left: 0,
                    bottom: 4,
                    width: 40,
                    height: 8,
                    opacity: 0.48,
                    bgcolor: 'info.main',
                    position: 'absolute',
                  }}
                />
              </Box>
              {custom.map((option) => (
                <Stack key={option} spacing={1} direction="row" alignItems="center">
                  <Iconify icon="eva:checkmark-fill" width={16} />
                  <Typography variant="body2">{option}</Typography>
                </Stack>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <PricingQuote />
            </Grid>
          </Grid>
        </Box>
      </m.div>

      <m.div variants={varFade().in}>
        <Box
          sx={{
            textAlign: 'center',
            mt: {
              xs: 5,
              md: 10,
            },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h4">Still have questions?</Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
              Please describe your case in detail to receive the most accurate advice from our
              experienced team of professionals. Whether you're facing technical challenges, seeking
              guidance on project management, or looking for strategic insights to grow your
              business, we're here to help. The more information you provide, the better equipped
              we'll be to offer tailored solutions that meet your needs and exceed your
              expectations.
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

// ----------------------------------------------------------------------

interface PlanCardProps extends StackProps {
  plan: {
    license: string;
    commons: string[];
    options: string[];
    icons: string[];
  };
}

function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  const { license, commons, options, icons } = plan;

  const standard = license === 'Essential';

  const plus = license === 'Enhanced';

  return (
    <Stack
      spacing={5}
      sx={{
        p: 5,
        pt: 10,
        ...(plus && {
          borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...sx,
        }),
      }}
      {...other}
    >
      <Stack spacing={2}>
        <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
          Package
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Typography variant="h4">{license}</Typography>
          <Box
            sx={{
              left: 0,
              bottom: 4,
              width: 40,
              height: 8,
              opacity: 0.48,
              bgcolor: 'error.main',
              position: 'absolute',
              ...(standard && { bgcolor: 'primary.main' }),
              ...(plus && { bgcolor: 'warning.main' }),
            }}
          />
        </Box>
      </Stack>

      {standard ? (
        <SvgColor src={icons[2]} sx={{ width: 24, height: 24 }} />
      ) : (
        <Stack direction="row" spacing={2}>
          {icons.map((icon) => (
            <SvgColor key={icon} src={icon} sx={{ width: 24, height: 24 }} />
          ))}
        </Stack>
      )}

      <Stack spacing={2.5}>
        {commons.map((option) => (
          <Stack key={option} spacing={1} direction="row" alignItems="center">
            <Iconify icon="eva:checkmark-fill" width={16} />
            <Typography variant="body2">{option}</Typography>
          </Stack>
        ))}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {options.map((option, optionIndex) => {
          const disabled =
            (standard && optionIndex > 0) || (plus && optionIndex >= options.length - 3);

          return (
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(disabled && { color: 'text.disabled' }),
              }}
              key={option}
            >
              <Iconify icon={disabled ? 'eva:close-fill' : 'eva:checkmark-fill'} width={16} />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack alignItems="flex-end">
        <Button
          color="inherit"
          size="small"
          target="_blank"
          rel="noopener"
          href={PATH_PAGE.calendly}
          endIcon={<Iconify icon="eva:chevron-right-fill" />}
        >
          Select package
        </Button>
      </Stack>
    </Stack>
  );
}

const custom = [
  'Customized features based on your needs',
  'Flexible pricing depending on requirements',
  'Get in touch for a personalized quote',
];
