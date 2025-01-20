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

const _casesss = [
  {
    imgUrl: '/assets/images/case/car.jpeg',
    titlel: 'Car Hub',
    noPage: 5,
    description:
      'Car Hub is an innovative platform designed for car enthusiasts to explore, buy, and sell vehicles with ease. The website features a sleek, user-friendly interface that allows customers to filter through a variety of cars based on make, model, and price. Integrated with real-time car inventory updates, Car Hub provides a seamless and interactive experience for users, helping them find their perfect vehicle.',
  },
  {
    imgUrl: '/assets/images/case/gericht.jpeg',
    titlel: 'Gericht',
    noPage: 5,
    description:
      'Gericht is an online food delivery service that focuses on bringing gourmet meals from top local chefs directly to customers’ doors. With a clean, modern design, the platform allows users to browse menus, order dishes, and track deliveries in real time. By partnering with local restaurants and chefs, Gericht offers a personalized and high-quality dining experience for food lovers.',
  },
  {
    imgUrl: '/assets/images/case/gym.jpeg',
    titlel: 'Golds Gym',
    noPage: 5,
    description:
      'Golds Gym’s new online platform combines fitness tracking with personalized workout plans, making it easier for users to stay fit. The website offers a rich user experience with options for booking classes, purchasing gym memberships, and accessing workout tutorials. Golds Gym’s website is designed to motivate and inspire users, offering a comprehensive suite of tools for achieving fitness goals and tracking progress over time.',
  },
  {
    imgUrl: '/assets/images/case/nike.png',
    titlel: 'Nike Shows',
    noPage: 5,
    description:
      'Nike Shows is a dynamic online platform designed to showcase Nike’s latest product launches and marketing campaigns. The website provides an immersive, visually stunning experience with high-quality images and videos of the newest Nike apparel and footwear. With interactive features like virtual try-ons and a "build your own sneaker" tool, Nike Shows engages customers in a fun and exciting way while showcasing the brand’s cutting-edge designs.',
  },
];

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
