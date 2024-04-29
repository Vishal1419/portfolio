'use client';

import {
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses as muiTooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${muiTooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[600],
  },
  [`& .${muiTooltipClasses.arrow}`]: {
    color: theme.palette.grey[600],
  },
}));
