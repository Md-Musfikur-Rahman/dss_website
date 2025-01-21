import { Container, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { useState } from 'react';
import { MotionViewport, varFade } from 'src/components/animate';
import useResponsive from '../../hooks/useResponsive';
import CaseCard from './CaseCard';
import { ImageDescription } from '.';

export default function Case() {
  const isDesktop = useResponsive('up', 'md');
  const [active, setActive] = useState('world-1');

  return (
    <Container component={MotionViewport}>
      <Stack spacing={5} my={10}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2">Crafting Digital Success Stories</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="body1">
            Explore our successful web development project showcasing innovative solutions and
            cutting-edge technologies.
          </Typography>
        </m.div>
      </Stack>

      {_casesss.map((cases, i) => (
        <ImageDescription
          key={i}
          liveURL={cases.liveURL}
          title={cases.title}
          noPage={cases.noPage}
          category={cases.category}
          challenge={cases.challenge}
          solution={cases.solution}
          results={cases.results}
          clientTestimonial={cases.clientTestimonial}
          technologiesUsed={cases.technologiesUsed}
        />
      ))}

      {/* <m.div variants={varFade().in}>
        <Stack
          sx={{ mt: 10, mx: 'auto' }}
          direction={isDesktop ? 'row' : 'column'}
          minHeight="70vh"
          spacing={5}
        >
          {_cases.map((cases, i) => (
            <CaseCard key={i} {...cases} index={i} active={active} handleClick={setActive} />
          ))}
        </Stack>
      </m.div> */}
    </Container>
  );
}

//--------------------------------------------------------

const _casesss = [
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
    technologiesUsed: ['WordPress', 'WooCommerce', 'Custom Plugins', 'Zapier'],
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

const _cases = [
  {
    id: 'world-1',
    imgUrl: '/assets/images/case/car.jpeg',
    title: 'Car Hub',
  },
  {
    id: 'world-2',
    imgUrl: '/assets/images/case/gericht.jpeg',
    title: 'Gericht',
  },
  {
    id: 'world-3',
    imgUrl: '/assets/images/case/gym.jpeg',
    title: 'Golds Gym',
  },
  {
    id: 'world-4',
    imgUrl: '/assets/images/case/nike.png',
    title: 'Nike Shows',
  },
  {
    id: 'world-5',
    imgUrl: '/assets/images/case/shirt.png',
    title: 'T-shirt Design',
  },
];
