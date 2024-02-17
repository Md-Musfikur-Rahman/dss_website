// next
import Head from 'next/head';
// _mock_

// layouts
import MainLayout from '../layouts/main';
// sections

import { Pricing, PricingHero } from 'src/sections/pricing';

// ----------------------------------------------------------------------

PricingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function PricingPage() {
  return (
    <>
      <Head>
        <title> Pricing | Devsite Studio</title>
        <meta
          name="description"
          content="Explore our transparent pricing structure for web development services at Devsite Studio. Discover the right package for your budget and needs."
        />
      </Head>

      <PricingHero />
      <Pricing />
    </>
  );
}
