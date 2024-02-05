// next
import Head from 'next/head';
// _mock_
import { _pricingPlans } from '../_mock/arrays';
// layouts
import MainLayout from '../layouts/main';
// sections
import { Container } from '@mui/material';
import { Pricing, PricingHero } from 'src/sections/pricing';
import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

PricingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function PricingPage() {
  return (
    <>
      <Head>
        <title> Pricing | Devsite Studio</title>
      </Head>

      <PricingHero />
      <Pricing />
    </>
  );
}
