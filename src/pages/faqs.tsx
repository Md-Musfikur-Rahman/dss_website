// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsList, FaqsForm } from '../sections/faqs';

// ----------------------------------------------------------------------

FaqsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function FaqsPage() {
  return (
    <>
      <Head>
        <title> Faqs | Wropseo</title>
        <meta
          name="description"
          content="Find answers to commonly asked questions about Wropseo's services, processes, and more. Get the information you need to make informed decisions."
        />
      </Head>

      <FaqsHero />

      <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
        {/* <FaqsCategory /> */}

        <Typography variant="h1" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />

          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
