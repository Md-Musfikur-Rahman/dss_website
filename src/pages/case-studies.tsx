// next
import Head from 'next/head';
// layouts
import MainLayout from '../layouts/main';
// sections
import { Case, CaseCard, CaseHero } from 'src/sections/case';
import { AboutTestimonials } from 'src/sections/about';

// ----------------------------------------------------------------------

CaseStudy.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title> Case Study | Devsite Studio</title>
      </Head>

      <CaseHero />

      <Case />

      <CaseCard />

      <AboutTestimonials />
    </>
  );
}
