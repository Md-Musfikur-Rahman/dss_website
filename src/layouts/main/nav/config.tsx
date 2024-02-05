// routes
import { PATH_PAGE } from '../../../routes/paths';
// config
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'About',
    icon: <Iconify icon="ic:round-grain" />,
    path: PATH_PAGE.about,
  },
  {
    title: 'Case Study',
    icon: <Iconify icon="eva:book-open-fill" />,
    path: PATH_PAGE.case,
  },
  {
    title: 'Career',
    icon: <Iconify icon="ic:sharp-search" />,
    path: PATH_PAGE.career,
  },
];

export default navConfig;

// {
//   title: 'Pages',
//   path: '/pages',
//   icon: <Iconify icon="eva:file-fill" />,
//   children: [
//     {
//       subheader: 'Other',
//       items: [
//         { title: 'About us', path: PATH_PAGE.about },
//         { title: 'Contact us', path: PATH_PAGE.contact },
//         { title: 'FAQs', path: PATH_PAGE.faqs },
//         { title: 'Pricing', path: PATH_PAGE.pricing },
//         { title: 'Payment', path: PATH_PAGE.payment },
//         { title: 'Maintenance', path: PATH_PAGE.maintenance },
//         { title: 'Coming Soon', path: PATH_PAGE.comingSoon },
//       ],
//     },
//     {
//       subheader: 'Error',
//       items: [
//         { title: 'Page 403', path: PATH_PAGE.page403 },
//         { title: 'Page 404', path: PATH_PAGE.page404 },
//         { title: 'Page 500', path: PATH_PAGE.page500 },
//       ],
//     },
//   ],
// },
