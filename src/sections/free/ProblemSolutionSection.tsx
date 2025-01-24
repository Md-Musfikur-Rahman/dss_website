import { Box, Typography, Grid } from '@mui/material';
import { m } from 'framer-motion';
import { Error as ExclamationCircle, Lightbulb } from '@mui/icons-material';

export default function ProblemSolutionSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: 'background.default' }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary' }}
        component={m.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Problem & Solution
      </Typography>

      <Grid container spacing={4}>
        {/* Problem Section */}
        <Grid item xs={12} md={6}>
          <Box
            component={m.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              p: 4,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <ExclamationCircle sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              The Problem
            </Typography>
            <Typography color="text.secondary">
              Many small business owners are struggling to grow online, relying only on social media
              and ads, without realizing the potential of a dedicated website.
            </Typography>
          </Box>
        </Grid>

        {/* Solution Section */}
        <Grid item xs={12} md={6}>
          <Box
            component={m.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              p: 4,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Lightbulb sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Solution
            </Typography>
            <Typography color="text.secondary">
              At Wropseo, we create modern, conversion-focused websites that help your business grow
              and reach more customers while saving you time and effort.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
