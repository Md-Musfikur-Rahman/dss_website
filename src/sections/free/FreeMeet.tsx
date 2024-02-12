import { Stack, Typography, Box, Container } from '@mui/material';
import { m } from 'framer-motion';
import { useEffect } from 'react';
import { MotionViewport, varFade } from 'src/components/animate';

export default function FreeMeet() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container component={MotionViewport}>
      <Stack spacing={5} mt={10}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h3">Schedule a meeting with us </Typography>
        </m.div>
        <Box
          className="calendly-inline-widget"
          data-url="https://calendly.com/devsitestudio/client-meeting"
          style={{ width: '100%', height: 700 }}
        />
      </Stack>
    </Container>
  );
}
