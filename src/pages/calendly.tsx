import Head from 'next/head';
import MainLayout from '../layouts/main';
import { Meeting, MeetingHero } from '../sections/meeting';
import { Container, Box } from '@mui/material';
import { AboutTestimonials } from 'src/sections/about';

Calendly.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Calendly() {
  return (
    <>
      <Head>
        <title> Get started | Devsite Studio</title>
        <meta
          name="description"
          content="Schedule a meeting with Devsite Studio to discuss your project requirements. Let's collaborate and bring your vision to life."
        />
      </Head>
      <MeetingHero />
      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          <Meeting />
        </Box>
      </Container>

      <AboutTestimonials />
    </>
  );
}
