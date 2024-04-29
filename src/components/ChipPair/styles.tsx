'use client';

import {
  Chip as MuiChip,
  Stack,
  StackProps,
  chipClasses as muiChipClasses,
  styled,
} from '@mui/material';

export const Root = styled((props: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" />
))(({ theme }) => ({
  gap: 1,
  borderRadius: 4,
  overflow: 'hidden',
}));

const Chip = styled(MuiChip)(({ theme, color }) => ({
  height: 'unset',
  borderRadius: 0,
  color:
    !color || color === 'default'
      ? theme.palette.primary.dark
      : theme.palette[color].dark,
  backgroundColor:
    !color || color === 'default'
      ? theme.palette.primary.light
      : theme.palette[color].light,
  [`& .${muiChipClasses.label}`]: {
    padding: 0,
  },
}));

export const LeftChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.75, 0.5, 1),
}));

export const RightChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0.5, 1, 0.5, 0.75),
}));
