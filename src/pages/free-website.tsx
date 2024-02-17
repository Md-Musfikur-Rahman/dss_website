import Head from 'next/head';
import MainLayout from '../layouts/main';
import { Container, Box, Typography } from '@mui/material';
import { FreeHero, FreeList, FreeMeet } from 'src/sections/free';

FreeWebsite.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function FreeWebsite() {
  return (
    <>
      <Head>
        <title> Get Website | Devsite Studio</title>
        <meta
          name="description"
          content="For a limited time, Devsite Studio is offering free website development. Don't miss this opportunity to establish your online presence without breaking the bank."
        />
      </Head>
      <FreeHero />

      <Container sx={{ py: 10 }}>
        <Typography variant="h1" sx={{ my: 3 }}>
          For a limited time
        </Typography>

        <Typography variant="body1" sx={{ my: 3, maxWidth: '85%' }}>
          Devsite Studio is excited to announce a special promotion for a limited time only! We are
          offering free website development services to help you kickstart your online presence
          without any upfront costs. Whether you're a small business, a startup, or an individual
          looking to showcase your work, this is the perfect opportunity to get a professional
          website without breaking the bank.
        </Typography>

        <FreeList />
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          <FreeMeet />
        </Box>

        <Typography variant="body1" sx={{ my: 3, maxWidth: '85%' }}>
          Don't miss out on this incredible offer from Devsite Studio. Take advantage of our
          expertise and creativity to bring your ideas to life on the web. Contact us today to learn
          more about how you can get started with your free website development project!
        </Typography>
      </Container>
    </>
  );
}
