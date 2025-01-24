import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What services does Wropseo provide?',
      answer:
        'Wropseo offers a wide range of services, including website development, CMS solutions, SEO optimization, and custom app development tailored to your needs.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'While we don’t offer a free trial, we do provide a free ebook with actionable insights to help you grow your online presence.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'The timeline depends on the complexity of the project. Typically, our projects range from 2-6 weeks for completion.',
    },
    {
      question: 'Do you offer support after the project is completed?',
      answer:
        'Yes, we offer ongoing maintenance and support packages to ensure your website stays updated and secure.',
    },
    {
      question: 'Can I customize my package?',
      answer:
        'Absolutely! We provide flexible pricing packages that can be tailored to meet your specific business requirements.',
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: 'background.default',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{ mb: 6, fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}
      >
        Frequently Asked Questions
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 18 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
