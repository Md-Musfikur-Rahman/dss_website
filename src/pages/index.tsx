import { m, useScroll, useSpring } from 'framer-motion';
// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeLookingFor,
  HomeAdvertisement,
  Pricing,
} from '../sections/home';

import { About, AboutTestimonials } from '../sections/about';
import CaseforHome from 'src/sections/case/CaseforHome';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Head>
        <title>Wropse Professional Web Development Services For SMB</title>
        <meta
          name="description"
          content="Build your online presence with our expert web development, web design, and SEO services. Get a free domain, hosting, SSL & more – start today!"
        />
      </Head>

      {progress}

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />

        <About />

        <AboutTestimonials />

        <CaseforHome />

        {/* <Pricing /> */}

        <HomeLookingFor />

        <HomeAdvertisement />
      </Box>
    </>
  );
}
