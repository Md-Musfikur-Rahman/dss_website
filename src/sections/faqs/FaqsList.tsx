// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <div>
      {_faqs.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

//-----------------------------------------------------------

const _faqs = [
  {
    id: '1',
    value: 'How long will it take to build my website?',
    heading: 'Project Timeline',
    detail: `The timeline for building a website can vary depending on the complexity of the project, the features required, and the responsiveness of the client in providing necessary materials and feedback. Typically, a simple website can take a few weeks, while more complex projects may take several months.`,
  },
  {
    id: '2',
    value: 'What is the cost of building a website?',
    heading: 'Project Cost',
    detail: `The cost of building a website depends on factors such as the scope of the project, the features required, the level of customization, and the expertise of the development team. We offer tailored solutions to fit different budgets and requirements, and we provide transparent pricing estimates after discussing your project needs.`,
  },
  {
    id: '3',
    value: 'Do you provide website maintenance services?',
    heading: 'Website Maintenance',
    detail: `Yes, we offer website maintenance services to ensure that your website remains secure, up-to-date, and functioning smoothly after launch. Our maintenance plans include regular updates, backups, security monitoring, and technical support to address any issues that may arise.`,
  },
  {
    id: '4',
    value: 'Can you help with website hosting?',
    heading: 'Website Hosting',
    detail: `Yes, we can assist you with website hosting solutions tailored to your needs. Whether you're looking for shared hosting, dedicated hosting, or cloud hosting, we can recommend reliable hosting providers and help you set up and manage your hosting environment.`,
  },
  {
    id: '5',
    value: 'Do you provide training on how to use WordPress?',
    heading: 'WordPress Training',
    detail: `Yes, we offer WordPress training sessions to help you learn how to manage and update your WordPress website effectively. Our training covers topics such as content creation, website customization, plugin management, and basic maintenance tasks.`,
  },
  {
    id: '6',
    value: 'What kind of support do you offer after the website is launched?',
    heading: 'Post-Launch Support',
    detail: `We provide ongoing support and assistance after your website is launched to ensure its continued success. Our support services include troubleshooting technical issues, making updates and enhancements, and providing guidance on digital marketing strategies to drive traffic and engagement.`,
  },
  {
    id: '7',
    value: 'Can you integrate third-party tools and services into my website?',
    heading: 'Integration Services',
    detail: `Yes, we have experience integrating third-party tools and services into websites, including payment gateways, CRM systems, email marketing platforms, social media plugins, and more. We can customize your website to seamlessly connect with the tools you rely on to run your business.`,
  },
  {
    id: '8',
    value: 'How do I ensure my website is search engine friendly?',
    heading: 'Search Engine Optimization (SEO)',
    detail: `We design and develop websites with SEO best practices in mind to help improve your search engine rankings and visibility. Our SEO services include keyword research, on-page optimization, site speed optimization, mobile responsiveness, and content strategy to attract organic traffic and generate leads.`,
  },
];
