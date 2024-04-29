import { ChipProps as MuiChipProps } from '@mui/material';
import { StyledChip } from './styles';

export interface ChipProps
  extends DistributiveOmit<MuiChipProps, 'label' | 'children'> {
  children: string;
}

function Chip({ children, ...props }: ChipProps) {
  return <StyledChip {...props} label={children} />;
}

export default Chip;
