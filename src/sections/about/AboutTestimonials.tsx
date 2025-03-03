import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur, bgGradient } from '../../utils/cssStyles';
import { fDate } from '../../utils/formatTime';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Alex Verdieu',
    rating: 5,
    date: 'Oct 8, 2024 - Nov 6, 2024',
    content: `Wix Website Redesign for a Local Beauty Business - "Great man, very helpful and he is willing to go the extra mile."`,
  },
  {
    name: 'Viziune C',
    rating: 4.5,
    date: 'Sep 10, 2024 - Nov 4, 2024',
    content: `WordPress Tweaks required and updates - "Great man, very helpful and he is willing to go the extra mile."`,
  },
  {
    name: 'Paul Walker',
    rating: 5,
    date: 'Oct 8, 2024 - Oct 29, 2024',
    content: `Update WordPress Website pages to match Elementor Page templates - "Excellent service, timely updates, and flawless execution."`,
  },
  {
    name: 'Keenan Jacobus',
    rating: 5,
    date: 'Aug 31, 2024 - Sep 30, 2024',
    content: `WordPress Developer Needed to Set Up ACF & Elementor for Bulk Editing and Page Creation - "Highly skilled and efficient. Delivered exactly what was needed."`,
  },
  {
    name: 'Mahesh Govindraj',
    rating: 5,
    date: 'Aug 17, 2024 - Sep 14, 2024',
    content: `Responsive WordPress Website Development Using Elementor with booking/payment functionality - "Great quality work! Everything works perfectly with seamless functionality."`,
  },
  {
    name: 'Dika Oha',
    rating: 5,
    date: 'Aug 31, 2024 - Sep 1, 2024',
    content: `One page design with Elementor - "I enjoyed working with him. His communication was top-notch, his skills were reasonably strong. I enjoyed working with Musfik and will likely have additional jobs for him in the future."`,
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
    height: 840,
    textAlign: 'left',
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
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
                  our work
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white' }}>
                  Our goal is to create a product and service that you’re satisfied with and use it
                  every day. This is why we’re constantly working on our services to make it better
                  every day and really listen to what our users has to say.
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

        {/* {isDesktop && (
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <m.div variants={varFade().inLeft}>
              <TestimonialLink />
            </m.div>
          </Box>
        )} */}
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type TestimonialCardProps = {
  testimonial: {
    name: string;
    rating: number;
    content: string;
    date: string;
  };
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const theme = useTheme();

  const { name, rating, date, content } = testimonial;

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
        {date}
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
