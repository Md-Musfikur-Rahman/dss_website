// next
import Head from 'next/head';
// @mui
import { Box, Container, Divider } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { AboutHero, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { ContactForm } from 'src/sections/contact';

// ----------------------------------------------------------------------

AboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Head>
        <title> About us | Devsite Studio</title>
        <meta
          name="description"
          content="Learn about the team behind Devsite Studio and our passion for creating stunning websites. Find out how we can help your business or individual project thrive online."
        />
      </Head>

      <AboutHero />

      <AboutTeam />

      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 20 }} />

      <AboutVision />

      <AboutTestimonials />

      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />
        </Box>
      </Container>
    </>
  );
}
