import React, { useState } from 'react';
import { Box, Grid, Stack, Typography, Button, Modal, Fade } from '@mui/material';
import Image from 'src/components/image';
import { m } from 'framer-motion';
import Scrollbar from 'src/components/scrollbar';
import Link from 'next/link';
import { PATH_PAGE } from 'src/routes/paths';

interface ImageDescriptionProps {
  liveURL: string;
  title: string;
  noPage: number;
  category: string;
  challenge: string;
  solution: string;
  results: string;
  clientTestimonial: string;
  technologiesUsed: string[];
  imgUrl: string;
}

const ImageDescription: React.FC<ImageDescriptionProps> = ({
  liveURL,
  imgUrl,
  title,
  category,
  challenge,
  solution,
  results,
  clientTestimonial,
  technologiesUsed,
}) => {
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [showFullContent, setShowFullContent] = useState(false); // To toggle full content visibility

  const handleToggleContent = () => {
    setShowFullContent((prev) => !prev); // Toggle to show/hide content
  };

  const handleOpenModal = () => {
    setOpenModal(true); // Open modal with full content
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close modal
  };

  return (
    <Box
      sx={{
        height: 'auto',
        overflow: 'hidden',
        mb: 6,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 6,
        border: '1px solid #e0e0e0',
      }}
      p={3}
    >
      {/* Title Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {title}
          </Typography>
          <Typography variant="h5" align="center" sx={{ color: 'text.secondary' }}>
            Business Success Stories
          </Typography>
        </Grid>
      </Grid>

      {/* Scrollable Content */}
      <Scrollbar sx={{ flexGrow: 1, mt: 3 }}>
        <Grid
          container
          spacing={4}
          onClick={handleOpenModal} // Open modal when image is clicked
          sx={{ cursor: 'pointer' }}
        >
          <Grid item xs={12} sm={6}>
            {/* Project Overview (Compact View) */}
            <Box sx={{ maxHeight: showFullContent ? 'none' : '300px', overflow: 'hidden' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Project Overview
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                <strong>Category</strong> {category}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                <strong>Technologies & Tools:</strong> {technologiesUsed.join(', ')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                <strong>Live Demo Link:</strong>{' '}
                <a href={liveURL} target="_blank" rel="noopener noreferrer">
                  {liveURL}
                </a>
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Challenges Faced
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  {challenge}
                </Typography>
              </Box>

              {/* Approaches, Challenges, Key Takeaways */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Approach and Strategy
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  {solution}
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Key Takeaways and Lessons Learned
                </Typography>
                {results}
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Key Takeaways and Lessons Learned
                </Typography>
                {clientTestimonial}
              </Box>

              {/* Button to toggle the content */}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ borderRadius: 3, textTransform: 'uppercase', fontWeight: 'bold' }}
                  onClick={handleToggleContent}
                >
                  {showFullContent ? 'Show Less' : 'Show More'}
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={imgUrl} // Assuming liveURL is an image URL, replace it if necessary
              alt={title}
              sx={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Grid>
        </Grid>
      </Scrollbar>

      {/* Modal to Show Full Content */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              width: '80%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>

            <Typography variant="h5" align="center" sx={{ color: 'text.secondary', mb: 2 }}>
              Business Success Stories
            </Typography>

            <Image
              src={imgUrl} // Assuming liveURL is an image URL, replace it if necessary
              alt={title}
              sx={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 4,
                my: 4,
              }}
            />

            {/* Full Content inside Modal */}
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Project Overview
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Category</strong> {category}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Technologies & Tools:</strong> {technologiesUsed.join(', ')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Live Demo Link:</strong>{' '}
              <a href={liveURL} target="_blank" rel="noopener noreferrer">
                {liveURL}
              </a>
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Challenges Faced
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                {challenge}
              </Typography>
            </Box>

            {/* Approaches, Challenges, Key Takeaways */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Approach and Strategy
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                {solution}
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Key Takeaways
              </Typography>
              {results}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Lessons Learned
              </Typography>
              {clientTestimonial}
            </Box>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              {/* Call to Action */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 3,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  px: 5,
                  py: 2,
                  mt: 2,
                }}
              >
                Start Your Success Journey
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Footer Section */}
      <Grid container>
        <Grid item xs={12}>
          <m.div>
            <Box my={4}>
              <Stack
                direction="row"
                gap={4}
                justifyContent="center"
                alignItems="center"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Link href={liveURL} target="blank">
                  <Typography variant="overline" sx={{ cursor: 'pointer' }}>
                    Explore
                  </Typography>
                </Link>
                <Typography variant="overline">Follow Us</Typography>
                <Link href={PATH_PAGE.contact}>
                  <Typography variant="overline" sx={{ cursor: 'pointer' }}>
                    Get in Touch
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </m.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageDescription;
