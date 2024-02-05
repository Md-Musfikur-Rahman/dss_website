import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack, MenuItem, Select } from '@mui/material';
//
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

export default function WebDevelopmentQuote() {
  return (
    <Stack component="form" action="https://formspree.io/f/xjvnyoyg" method="POST">
      <Stack component={MotionViewport} spacing={3}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h4">Get Your Quote Now </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Your Name" name="name" placeholder="Enter your name" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Your Email" name="_replyto" placeholder="Enter your email" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Project Title"
            name="_subject"
            placeholder="Enter project title"
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Tell us about your project"
            multiline
            rows={4}
            name="message"
            placeholder="Enter details about your project"
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <Select fullWidth label="Select Tech Stack" name="techStack" defaultValue="sst">
            <MenuItem value="sst" disabled>
              Select Tech Stack
            </MenuItem>
            <MenuItem value="wordpress">WordPress</MenuItem>
            <MenuItem value="react">Custom with React.js</MenuItem>
            <MenuItem value="next">Custom with Next.js</MenuItem>
          </Select>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Button type="submit" size="large" variant="contained">
            Get Quote
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );
}
