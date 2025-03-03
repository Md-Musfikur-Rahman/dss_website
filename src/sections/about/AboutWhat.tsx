import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import Link from 'next/link';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-start">
                {/* item 1 */}
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="wordpress"
                      src="/assets/images/about/what_1.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                {/* item 2 */}
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="wordpress plugins"
                      src="/assets/images/about/what_2.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
                {/* item 3 */}
                <Grid item xs={12} sm={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="wordpress plugins"
                      src="/assets/images/about/what_3.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
                {/* item 4 */}
                <Grid item xs={12} sm={6} mt={-12}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="wordpress"
                      src="/assets/images/about/what_4.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Who are <br /> Wropseo?
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                }}
              >
                Wropseo is a dynamic web development company dedicated to delivering custom
                solutions that align with your business needs and goals. We work with all platforms,
                offering flexibility to adapt to your unique requirements and budget. Whether you’re
                building a brand-new website or enhancing an existing one, we provide tailored
                strategies that ensure seamless functionality, enhanced user experience, and
                measurable growth. Our focus is on creating high-quality, scalable web solutions
                that meet customer demands and drive business success.
              </Typography>
            </m.div>

            <Box sx={{ my: 5 }}>
              {_skills.map((progress) => (
                <m.div key={progress.label} variants={varFade().inRight}>
                  <ProgressItem progress={progress} />
                </m.div>
              ))}
            </Box>

            <m.div variants={varFade().inRight}>
              <Link href="/about-us">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
                >
                  Check out our Team
                </Button>
              </Link>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type ProgressItemProps = {
  progress: {
    label: string;
    value: number;
  };
};

function ProgressItem({ progress }: ProgressItemProps) {
  const theme = useTheme();
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: theme.palette.primary.main },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}

const _skills = [
  {
    label: 'Website Development',
    value: 99.9,
  },
  // {
  //   label: 'WordPress Theme Customization',
  //   value: 90,
  // },
  // {
  //   label: 'WordPress Plugin Development',
  //   value: 85,
  // },
  {
    label: 'UI/UX Design',
    value: 90,
  },
  {
    label: 'Website SEO',
    value: 90,
  },
];
