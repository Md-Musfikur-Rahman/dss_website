// next
import Head from 'next/head';
// @mui
import { Container, Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { CareerHero, CareerList } from '../sections/career';

// ----------------------------------------------------------------------

ContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      <Head>
        <title> Career | Devsite Studio</title>
      </Head>

      <CareerHero />

      <Container sx={{ py: 10 }}>
        <Box gap={10} display="grid">
          <CareerList />
        </Box>
      </Container>
    </>
  );
}
