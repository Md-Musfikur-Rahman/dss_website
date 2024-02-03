import { m } from 'framer-motion';
// @mui
import { Button, Container, Typography } from '@mui/material';
// _mock_
import { _carouselsMembers } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { TeamMember, Founders } from './';

// ----------------------------------------------------------------------

export default function AboutTeam() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10, textAlign: 'center' }}>
      {/* Founders */}
      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ my: 1 }}>
          Meet the Founders: Driving Success Through Collaboration
        </Typography>
      </m.div>
      <Founders />

      <m.div variants={varFade().inDown}>
        <Typography component="p" variant="overline" sx={{ color: 'text.disabled' }}>
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
          At Devsite Studio, expect top-notch support and thorough documentation from our dedicated
          team.
        </Typography>
      </m.div>

      <TeamMember />

      {/* <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
        sx={{ mx: 'auto' }}
      >
        View all team members
      </Button> */}
    </Container>
  );
}
