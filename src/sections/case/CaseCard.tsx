import { Dispatch, SetStateAction } from 'react';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'src/components/image';
import useResponsive from '../../hooks/useResponsive';
import { useTheme } from '@mui/material/styles';

type CaseCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
};

export default function CaseCard({ id, imgUrl, title, index, active, handleClick }: CaseCardProps) {
  const isDesktop = useResponsive('up', 'md');
  const theme = useTheme();

  return (
    <m.div variants={varFade().inDown}>
      <Stack
        mb={isDesktop ? 5 : 0}
        mx="auto"
        direction={isDesktop ? 'row' : 'column'}
        spacing={isDesktop ? 0 : 2}
        alignItems={isDesktop ? 'center' : 'stretch'}
        sx={{
          position: 'relative',
          justifyContent: 'center',
          height: isDesktop ? '700px' : active === id ? '190px' : '50px', // Auto height for mobile
          minWidth: isDesktop ? (active === id ? '400px' : '150px') : 'auto', // Full width for mobile
          width: isDesktop ? 'auto' : active === id ? '100%' : 'auto', // Full width for mobile
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => handleClick(id)}
      >
        {/* Image component */}
        <Image
          src={imgUrl}
          alt={title}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px',
          }}
        />

        {/* Content */}
        {active !== id ? (
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              position: 'absolute',
              zIndex: 0,
              bottom: 0,
              transform: 'rotate(-90deg)',
              transformOrigin: '0 0',
              visibility: isDesktop ? 'visible' : 'hidden',
            }}
          >
            {title}
          </Typography>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              padding: '8px',
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
              flexDirection: 'column',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
            }}
          >
            {/* Headset Icon */}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                marginBottom: '16px',
              }}
            >
              <Image
                src="/assets/icons/platforms/ic_wordpress.svg"
                alt="headset"
                style={{
                  width: '50%',
                  height: '50%',
                  objectFit: 'contain',
                }}
              />
            </Stack>

            {/* Enter Metaverse Text */}
            <Typography
              variant="body1"
              style={{
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '20.16px',
                textTransform: 'uppercase',
                color: 'white',
              }}
            >
              Developed on WordPress{' '}
            </Typography>

            {/* Title */}
            <Typography
              variant="h2"
              style={{
                marginTop: '24px',
                fontWeight: 'bold',
                fontSize: '32px',
                color: theme.palette.grey[100],
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
      </Stack>
    </m.div>
  );
}
