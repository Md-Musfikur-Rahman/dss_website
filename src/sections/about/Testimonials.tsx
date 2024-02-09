import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, BoxProps, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { filterStyles, bgBlur, bgGradient } from '../../utils/cssStyles';
import { fDate } from '../../utils/formatTime';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import React from 'react';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    dateCreate: new Date(),
    content: `Excellent Work! Thanks a lot!`,
  },
  {
    name: 'Cody Fisher',
    rating: 5,
    dateCreate: new Date(),
    content: `It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.`,
  },
  {
    name: 'Marvin McKinney',
    rating: 5,
    dateCreate: new Date(),
    content: `Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !`,
  },
  {
    name: 'Darrell Steward',
    rating: 5,
    dateCreate: new Date(),
    content: `Amazing, really good code quality and gives you a lot of examples for implementations.`,
  },
  {
    name: 'Jacob Jones',
    rating: 5,
    dateCreate: new Date(),
    content: `Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!`,
  },
  {
    name: 'Bessie Cooper',
    rating: 5,
    dateCreate: new Date(),
    content: `CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!`,
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/images/about/testimonials.jpg',
  }),
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: 0,
    textAlign: 'left',
    overflow: 'hidden',
  },
  position: 'relative',
  '&:before': {
    height: 2,
    bottom: -1,
    zIndex: 11,
    content: '""',
    width: '100%',
    position: 'absolute',
  },
}));

const StyledWrap = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: alpha(theme.palette.grey[500], 0.08),
}));

const StyledDescription = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: theme.spacing(10),
  ...bgGradient({
    startColor: `${theme.palette.background.default} 25%`,
    endColor: alpha(theme.palette.background.default, 0),
  }),
  [theme.breakpoints.up('md')]: {
    background: 'unset',
    position: 'unset',
    textAlign: 'left',
    padding: theme.spacing(25, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Testimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <StyledWrap>
        <Container component={MotionViewport} sx={{ position: 'relative' }}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ height: 1 }}
          >
            <Grid item xs={10} md={4}>
              <StyledDescription>
                <Box sx={{ maxWidth: { md: 360 } }}>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{ mb: 2, color: 'text.secondary' }}
                    >
                      Testimonials
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                      Who love <br />
                      my work
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography sx={{ color: 'common.white' }}>
                      Our goal is to create a product and service that you’re satisfied with and use
                      it every day. This is why we’re constantly working on our services to make it
                      better every day and really listen to what our users has to say.
                    </Typography>
                  </m.div>

                  {!isDesktop && (
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                      <m.div variants={varFade().inUp}>
                        <TestimonialLink />
                      </m.div>
                    </Box>
                  )}
                </Box>
              </StyledDescription>
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              lg={6}
              sx={{
                right: { md: 24 },
                position: { md: 'absolute' },
              }}
            >
              <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                    <m.div key={testimonial.name} variants={varFade().inUp}>
                      <TestimonialCard testimonial={testimonial} />
                    </m.div>
                  ))}
                </Grid>

                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                    <m.div key={testimonial.name} variants={varFade().inUp}>
                      <TestimonialCard testimonial={testimonial} />
                    </m.div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {isDesktop && (
            <Box sx={{ bottom: 60, position: 'absolute' }}>
              <m.div variants={varFade().inLeft}>
                <TestimonialLink />
              </m.div>
            </Box>
          )}
        </Container>
        <TriangleShape />
        <TriangleShape anchor="bottom" />
      </StyledWrap>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type TestimonialCardProps = {
  testimonial: {
    name: string;
    rating: number;
    content: string;
    dateCreate: Date;
  };
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>

      <Typography gutterBottom component="div" variant="caption" sx={{ color: 'grey.500' }}>
        {fDate(dateCreate)}
      </Typography>

      <Rating value={rating} readOnly size="small" />

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon="ic:round-arrow-right-alt" sx={{ ml: 1 }} />
    </Link>
  );
}

// ----------------------------------------------------------------------

interface TriangleShapeProps extends BoxProps {
  anchor?: 'top' | 'bottom';
}

function TriangleShape({ anchor = 'top', ...other }: TriangleShapeProps) {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: 1,
        position: 'absolute',
        color: 'background.default',
        zIndex: { xs: 0, md: 9 },
        height: { xs: 40, md: 64 },
        ...filterStyles(
          `drop-shadow(320px 20px 80px ${
            isLight ? alpha(theme.palette.grey[700], 0.4) : theme.palette.common.black
          })`
        ),
        ...(anchor === 'bottom' && {
          zIndex: 9,
          bottom: 0,
          top: 'unset',
          color: 'grey.900',
          transform: 'scale(-1)',
          ...filterStyles('none'),
        }),
      }}
      {...other}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M1440 0H0L1440 64V0Z" fill="currentColor" />
      </svg>
    </Box>
  );
}
