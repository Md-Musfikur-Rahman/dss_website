import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
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
  return (
    <Box
      sx={{
        height: '70vh',
        overflow: 'auto',
        mb: '50px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      border={1}
      p={3}
      borderRadius={5}
      boxShadow={5}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            {title}
          </Typography>
          <Typography variant="h2" align="center">
            WordPress Success Stories
          </Typography>
        </Grid>
      </Grid>
      <Scrollbar>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Project Overview */}
            <div>
              <Typography variant="h4">Project Overview</Typography>
              <Typography variant="h5">Page: {noPage}</Typography>
              <Typography variant="h5">Tools & Technology: {noPage}</Typography>
              <Typography variant="h5">Live Link: {noPage}</Typography>
              <Typography variant="body1">{description}</Typography>
            </div>

            {/* Approach and Strategy */}
            <div>
              <Typography variant="h4">Approach and Strategy</Typography>
              {/* Use a two-column layout to present text and graphics */}
              {/* Example: Left side text, right side graphics */}
            </div>

            {/* Challenges Faced */}
            <div>
              <Typography variant="h4">Challenges Faced</Typography>
              {/* Present challenges visually */}
            </div>

            {/* Key Takeaways and Lessons Learned */}
            <div>
              <Typography variant="h4">Key Takeaways and Lessons Learned</Typography>
              {/* Create visually distinct section with bullet points or numbered lists */}
            </div>

            {/* Call to Action */}
            <div>
              <Typography variant="h4">Call to Action</Typography>
              {/* Design a prominent button or link */}
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            py={1}
            sx={{
              position: 'sticky',
              bottom: '0',
              right: '0',
              marginTop: 'auto',
            }}
          >
            <Image src={imgUrl} alt={title} />
          </Grid>
        </Grid>
      </Scrollbar>
      <Grid container>
        {/* Footer */}
        <Grid item xs={12}>
          <m.div>
            <Box my={4}>
              <Stack direction="row" gap={4} justifyContent="center" alignItems="center">
                <Typography variant="overline">Social Links</Typography>
                <Typography variant="overline">Social Links</Typography>
                <Typography variant="overline">Social Links</Typography>
                <Typography variant="overline">Social Links</Typography>
              </Stack>
            </Box>
          </m.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageDescription;
