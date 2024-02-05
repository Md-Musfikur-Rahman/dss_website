import { Box, Container, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

export default function Case() {
  return (
    <Container component={MotionViewport}>
      <Stack spacing={5} my={10}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2">Crafting Digital Success Stories</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="body1">
            Explore our successful web development project showcasing innovative solutions and
            cutting-edge technologies.
          </Typography>
        </m.div>
      </Stack>
    </Container>
  );
}
