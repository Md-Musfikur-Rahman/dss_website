import { m } from 'framer-motion';
// @mui
import { Button, Container, Typography } from '@mui/material';
// _mock_
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { TeamMember } from '.';
import { PATH_PAGE } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function AboutTeam() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10, textAlign: 'center' }}>
      {/* Founders 
      <m.div variants={varFade().inUp}>
        <Typography variant="h1" sx={{ my: 3 }}>
          Meet the Leaders
        </Typography>
        <Typography variant="h3" sx={{ my: 3 }}>
          Driving Success Through Collaboration
        </Typography>
      </m.div>

      <Founders />*/}

      <m.div variants={varFade().inDown}>
        <Typography component="p" variant="overline" sx={{ color: 'text.disabled', mt: 10 }}>
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Unlocking success with teamwork
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
          }}
        >
          At Wropseo, expect top-notch support and thorough documentation from our dedicated team.
        </Typography>
      </m.div>

      <TeamMember />

      <Button
        variant="outlined"
        color="inherit"
        size="large"
        href={PATH_PAGE.career}
        endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
        sx={{ mx: 'auto', mt: 5 }}
      >
        Interested in joining{' '}
      </Button>
    </Container>
  );
}
