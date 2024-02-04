import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'WordPress Branding',
    description:
      'Establish a unique online identity with our specialized WordPress design and development services.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'WordPress Theme Customization',
    description:
      'Transform your website with our responsive and user-friendly WordPress themes, tailored to your specific requirements.',
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'WordPress Development Solutions',
    description:
      'Harness the power of WordPress with our comprehensive development solutions, enabling seamless customization and scalability for your web projects.',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: 5,
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              How
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Devsite Studio <br /> helps you?
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
