// layouts
import MainLayout from '../../layouts/main';
// sections
import { AboutWhat, AboutVision } from './';

// ----------------------------------------------------------------------

About.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function About() {
  return (
    <>
      <AboutWhat />

      <AboutVision />
    </>
  );
}
