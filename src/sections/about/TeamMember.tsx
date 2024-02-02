import { Card, Typography, Stack, IconButton, alpha, Box } from '@mui/material';
import Image from '../../components/image';
import { _carouselsMembers, _socials } from 'src/_mock/arrays';
import Iconify from 'src/components/iconify';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Carousel, { CarouselArrows } from 'src/components/carousel';
import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';

export default function TeamMember() {
  const carouselRef = useRef<Carousel>(null);

  const theme = useTheme();

  const carouselSettings = {
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <CarouselArrows
        filled
        shape="rounded"
        onNext={handleNext}
        onPrevious={handlePrev}
        leftButtonProps={{
          sx: {
            left: 24,
            ...(_carouselsMembers.length < 5 && { display: 'none' }),
          },
        }}
        rightButtonProps={{
          sx: {
            right: 24,
            ...(_carouselsMembers.length < 5 && { display: 'none' }),
          },
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {_carouselsMembers.map((member) => (
            <Box key={member.id} component={m.div} variants={varFade().in} sx={{ px: 1.5, py: 10 }}>
              <Card key={member.name}>
                <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
                  {member.name}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                  {member.role}
                </Typography>

                <Box sx={{ px: 1 }}>
                  <Image
                    alt={member.name}
                    src={member.avatar}
                    ratio="1/1"
                    sx={{ borderRadius: 2 }}
                  />
                </Box>

                <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
                  {_socials.map((social) => (
                    <IconButton
                      key={social.name}
                      sx={{
                        color: social.color,
                        '&:hover': {
                          bgcolor: alpha(social.color, 0.08),
                        },
                      }}
                    >
                      <Iconify icon={social.icon} />
                    </IconButton>
                  ))}
                </Stack>
              </Card>
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}
