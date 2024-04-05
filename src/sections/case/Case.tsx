import { Container, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { useState } from 'react';
import { MotionViewport, varFade } from 'src/components/animate';
import useResponsive from '../../hooks/useResponsive';
import CaseCard from './CaseCard';
import { ImageDescription } from '.';

export default function Case() {
  const isDesktop = useResponsive('up', 'md');
  const [active, setActive] = useState('world-1');

  return (
    <Container component={MotionViewport}>
      <Stack spacing={5} my={10}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2">Crafting Digital Success Stories</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="body1">
            Explore our successful web development project showcasing innovative solutions and
            cutting-edge technologies.
          </Typography>
        </m.div>
      </Stack>

      {_casesss.map((cases, i) => (
        <ImageDescription
          key={i}
          imgUrl={cases.imgUrl}
          description={cases.description}
          title={cases.titlel}
          noPage={cases.noPage}
        />
      ))}

      {/* <m.div variants={varFade().in}>
        <Stack
          sx={{ mt: 10, mx: 'auto' }}
          direction={isDesktop ? 'row' : 'column'}
          minHeight="70vh"
          spacing={5}
        >
          {_cases.map((cases, i) => (
            <CaseCard key={i} {...cases} index={i} active={active} handleClick={setActive} />
          ))}
        </Stack>
      </m.div> */}
    </Container>
  );
}

//--------------------------------------------------------

const _cases = [
  {
    id: 'world-1',
    imgUrl: '/assets/images/case/car.jpeg',
    title: 'Car Hub',
  },
  {
    id: 'world-2',
    imgUrl: '/assets/images/case/gericht.jpeg',
    title: 'Gericht',
  },
  {
    id: 'world-3',
    imgUrl: '/assets/images/case/gym.jpeg',
    title: 'Golds Gym',
  },
  {
    id: 'world-4',
    imgUrl: '/assets/images/case/nike.png',
    title: 'Nike Shows',
  },
  {
    id: 'world-5',
    imgUrl: '/assets/images/case/shirt.png',
    title: 'T-shirt Design',
  },
];

const _casesss = [
  {
    imgUrl: '/assets/images/case/car.jpeg',
    titlel: 'Car Hub',
    noPage: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sint laudantium alias fugit voluptates consequuntur corporis dolores ipsam eaque iure quas, distinctio accusantium delectus sed beatae consequatur cumque officiis facilis. ',
  },
  {
    imgUrl: '/assets/images/case/gericht.jpeg',
    titlel: 'Gericht',
    noPage: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sint laudantium alias fugit voluptates consequuntur corporis dolores ipsam eaque iure quas, distinctio accusantium delectus sed beatae consequatur cumque officiis facilis.',
  },
  {
    imgUrl: '/assets/images/case/gym.jpeg',
    titlel: 'Golds Gym',
    noPage: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sint laudantium alias fugit voluptates consequuntur corporis dolores ipsam eaque iure quas, distinctio accusantium delectus sed beatae consequatur cumque officiis facilis.',
  },
  {
    imgUrl: '/assets/images/case/nike.png',
    titlel: 'Nike Shows',
    noPage: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sint laudantium alias fugit voluptates consequuntur corporis dolores ipsam eaque iure quas, distinctio accusantium delectus sed beatae consequatur cumque officiis facilis.',
  },
];
