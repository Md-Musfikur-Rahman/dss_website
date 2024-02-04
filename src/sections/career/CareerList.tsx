// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  useTheme,
} from '@mui/material';
// components
import Iconify from '../../components/iconify';
import SendIcon from '@mui/icons-material/Send';

// ----------------------------------------------------------------------
const JobPositions = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    description:
      'We are seeking a talented Frontend Developer to join our remote team. In this role, you will be responsible for building user interfaces and interactive web applications using modern frontend technologies.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Proficiency in HTML, CSS, and JavaScript',
      'Experience with frontend frameworks such as React or Vue.js',
    ],
    applyLink: '/apply/frontend-developer',
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Remote',
    description:
      'We are looking for a skilled Digital Marketing Specialist to drive our online marketing efforts. The ideal candidate will have experience in developing and implementing digital marketing strategies to enhance brand awareness and generate leads.',
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      'Proven experience in digital marketing campaigns',
      'Strong analytical and creative skills',
    ],
    applyLink: '/apply/digital-marketing-specialist',
  },
  {
    title: 'UX/UI Designer',
    location: 'Remote',
    description:
      'Join our remote team as a UX/UI Designer and help us create intuitive and visually appealing user experiences. In this role, you will collaborate with cross-functional teams to design and prototype user interfaces for web and mobile applications.',
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      'Proficiency in design tools such as Sketch, Figma, or Adobe XD',
      'Strong understanding of user-centered design principles',
    ],
    applyLink: '/apply/ux-ui-designer',
  },
  {
    title: 'Data Analyst',
    location: 'Remote',
    description:
      'We are seeking a Data Analyst to join our remote team and help us extract insights from data to drive business decisions. The ideal candidate will have strong analytical skills and experience in data visualization and statistical analysis.',
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field",
      'Proficiency in SQL and data visualization tools such as Tableau or Power BI',
      'Experience with statistical analysis and hypothesis testing',
    ],
    applyLink: '/apply/data-analyst',
  },
  {
    title: 'WordPress Developer',
    location: 'Remote',
    description:
      "Are you a skilled WordPress Developer looking for a remote opportunity? Join our team and help us build and customize WordPress websites, themes, and plugins to meet our clients' needs.",
    requirements: [
      "Bachelor's degree in Computer Science, Web Development, or related field",
      'Proficiency in PHP, JavaScript, HTML, and CSS',
      'Experience with WordPress theme and plugin development',
    ],
    applyLink: '/apply/wordpress-developer',
  },
  {
    title: 'WordPress Developer Intern',
    location: 'Remote',
    description:
      'Join our remote team as a WordPress Developer Intern and gain hands-on experience in building WordPress websites, themes, and plugins. This internship is ideal for students or recent graduates interested in pursuing a career in web development.',
    requirements: [
      'Enrolled in a degree program in Computer Science, Web Development, or related field',
      'Basic understanding of WordPress and its ecosystem',
      'Willingness to learn and collaborate with our development team',
    ],
    applyLink: '/apply/wordpress-developer-intern',
  },
  {
    title: 'UI/UX Intern',
    location: 'Remote',
    description:
      'Are you passionate about creating engaging user experiences? Join our remote team as a UI/UX Intern and work closely with our design team to develop wireframes, prototypes, and user interface designs for web and mobile applications.',
    requirements: [
      'Enrolled in a degree program in Design, HCI, or related field',
      'Basic understanding of UI/UX design principles',
      'Proficiency in design tools such as Sketch, Figma, or Adobe XD',
    ],
    applyLink: '/apply/ui-ux-intern',
  },
];

export default function CareerList() {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h2" sx={{ mb: 5 }}>
        Open positions
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 850, mb: 5 }}>
        Seize the chance to join our innovative and progressive team. Reach out to us at
        <span style={{ color: theme.palette.primary.main }}> hr@devsitestudio.com </span>
        and let's discuss how your skills can fit into our exciting roles. We look forward to
        hearing from you!
      </Typography>
      {JobPositions.map((job, id) => (
        <Accordion key={id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{job.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="subtitle1" mb={2}>
              Job Type: {job.location}
            </Typography>
            <Typography variant="subtitle1" mb={2}>
              Job Description:
            </Typography>
            <Typography variant="body1" my={2}>
              {job.description}
            </Typography>
            <Typography variant="subtitle1" mb={2}>
              Requirements:
            </Typography>
            <Divider />
            <List>
              {job.requirements.map((requirement, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemText primary={requirement} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />

            <Button
              href={job.applyLink}
              target="blank"
              sx={{ my: 2 }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Apply
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
