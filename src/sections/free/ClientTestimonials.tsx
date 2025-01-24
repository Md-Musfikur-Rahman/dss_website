import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    id: 1,
    type: 'text',
    content: 'Wropseo transformed our business website, boosting our online presence and revenue.',
    author: 'John Doe, CEO of ExampleCorp',
  },
  {
    id: 2,
    type: 'video',
    content: 'https://www.example.com/video1.mp4',
  },
  {
    id: 3,
    type: 'text',
    content:
      'Their team delivered exceptional results within our tight deadline. Highly recommend!',
    author: 'Jane Smith, Marketing Head at StartupX',
  },
  {
    id: 4,
    type: 'video',
    content: 'https://www.example.com/video2.mp4',
  },
  {
    id: 5,
    type: 'text',
    content: 'The best agency for SEO and web solutions. Wropseo exceeded all our expectations!',
    author: 'Mike Lee, Founder of MyBrand',
  },
];

export default function ClientTestimonials() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          fontSize: 32,
        }}
      >
        What Our Clients Say
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, auto)',
          gap: 16,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            sx={{
              gridColumn: testimonial.type === 'video' ? 'span 2' : 'span 1',
              gridRow: testimonial.type === 'video' ? 'span 2' : 'span 1',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            {testimonial.type === 'text' ? (
              <Box>
                <Typography variant="body1" sx={{ fontSize: 16, mb: 2 }}>
                  "{testimonial.content}"
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 'bold', fontSize: 14, display: 'block' }}
                >
                  - {testimonial.author}
                </Typography>
              </Box>
            ) : (
              <Box
                component="video"
                src={testimonial.content}
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
