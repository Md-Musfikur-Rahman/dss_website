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
        <title> Contact us | Wropseo</title>
        <meta
          name="description"
          content="Get in touch with Wropseo to start your web development journey. Reach out for inquiries, support, or to schedule a consultation."
        />
      </Head>

      <ContactHero />

      <Container sx={{ py: 10 }}>
        <Typography variant="h1" sx={{ my: 3 }}>
          Get in touch with Devsite Studio
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: '85%' }}>
          Devsite Studio prides itself on its unwavering commitment to delivering exemplary web
          development services meticulously crafted to suit your individual requirements. Whether
          you're a burgeoning small business eager to carve out your digital footprint or a seasoned
          corporate entity seeking a comprehensive website revamp, rest assured, we are fully
          equipped to meet your needs. Our seasoned team of developers and designers brings a wealth
          of experience and expertise to the table, dedicated to creating not just visually
          captivating but also seamlessly functional websites. From intuitive user interfaces to
          robust backend systems, we ensure that every aspect of your website not only looks
          impeccable but also performs flawlessly. Take the first step towards realizing your
          digital ambitions today by reaching out to Devsite Studio and embarking on a
          transformative web development journey with us!
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
