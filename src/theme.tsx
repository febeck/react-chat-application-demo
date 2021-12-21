import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #__next': {
        height: '100vh',
      },
    },
  },
  colors: {
    black: '#16161D',
    zYellow: '#ffdd00',
    zPink: '#ff0096',
    zGreen: '#66ff33',
  },
});

export default theme;
