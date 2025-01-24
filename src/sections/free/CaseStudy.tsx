import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Container,
  Grid,
} from '@mui/material';
import { m } from 'framer-motion';
import Link from 'next/link';

// 1. Type Definitions
interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

// 2. Case Study Data (this could be fetched or passed as props if needed)
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A scalable e-commerce platform with real-time inventory tracking and dynamic pricing.',
    tags: ['Next.js', 'MUI', 'Framer m'],
    imageUrl: '/images/ecommerce.jpg',
    link: '/case-studies/ecommerce',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'A personal portfolio built with Next.js to showcase projects and blogs.',
    tags: ['Next.js', 'MUI', 'SEO Optimization'],
    imageUrl: '/images/portfolio.jpg',
    link: '/case-studies/portfolio',
  },
  // Add more case studies here...
];

// 3. Case Study Item Component
const CaseStudyItem = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia component="img" height="200" image={caseStudy.imageUrl} alt={caseStudy.title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" gutterBottom>
            {caseStudy.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {caseStudy.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {caseStudy.tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" size="small" />
            ))}
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Link href={caseStudy.link} passHref>
            <Typography variant="body2" color="primary">
              Read more
            </Typography>
          </Link>
        </Box>
      </Card>
    </m.div>
  );
};

// 4. Case Study Section (Main Component)
const CaseStudy = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary' }}
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Case Studies
      </Typography>
      <Grid container spacing={4}>
        {caseStudies.map((caseStudy) => (
          <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
            <CaseStudyItem caseStudy={caseStudy} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CaseStudy;
