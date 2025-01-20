import React, { useState } from 'react';
import { Box, Grid, Stack, Typography, Button, Modal, Fade } from '@mui/material';
import Image from 'src/components/image';
import { m } from 'framer-motion';
import Scrollbar from 'src/components/scrollbar';

interface ImageDescriptionProps {
  imgUrl: string;
  title: string;
  noPage: number;
  description: string;
}

const ImageDescription: React.FC<ImageDescriptionProps> = ({
  imgUrl,
  title,
  noPage,
  description,
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
                <strong>Pages:</strong> {noPage}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                <strong>Technologies & Tools:</strong> {noPage}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                <strong>Live Demo Link:</strong> {noPage}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Description
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.primary', mt: 2 }}>
                  {description}
                </Typography>
              </Box>

              {/* Approaches, Challenges, Key Takeaways */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Approach and Strategy
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  Our approach combines detailed market research, creative design, and cutting-edge
                  technology to ensure the best possible results for our clients.
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Challenges Faced
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  During the project, we encountered significant challenges in scaling the product
                  to handle a high user volume while maintaining performance.
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Key Takeaways and Lessons Learned
                </Typography>
                <ul>
                  <li>
                    Collaboration and effective communication are key to successful project
                    execution.
                  </li>
                  <li>Early identification of potential risks helps mitigate long-term issues.</li>
                  <li>Data-driven decision-making accelerates business outcomes.</li>
                </ul>
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
              src={imgUrl}
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
              src={imgUrl}
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
              <strong>Pages:</strong> {noPage}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Technologies & Tools:</strong> {noPage}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Live Demo Link:</strong> {noPage}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Description
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.primary', mt: 2 }}>
                {description}
              </Typography>
            </Box>

            {/* Approach and Strategy */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Approach and Strategy
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Our approach combines detailed market research, creative design, and cutting-edge
                technology to ensure the best possible results for our clients.
              </Typography>
            </Box>

            {/* Challenges Faced */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Challenges Faced
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                During the project, we encountered significant challenges in scaling the product to
                handle a high user volume while maintaining performance.
              </Typography>
            </Box>

            {/* Key Takeaways */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Key Takeaways and Lessons Learned
              </Typography>
              <ul>
                <li>
                  Collaboration and effective communication are key to successful project execution.
                </li>
                <li>Early identification of potential risks helps mitigate long-term issues.</li>
                <li>Data-driven decision-making accelerates business outcomes.</li>
              </ul>
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

            {/* <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="contained" color="primary" onClick={handleCloseModal}>
                Close
              </Button>
            </Box> */}
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
                <Typography variant="overline">Explore More Projects</Typography>
                <Typography variant="overline">Follow Us</Typography>
                <Typography variant="overline">Get in Touch</Typography>
              </Stack>
            </Box>
          </m.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageDescription;
