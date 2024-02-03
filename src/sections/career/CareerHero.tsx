import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Grid } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const JobPositions = [
  {
    title: 'Software Engineer',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Proficiency in JavaScript, HTML, and CSS',
      'Experience with React.js and Node.js',
    ],
    applyLink: '/apply/software-engineer',
  },
  {
    title: 'Marketing Manager',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    requirements: [
      "Bachelor's degree in Marketing or related field",
      'Experience in digital marketing strategies',
      'Excellent communication skills',
    ],
    applyLink: '/apply/marketing-manager',
  },
  {
    title: 'Graphic Designer',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    requirements: [
      "Bachelor's degree in Graphic Design or related field",
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio of design work',
    ],
    applyLink: '/apply/graphic-designer',
  },
  {
    title: 'Customer Support Specialist',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    requirements: [
      'High school diploma or equivalent',
      'Experience in customer service',
      'Excellent communication and problem-solving skills',
    ],
    applyLink: '/apply/customer-support-specialist',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/contact/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function CareerHero() {
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <Stack spacing={2} direction="row">
            <TextAnimate
              text="Explore"
              sx={{ color: 'primary.main' }}
              variants={varFade().inRight}
            />
            <TextAnimate
              text="Exciting"
              sx={{ color: 'primary.main' }}
              variants={varFade().inRight}
            />
          </Stack>
          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate text="Career " />
            <TextAnimate text="Opportunities" />
          </Stack>

          <Grid container spacing={5} sx={{ mt: 5, color: 'common.white' }}>
            {JobPositions.map((contact) => (
              <Grid
                key={contact.title}
                item
                xs={12}
                sm={6}
                md={3}
                lg={2}
                sx={{
                  pr: {
                    md: 5,
                  },
                }}
              >
                <m.div variants={varFade().in}>
                  <Typography variant="h6" paragraph>
                    {contact.title}
                  </Typography>
                </m.div>

                <m.div variants={varFade().inRight}>
                  <Typography variant="body2">
                    {contact.location}
                    <br /> {contact.description}
                  </Typography>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
