import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.palette.primary.main;

    // OR using local (public folder)
    // -------------------------------------------------------
    const logo = (
      <Box
        component="img"
        src="../../../public/assets/images/home/wropseo-logo.png"
        sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
      />
    );

    // const logo = (
    //   <Box
    //     ref={ref}
    //     component="div"
    //     sx={{
    //       width: 40,
    //       height: 40,
    //       display: 'inline-flex',
    //       ...sx,
    //     }}
    //     {...other}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="100%"
    //       zoomAndPan="magnify"
    //       viewBox="0 0 375 374.999991"
    //       height="100%"
    //       preserveAspectRatio="xMidYMid meet"
    //       version="1.0"
    //     >
    //       <defs>
    //         <clipPath id="8866b57b8d">
    //           <path d="M 56 101 L 337.5 101 L 337.5 271 L 56 271 Z M 56 101 " clip-rule="nonzero" />
    //         </clipPath>
    //         <clipPath id="45880e956b">
    //           <path
    //             d="M 37.5 53 L 285 53 L 285 322.5 L 37.5 322.5 Z M 37.5 53 "
    //             clip-rule="nonzero"
    //           />
    //         </clipPath>
    //       </defs>
    //       <g clip-path="url(#8866b57b8d)">
    //         <path
    //           fill={PRIMARY_MAIN}
    //           d="M 171.421875 170.015625 C 162.679688 180.195312 155.375 189.0625 147.753906 197.304688 C 145.945312 199.300781 142.574219 200.550781 140.199219 200.050781 C 124.214844 196.929688 111.914062 182.003906 109.539062 163.523438 C 106.730469 141.480469 113.226562 121.0625 128.210938 112.695312 C 138.203125 107.136719 149.691406 102.765625 160.554688 102.578125 C 218.503906 101.578125 276.449219 102.015625 334.457031 102.015625 C 335.144531 102.015625 335.832031 102.453125 337.390625 104.890625 C 332.460938 107.761719 327.839844 111.820312 322.65625 113.257812 C 300.175781 119.5 277.761719 125.996094 255.03125 130.492188 C 223.496094 136.734375 191.714844 141.230469 160.058594 146.476562 C 154.6875 147.351562 150.316406 149.410156 150.316406 157.527344 C 150.316406 165.457031 154.5625 168.019531 159.871094 168.953125 C 163.054688 169.578125 166.363281 169.578125 171.421875 170.015625 Z M 56.902344 270.359375 C 58.214844 270.546875 59.460938 270.796875 60.773438 270.796875 C 118.40625 270.796875 176.042969 271.109375 233.675781 270.421875 C 244.476562 270.296875 255.71875 268.050781 265.894531 263.742188 C 285.753906 255.3125 294.746094 231.335938 290.1875 203.984375 C 287 184.941406 269.394531 169.765625 250.722656 170.140625 C 249.285156 170.140625 247.414062 170.765625 246.539062 171.953125 C 238.796875 182.191406 231.179688 192.621094 223.871094 202.421875 C 228.117188 202.734375 233.800781 202.984375 239.421875 203.484375 C 245.164062 203.984375 249.660156 206.359375 249.785156 214.851562 C 249.972656 223.339844 245.601562 225.777344 239.859375 226.839844 C 217.066406 230.898438 194.210938 234.644531 171.484375 239.203125 C 138.453125 245.882812 105.480469 253.0625 72.574219 260.433594 C 66.957031 261.679688 61.585938 265.117188 56.152344 267.550781 C 56.402344 268.488281 56.652344 269.425781 56.902344 270.359375 Z M 56.902344 270.359375 "
    //           fill-opacity="1"
    //           fill-rule="nonzero"
    //         />
    //       </g>
    //       <g clip-path="url(#45880e956b)">
    //         <path
    //           fill={PRIMARY_MAIN}
    //           d="M 37.609375 90.464844 C 56.589844 85.34375 75.449219 79.289062 94.617188 75.230469 C 129.898438 67.734375 165.175781 60.117188 200.769531 55.121094 C 219.5625 52.5 238.859375 55.121094 257.902344 55.871094 C 261.960938 56.058594 266.082031 58.121094 269.953125 59.992188 C 283.316406 66.488281 287.5625 78.289062 283.003906 95.898438 C 253.90625 95.648438 224.746094 95.898438 195.585938 90.464844 C 176.042969 86.78125 155.871094 87.28125 136.015625 87.59375 C 103.296875 88.15625 70.578125 90.089844 37.917969 91.402344 C 37.730469 91.089844 37.671875 90.777344 37.609375 90.464844 Z M 127.960938 240.078125 C 143.136719 237.140625 158.308594 233.832031 173.542969 231.523438 C 182.597656 230.148438 190.339844 227.027344 197.085938 218.785156 C 215.066406 196.804688 233.613281 175.574219 251.785156 153.78125 C 255.78125 148.972656 259.089844 143.289062 264.273438 135.734375 C 250.410156 138.296875 238.859375 141.417969 227.308594 142.292969 C 209.824219 143.539062 195.523438 150.722656 183.222656 166.707031 C 164.800781 190.621094 145.195312 213.164062 126.089844 236.328125 C 126.710938 237.515625 127.335938 238.828125 127.960938 240.078125 Z M 93.304688 322.5 C 107.667969 308.574219 122.03125 294.652344 136.390625 280.789062 C 126.835938 278.789062 118.03125 278.601562 109.230469 278.914062 C 107.730469 278.976562 105.542969 280.539062 104.984375 282.164062 C 100.175781 294.839844 95.679688 307.703125 91.058594 320.4375 C 91.746094 321.125 92.496094 321.8125 93.304688 322.5 Z M 93.304688 322.5 "
    //           fill-opacity="1"
    //           fill-rule="nonzero"
    //         />
    //       </g>
    //     </svg>
    //   </Box>
    // );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return (
      <NextLink href="/" passHref>
        <Link sx={{ display: 'contents' }}>{logo}</Link>
      </NextLink>
    );
  }
);

export default Logo;
