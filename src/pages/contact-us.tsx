// next
import Head from 'next/head';
// @mui
import { Container, Box, Typography, Divider } from '@mui/material';
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
        <Typography variant="h1" sx={{ my: 3 }}>
          Get in touch with Devsite Studio
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: '85%' }}>
          Devsite Studio is committed to providing top-notch web development services tailored to
          meet your specific needs. Whether you're a small business looking to establish your online
          presence or a large corporation in need of a website overhaul, we've got you covered. Our
          team of experienced developers and designers is dedicated to delivering high-quality,
          responsive websites that not only look great but also perform exceptionally well. Get in
          touch with us today to kickstart your web development journey with Devsite Studio!
        </Typography>

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 20 }} />

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

        <Typography variant="body1" sx={{ my: 3, maxWidth: '85%' }}>
          Don't hesitate to reach out to us for any inquiries, support, or to schedule a
          consultation. We value open communication and are always eager to hear from our clients.
          Your satisfaction is our top priority, and we'll go above and beyond to ensure that your
          experience with Devsite Studio is nothing short of excellent. Contact us now and let's
          turn your vision into reality!
        </Typography>
      </Container>
    </>
  );
}
