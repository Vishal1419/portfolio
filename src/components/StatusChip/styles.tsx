'use client';

import { Chip, ChipProps, chipClasses, styled } from '@mui/material';

export const StatusIcon = styled('div')<Pick<ChipProps, 'color'>>(
  ({ theme, color }) => ({
    height: theme.spacing(1),
    width: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor:
      !color || color === 'default'
        ? theme.palette.primary.main
        : theme.palette[color].main,
  })
);

export const StyledChip = styled(Chip)(({ theme, color }) => ({
  backgroundColor:
    !color || color === 'default'
      ? theme.palette.primary.light
      : theme.palette[color].light,
  color: theme.palette.grey[700],
  fontSize: theme.typography.body2.fontSize,
  height: 'unset',
  gap: theme.spacing(0.75),
  padding: theme.spacing(0.25, 1),
  [`& .${chipClasses.icon}`]: {
    margin: 0,
  },
  [`& .${chipClasses.label}`]: {
    padding: 0,
  },
  // lineHeight: 1.25,
}));
