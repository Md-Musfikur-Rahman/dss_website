// next
import Head from 'next/head';
// @mui
import { Divider } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import {
  AboutHero,
  AboutWhat,
  AboutTeam,
  AboutVision,
  AboutTestimonials,
  TeamMember,
} from '../sections/about';

// ----------------------------------------------------------------------

AboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Head>
        <title> About us | Devsite Studio</title>
      </Head>

      <AboutHero />

      {/* <AboutWhat /> */}

      <AboutTeam />

      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 20 }} />

      <AboutVision />

      <AboutTestimonials />
    </>
  );
}
