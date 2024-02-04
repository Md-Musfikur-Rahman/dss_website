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
        <Typography variant="h3" sx={{ my: 3 }}>
          Meet the Founders: Driving Success Through Collaboration
        </Typography>
      </m.div>
      <Founders />

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
          At Devsite Studio, expect top-notch support and thorough documentation from our dedicated
          team.
        </Typography>
      </m.div>

      <TeamMember />
    </Container>
  );
}
