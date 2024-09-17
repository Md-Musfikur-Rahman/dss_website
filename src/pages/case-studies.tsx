// next
import Head from 'next/head';
// layouts
import MainLayout from '../layouts/main';
// sections
import { Case, CaseHero } from 'src/sections/case';
import { AboutTestimonials } from 'src/sections/about';
import { Container, Box } from '@mui/material';
import { ContactForm } from 'src/sections/contact';

// ----------------------------------------------------------------------

CaseStudy.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title> Case Study | Wropseo</title>
        <meta
          name="description"
          content="Explore how  Wropseo turned ambitious concepts into successful digital solutions, delivering innovative designs and cutting-edge development. Learn more about our process, challenges faced, and the remarkable outcomes achieved."
        />
      </Head>

      <CaseHero />

      <Case />

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
