import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/career/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function CareerHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <Stack spacing={2} display="inline-flex" direction={isSmallScreen ? 'column' : 'row'}>
            <TextAnimate
              text="Explore"
              sx={{ color: 'primary.main' }}
              variants={varFade().inRight}
            />
            <TextAnimate
              text="Exciting"
              sx={{ color: 'primary.main' }}
              variants={varFade().inRight}
            />

            <TextAnimate text="Career" sx={{ color: 'common.white' }} />
            <TextAnimate text="Opportunities" sx={{ color: 'common.white' }} />
          </Stack>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Join us as the trusted expert for <br />
              Top brands, venues, and entertainers.
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
