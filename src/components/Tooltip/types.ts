import { TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps
  extends Omit<MuiTooltipProps, 'arrow' | 'disableInteractive' | 'placement'> {
  /** @default true */
  arrow?: MuiTooltipProps['arrow'];
  /** @default true */
  disableInteractive?: MuiTooltipProps['disableInteractive'];
  /** @default 'top' */
  placement?: MuiTooltipProps['placement'];
}
