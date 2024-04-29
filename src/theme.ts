'use client';
import { Roboto } from 'next/font/google';
import { createTheme, darken } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#5b97bd',
      light: '#d3e5ef',
    },
    secondary: {
      main: '#cb9433',
      light: '#fdecc8',
    },
    warning: {
      main: '#d7813a',
      light: '#fadec9',
    },
    success: {
      dark: '#348150',
      main: '#6c9b7d',
      light: '#dbeddb',
    },
    error: {
      main: '#e16f64',
      light: '#ffe2dd',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: baseTheme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            color: darken(baseTheme.palette.primary.main, 0.3),
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme;
