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
        <title>Wropse Professional Web Development Services For SMB</title>
        <meta
          name="description"
          content="Build your online presence with our expert web development, web design, and SEO services. Get a free domain, hosting, SSL & more – start today!"
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
