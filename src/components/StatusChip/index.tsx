import { ChipProps } from '@mui/material';
import { StatusIcon, StyledChip } from './styles';

export interface StatusChipProps
  extends DistributiveOmit<
    ChipProps,
    'variant' | 'icon' | 'label' | 'children'
  > {
  children: string;
}

function StatusChip({ color, children, ...props }: StatusChipProps) {
  return (
    <StyledChip
      {...props}
      icon={<StatusIcon color={color} />}
      color={color}
      label={children}
    />
  );
}

export default StatusChip;
