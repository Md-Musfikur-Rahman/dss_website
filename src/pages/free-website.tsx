import Head from 'next/head';
import MainLayout from '../layouts/main';
import { Container, Box } from '@mui/material';
import { FreeHero, FreeList, FreeMeet } from 'src/sections/free';

FreeWebsite.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function FreeWebsite() {
  return (
    <>
      <Head>
        <title> Get Website | Devsite Studio</title>
      </Head>
      <FreeHero />

      <Container sx={{ py: 10 }}>
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
      </Container>
    </>
  );
}
