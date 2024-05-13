import { Grid, Card, Typography, IconButton, alpha, Box, useTheme } from '@mui/material';
import Image from '../../components/image';
import Iconify from 'src/components/iconify';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';

export default function Founders() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {_carouselsMembers.map((member) => (
        <Grid item key={member.id} xs={12} sm={6} md={3}>
          <Box component={m.div} variants={varFade().in} sx={{ px: 1.5, py: 2 }}>
            <Card
              key={member.name}
              sx={{ bgcolor: isLight ? theme.palette.grey[300] : theme.palette.grey[800] }}
            >
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
                {member.name}
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                {member.role}
              </Typography>

              <Box sx={{ px: 1 }}>
                <Image alt={member.name} src={member.avatar} ratio="1/1" sx={{ borderRadius: 2 }} />
              </Box>

              <Box sx={{ p: 2 }}>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                  {member._socials.map((social) => (
                    <Grid item key={social.name}>
                      <IconButton
                        target="_blank"
                        href={social.path}
                        sx={{
                          color: social.color,
                          '&:hover': {
                            bgcolor: alpha(social.color, 0.08),
                          },
                        }}
                      >
                        <Iconify icon={social.icon} />
                      </IconButton>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

//------------------------------------------------------------------

const _carouselsMembers = [
  {
    id: '001',
    name: 'Md Musfikur Rahman',
    role: 'Founder & CTO',
    avatar: `/assets/images/portraits/musfik.png`,
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
        value: 'github',
        name: 'GitHub',
        icon: 'eva:github-fill',
        color: '#FFFFF',
        path: 'https://github.com/md-musfikur-rahman',
      },
    ],
  },
  {
    id: '002',
    name: 'Ali Ahsan Md Muzahid',
    role: 'Founder & CEO',
    avatar: `/assets/images/portraits/muzahid.png`,
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
