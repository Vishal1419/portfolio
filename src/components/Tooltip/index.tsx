import { forwardRef, Ref } from 'react';

import { StyledTooltip } from './styles';
import { TooltipProps } from './types';

function Tooltip(
  {
    arrow = true,
    disableInteractive = true,
    placement = 'top',
    ...props
  }: TooltipProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <StyledTooltip
      ref={ref}
      arrow={arrow}
      {...props}
      disableInteractive={disableInteractive}
      placement={placement}
      PopperProps={{
        modifiers: [{ name: 'offset', options: { offset: [0, -5] } }],
      }}
    >
      {props.children}
    </StyledTooltip>
  );
}

export default forwardRef(Tooltip);
