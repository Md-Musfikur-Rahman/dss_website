import { m } from 'framer-motion';
import { Button, Typography, TextField, Stack } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';

export default function ContactForm() {
  return (
    <Stack component="form" action="https://formspree.io/f/xvoekaqb" method="POST">
      <Stack component={MotionViewport} spacing={5}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h3">
            Feel free to contact us. <br />
            We'll be glad to hear from you, buddy.
          </Typography>
        </m.div>

        <Stack spacing={3}>
          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Name" name="name" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Email" name="email" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Subject" name="subject" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField
              fullWidth
              label="Enter your message here."
              multiline
              rows={4}
              name="message"
            />
          </m.div>
        </Stack>

        <m.div variants={varFade().inUp}>
          <Button type="submit" size="large" variant="contained">
            Submit Now
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );
}
