// layouts
import { Typography } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import MainLayout from '../../layouts/main';
// sections
import { AboutWhat } from '.';

// ----------------------------------------------------------------------

About.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function About() {
  return (
    <>
      <AboutWhat />
      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 10 }}>
          Striving for excellence, we craft unrivaled products at Wropseo for an exceptional user
          experience.
        </Typography>
      </m.div>
    </>
  );
}
