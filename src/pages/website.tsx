import Head from 'next/head';
import MainLayout from '../layouts/main';
import { Container } from '@mui/material';
import dynamic from 'next/dynamic';
import { m } from 'framer-motion';
import {
  Header,
  HeroSection,
  TrustIndicatorSection,
  ProblemSolutionSection,
  KeyBenefitsSection,
  CaseStudy,
  ClientTestimonials,
  PrimaryCallToAction,
  FAQSection,
  Footer,
  PricingSection,
} from 'src/sections/free';

// Lazy Loaded Sections
// const HeroSection = dynamic(() => import('src/sections/free/HeroSection'));
// const TrustIndicatorSection = dynamic(() => import('src/sections/free/TrustIndicatorSection'));
// const ProblemSolutionSection = dynamic(() => import('src/sections/free/ProblemSolutionSection'));
// const KeyBenefitsSection = dynamic(() => import('src/sections/free/KeyBenefitsSection'));
// const CaseStudy = dynamic(() => import('src/sections/free/CaseStudy'));
// const ClientTestimonials = dynamic(() => import('src/sections/free/ClientTestimonials'));
// const PrimaryCallToAction = dynamic(() => import('src/sections/free/PrimaryCTA'));
// const FAQSection = dynamic(() => import('src/sections/free/FAQSection'));

// FreeWebsite.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function FreeWebsite() {
  return (
    <>
      <Head>
        <title>Boost Your Business with a Website | Wropseo</title>
        <meta name="title" content="Boost Your Business with a Website | Wropseo" />
        <meta
          name="description"
          content="Get a professionally designed website tailored to grow your business. Don't miss this chance to establish your online presence with Wropseo."
        />
      </Head>

      <Header />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <HeroSection />

        <TrustIndicatorSection />

        {/* Problem-Solution Section */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProblemSolutionSection />
        </m.div>

        {/* Features Section */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <KeyBenefitsSection />
        </m.div>

        <CaseStudy />

        {/* Testimonials Section */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ClientTestimonials />
        </m.div>

        <PricingSection />

        {/* Primary CTA */}
        <PrimaryCallToAction />

        {/* FAQ Section */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FAQSection />
        </m.div>
      </Container>
      <Footer />
    </>
  );
}
