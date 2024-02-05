import { Card, Typography, Stack, IconButton, alpha, Box } from '@mui/material';
import Image from '../../components/image';
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
            <Box key={member.id} component={m.div} variants={varFade().in} sx={{ px: 1.5, pt: 10 }}>
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
                    ratio="3/4"
                    sx={{ borderRadius: 2 }}
                  />
                </Box>

                <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
                  {member._socials.map((social) => (
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

//----------------------------------------------------------

const _carouselsMembers = [
  {
    id: '004',
    name: 'Tariqul Islam',
    role: 'Project Manager',
    avatar: `/assets/images/portraits/tariqul.jpg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/in/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '003',
    name: 'Shakidul Islam Shakil',
    role: 'Full Stack Developer',
    avatar: `/assets/images/portraits/shakil.jpeg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/mdmusfikurrahman23',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/mdmusfikurrahman23',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/in/mdmusfikurrahman',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '001',
    name: 'Md Miraj Uddin',
    role: 'Wordpress Developer',
    avatar: `/assets/images/portraits/miraz.jpeg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/in/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '002',
    name: 'Md Asaduzzaman',
    role: 'Wordpress Developer',
    avatar: `/assets/images/portraits/asad.png`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/company/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '005',
    name: 'Md Asikuzzaman',
    role: 'Front-End Expert',
    avatar: `/assets/images/portraits/asik.jpeg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/company/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '006',
    name: 'Moshfeca Iffath Nishi',
    role: 'SEO Expert',
    avatar: `/assets/images/portraits/nishi.jpeg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/company/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
  {
    id: '007',
    name: 'Tahsina Islam Lubna',
    role: 'WordPress Developer',
    avatar: `/assets/images/portraits/lubna.jpeg`,
    _socials: [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: '#1877F2',
        path: 'https://www.facebook.com/devsitestudio',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: '#E02D69',
        path: 'https://www.instagram.com/devsitestudio',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: '#007EBB',
        path: 'https://www.linkedin.com/company/devsitestudio',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: '#00AAEC',
        path: 'https://www.twitter.com/devsitestudio',
      },
    ],
  },
];
