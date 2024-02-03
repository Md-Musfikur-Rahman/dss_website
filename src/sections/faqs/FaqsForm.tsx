import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
//
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Stack component="form" action="https://formspree.io/f/xpzvpdlr" method="POST">
      <Stack component={MotionViewport} spacing={3}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h4">Haven't found the right help?</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Name" name="name" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Email" name="_replyto" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Subject" name="_subject" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Enter your message here." multiline rows={4} name="message" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <Button type="submit" size="large" variant="contained">
            Submit Now
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );
}
