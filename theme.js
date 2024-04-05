import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif', // General font style
    heading: 'Pathway Gothic One, sans-serif',
    // Add any other font styles as needed
  },

  // breakpoints: {
  //   base: '0px', // Default base value (no min-width)
  //   s: '321px', // Custom breakpoint for small screens
  //   mobile: '376px', // Custom breakpoint for mobile screens
  // },
});

export default theme;