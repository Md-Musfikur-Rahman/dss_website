// next
import Head from 'next/head';
// @mui
import { Container, Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { ContactHero, ContactForm } from '../sections/contact';
import { Meeting } from 'src/sections/meeting';

// ----------------------------------------------------------------------

ContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      <Head>
        <title> Contact us | Devsite Studio</title>
        <meta
          name="description"
          content="Get in touch with Devsite Studio to start your web development journey. Reach out for inquiries, support, or to schedule a consultation."
        />
      </Head>

      <ContactHero />

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

          {/* <ContactMap mapContact={_mapContact} /> */}
          <Meeting />
        </Box>
      </Container>
    </>
  );
}
