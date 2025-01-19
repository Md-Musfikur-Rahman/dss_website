import { Stack, Typography, Box } from '@mui/material';
import { m } from 'framer-motion';
import { useEffect } from 'react';
import { MotionViewport, varFade } from 'src/components/animate';

export default function Meeting() {
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
    <Stack component={MotionViewport} spacing={5} sx={{ p: 2 }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">Schedule a meeting with us </Typography>
      </m.div>
      <Box
        className="calendly-inline-widget"
        data-url="https://calendly.com/wropseo/30min"
        style={{ width: '100%', height: 700 }}
      />
    </Stack>
  );
}
