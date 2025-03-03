import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { MotionViewport, varFade } from '../../components/animate'; // Assuming varFade is available
import { Box, Button, Container, Typography, Grid, Stack } from '@mui/material';
import { m } from 'framer-motion';

// Define the type for a single project
interface Project {
  liveURL: string;
  imgUrl: string;
  title: string;
  category: string;
  technologiesUsed: string[];
  noPage: number;
  challenge: string;
  solution: string;
  results: string;
  clientTestimonial: string;
}

// Styled components
const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: '#121212',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(18, 0),
  },
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  height: '360px', // Fixed height to prevent layout shift
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
  },
}));

const ProjectImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '220px', // Fixed height for image/placeholder
  backgroundColor: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  borderRadius: '12px 12px 0 0',
  transition: 'opacity 0.3s ease',
}));

const ProjectInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  color: '#fff',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '0 0 12px 12px',
  flexGrow: 1, // Ensures it fills remaining space consistently
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const CaseforHome: React.FC = () => {
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const shuffleArray = (array: Project[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getRandomProjects = (array: Project[]): Project[] => {
    shuffleArray(array);
    return array.slice(0, 6);
  };

  useEffect(() => {
    setIsMounted(true);
    setCurrentProjects(getRandomProjects(projects)); // Initial set
    const interval = setInterval(() => {
      setCurrentProjects(getRandomProjects(projects));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <StyledRoot>
      <Container component={MotionViewport} sx={{ maxWidth: 'lg' }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          pb={6}
          sx={{
            color: '#fff',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            textTransform: 'uppercase',
          }}
        >
          Our Projects
        </Typography>

        <Grid container spacing={3}>
          {currentProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.liveURL}>
              <m.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // Fade left or right
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <ProjectCard>
                  <ProjectImage
                    sx={{
                      '&:hover': { opacity: 0.9 },
                    }}
                  >
                    {project.imgUrl ? (
                      <img
                        src={project.imgUrl}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      project.title
                    )}
                  </ProjectImage>
                  <ProjectInfo>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#e0e0e0',
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#a0a0a0',
                        mb: 2,
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      {project.technologiesUsed.slice(0, 3).map(
                        (
                          tech,
                          idx // Limit to 3
                        ) => (
                          <Button
                            key={idx}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.4)',
                              color: '#fff',
                              fontSize: '0.75rem',
                              padding: '3px 10px',
                              borderRadius: '16px',
                              textTransform: 'none',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                borderColor: '#3f51b5',
                                color: '#3f51b5',
                                background: 'rgba(63, 81, 181, 0.1)',
                              },
                            }}
                          >
                            {tech}
                          </Button>
                        )
                      )}
                      {project.technologiesUsed.length > 3 && (
                        <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.75rem' }}>
                          +{project.technologiesUsed.length - 3}
                        </Typography>
                      )}
                    </Stack>
                  </ProjectInfo>
                </ProjectCard>
              </m.div>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} display="flex" justifyContent="center">
          <Button
            size="large"
            variant="contained"
            href="/case-studies/"
            sx={{
              background: '#3f51b5',
              borderRadius: '8px',
              padding: '12px 32px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                background: '#303f9f',
                boxShadow: '0 4px 12px rgba(63, 81, 181, 0.4)',
              },
            }}
          >
            View All Case Studies
          </Button>
        </Box>
      </Container>
    </StyledRoot>
  );
};

export default CaseforHome;

// Your projects array remains unchanged; I'll assume it's included above this code.

const projects = [
  {
    liveURL: 'https://www.naespabeauty.com/',
    imgUrl: 'image-link',
    title: 'Naespa Beauty',
    noPage: 0,
    category: 'Wix Website for Beauty Salon',
    challenge:
      'The client struggled with manual bookings and needed a modern, responsive website to streamline appointments.',
    solution:
      'Developed a fully functional Wix website with a custom booking system integrated with Google Calendar for real-time scheduling. The design was fully responsive for mobile and desktop users.',
    results:
      'The site saw a 20% increase in online bookings within two months and reduced customer service inquiries by 40% due to automated confirmations.',
    clientTestimonial:
      'The new website has transformed how our clients book their appointments. It’s easy to navigate, and the booking system has made our operations smoother.',
    technologiesUsed: ['Wix', 'Google Calendar API', 'Custom CSS', 'JavaScript'],
  },
  {
    liveURL: 'https://stormrage.nyc/',
    imgUrl: 'image-link',
    title: 'Stormrage',
    noPage: 0,
    category: 'WordPress Site for Marketing Agency',
    challenge:
      'The marketing agency needed a dynamic and easily manageable website with custom post types for their portfolio and services.',
    solution:
      'Helped the client set up dynamic pages using Advanced Custom Fields (ACF) and custom post types. Managed ongoing site maintenance and optimization.',
    results:
      'Improved site flexibility, making it easier for the team to add new content. Page loading time improved by 25% due to optimization.',
    clientTestimonial:
      'Thanks to the new setup, we can now easily manage our portfolio and service pages without additional support. The site feels much faster and user-friendly.',
    technologiesUsed: ['WordPress', 'ACF', 'Custom Post Types', 'PHP'],
  },
  {
    liveURL: 'https://viziuneclara.ro/',
    imgUrl: 'image-link',
    title: 'Viziuneclara',
    noPage: 0,
    category: 'WordPress Blog',
    challenge:
      'The client had a site that was buggy and poorly designed, with many layout issues and SEO problems.',
    solution:
      'Fixed bugs, improved overall site layout, resolved header and navigation issues, and performed technical SEO fixes.',
    results:
      'The site’s user experience improved significantly, with a 30% decrease in bounce rate and a noticeable improvement in Google rankings.',
    clientTestimonial:
      'The website feels much more polished now. The SEO improvements helped us rank higher in search results, bringing in more organic traffic.',
    technologiesUsed: ['WordPress', 'CSS', 'JavaScript', 'Yoast SEO'],
  },
  {
    liveURL: 'https://clinicalpharmacycourses.com/',
    imgUrl: 'image-link',
    title: 'Clinical Pharmacy Courses',
    noPage: 0,
    category: 'WordPress, WooCommerce, Ecommerce (Course Selling)',
    challenge:
      'The client wanted to automate the enrollment process and integrate payment gateways for course purchases.',
    solution:
      'Regular site updates, integration of WooCommerce for course payments, and automation of the student enrollment process via custom solutions.',
    results:
      'Reduced manual enrollment tasks by 50%, and the client saw a 15% increase in sales due to the improved payment system.',
    clientTestimonial:
      'The automated system has made the enrollment process a lot smoother for our students, and the payment gateway integration was a game-changer for us.',
    technologiesUsed: ['WordPress', 'WooCommerce', 'Zapier', 'Custom Plugins'],
  },
  {
    liveURL: 'https://www.teachersocials.com/',
    imgUrl: 'image-link',
    title: 'Teacher Socials',
    noPage: 0,
    category: 'WordPress Site for App',
    challenge:
      'The client wanted to migrate from Wix to WordPress while keeping the same design and functionality.',
    solution:
      'Recreated the Wix website on WordPress, transferred the domain, and added a multi-step consultation form for user engagement.',
    results:
      "The transition to WordPress improved the site's scalability and flexibility. The multi-step form resulted in a 20% higher conversion rate for consultations.",
    clientTestimonial:
      'We were happy with how smooth the transition was. The new multi-step form is bringing in more leads than we expected!',
    technologiesUsed: ['WordPress', 'Elementor', 'WPForms'],
  },
  {
    liveURL: 'https://gbadunapp.co/',
    imgUrl: 'image-link',
    title: 'Gbadun',
    noPage: 0,
    category: 'WordPress Site for App',
    challenge:
      'The client needed a simple, single-page landing page to promote their app with minimal development required.',
    solution:
      'Created a one-page landing page with clear call-to-action buttons and app information to capture leads.',
    results:
      'The landing page helped the client gain 100+ email sign-ups within the first week of launch.',
    clientTestimonial:
      "The landing page is exactly what we needed to showcase our app. It's simple, clean, and converting well.",
    technologiesUsed: ['WordPress', 'Elementor'],
  },
  {
    liveURL: 'https://eau.ac/',
    imgUrl: 'image-link',
    title: 'Copy as the Bridge TEFL',
    noPage: 0,
    category: 'WordPress Site for Training Center',
    challenge:
      'The client needed a site that mirrored the design of an established training center while adding unique elements.',
    solution:
      'Created a WordPress site replicating the layout of Bridge TEFL, with custom tweaks to suit the client’s brand and functionality requirements.',
    results:
      'The client’s new site helped them increase registrations for their courses by 10% in the first quarter post-launch.',
    clientTestimonial:
      'The site looks amazing and is working perfectly for our needs. We’ve had great feedback from potential students.',
    technologiesUsed: ['WordPress', 'Elementor', 'Custom CSS'],
  },
  {
    liveURL: 'https://perfumehubs.com.au/',
    imgUrl: 'image-link',
    title: 'Perfume Hubs',
    noPage: 0,
    category: 'WordPress, WooCommerce, Ecommerce (Perfume)',
    challenge:
      'The client needed to improve the overall performance of their ecommerce store and resolve navigation issues.',
    solution:
      'Improved site performance by optimizing images and scripts, and refined the navigation bar to enhance the user experience.',
    results:
      'The site’s load time decreased by 30%, and the user experience improved, resulting in a 25% increase in sales.',
    clientTestimonial:
      'The performance improvements were immediately noticeable. The new navigation also makes it easier for customers to shop.',
    technologiesUsed: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'JavaScript'],
  },
  {
    liveURL: 'https://assistedlivinglocatorslongisland.com/',
    imgUrl: 'image-link',
    title: 'Assisted Living Locators Long Island',
    noPage: 0,
    category: 'WordPress Site for Assisted Living Locators',
    challenge:
      'The client wanted to target multiple locations for SEO using custom Elementor templates and dynamic content.',
    solution:
      'Developed three Elementor page templates, each with ACF fields to target different locations while maintaining SEO best practices.',
    results:
      'Improved local SEO rankings for multiple locations, which contributed to a 15% increase in leads from search engines.',
    clientTestimonial:
      'The SEO improvements have been fantastic. We’ve seen more traffic from the areas we wanted to target.',
    technologiesUsed: ['WordPress', 'Elementor', 'ACF'],
  },
  {
    liveURL: 'https://mawuacraft.shop/',
    imgUrl: 'image-link',
    title: 'Mawua Craft',
    noPage: 0,
    category: 'WordPress, WooCommerce, Ecommerce (Fashion)',
    challenge:
      'The local Facebook business needed a fully functional ecommerce website with SEO optimization for better visibility.',
    solution:
      'Developed a fully functional WooCommerce website with SEO optimization to drive more organic traffic and enhance user experience.',
    results:
      'The site saw a 30% increase in traffic and a 20% increase in sales within the first two months after launch.',
    clientTestimonial:
      'The new site has brought us more customers. The SEO work has really paid off, and our sales are growing steadily.',
    technologiesUsed: ['WordPress', 'WooCommerce', 'Yoast SEO'],
  },
  {
    liveURL: 'https://pixelfuels.com/',
    imgUrl: 'image-link',
    title: 'Pixel Fuels',
    noPage: 0,
    category: 'WordPress Site for Marketing Agency',
    challenge: 'The marketing agency needed help with creating initial website layouts.',
    solution:
      "Designed the website layout, focusing on clean design and user-friendly navigation for the agency's potential clients.",
    results:
      'The client was able to launch the site quickly and received positive feedback from visitors regarding its clean and professional design.',
    clientTestimonial:
      'We were able to launch our site faster thanks to your designs. It looks great and functions perfectly!',
    technologiesUsed: ['WordPress', 'Elementor'],
  },
  {
    liveURL: 'https://uddoktahoi.com/',
    imgUrl: 'image-link',
    title: 'Uddokta Hoi',
    noPage: 0,
    category: 'WordPress, WooCommerce, Ecommerce (Course Selling)',
    challenge:
      'The client needed to maintain and update the site while adding new features for course selling.',
    solution:
      'Handled site maintenance and updates, including implementing new landing pages and features for selling courses.',
    results:
      'The site is fully maintained and up to date with all new features, helping the client keep pace with their growing audience.',
    clientTestimonial:
      'Your regular updates have kept our site fresh and functional, helping us stay ahead in the competitive course-selling market.',
    technologiesUsed: ['WordPress', 'WooCommerce', 'PHP'],
  },
  {
    liveURL: 'https://texortdigital.com/',
    imgUrl: 'image-link',
    title: 'Texort Digital',
    noPage: 0,
    category: 'WordPress Site for Marketing Agency',
    challenge: 'Site maintenance and creation of sales landing pages.',
    solution:
      'Maintained the site, developed new landing pages, and optimized content for better lead generation.',
    results:
      'The client saw increased conversions due to the newly developed landing pages and optimized content.',
    clientTestimonial:
      'The landing pages are working perfectly! We’re seeing a higher conversion rate than we expected.',
    technologiesUsed: ['WordPress', 'Elementor', 'CSS'],
  },
  {
    liveURL: 'https://corporateboxbd.com/',
    imgUrl: 'image-link',
    title: 'Corporate Box',
    noPage: 0,
    category: 'WordPress, WooCommerce, Ecommerce (Corporate Gifts)',
    challenge:
      'Needed a fully functional ecommerce website with bulk pricing and payment gateway integration.',
    solution:
      'Built an ecommerce website with WooCommerce, integrated a bulk pricing feature, and added a secure payment gateway.',
    results:
      'The ecommerce platform increased sales by 15% in the first quarter after launch, with seamless bulk ordering.',
    clientTestimonial:
      'The new site is fantastic! Bulk pricing and payment integration worked seamlessly, and we’ve had a lot of positive feedback from our customers.',
    technologiesUsed: ['WordPress', 'WooCommerce', 'PHP', 'Stripe'],
  },
];
