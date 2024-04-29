'use client';

import { Chip, chipClasses, styled } from '@mui/material';

export const StyledChip = styled(Chip)(({ theme, color }) => ({
  height: 'unset',
  borderRadius: 4,
  padding: theme.spacing(0.5, 1),
  backgroundColor:
    !color || color === 'default'
      ? theme.palette.primary.light
      : theme.palette[color].light,
  color:
    !color || color === 'default'
      ? theme.palette.primary.dark
      : theme.palette[color].dark,
  [`& .${chipClasses.label}`]: {
    padding: 0,
  },
}));
