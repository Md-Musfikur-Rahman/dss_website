// next
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
// @mui
import { Box } from '@mui/material';
//
const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Head>
        <title>DEVSITE Studio: Your Vision, Our Web Expertise</title>
        <meta
          name="description"
          content="Discover the power of seamless web development with Devsite Studio. From WordPress to custom websites, we craft digital experiences that elevate your online presence."
        />
      </Head>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 11 },
          }),
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
