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
} from '@mui/material';
// _mock_
import { _faqs } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import SendIcon from '@mui/icons-material/Send';

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

export default function CareerList() {
  return (
    <div>
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
                <ListItem disablePadding>
                  <ListItemButton key={index}>
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
