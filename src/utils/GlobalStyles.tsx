'use client';

import { GlobalStyles as MuiGlobalStyles, css } from '@mui/material';

function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
  );
}

export default GlobalStyles;
