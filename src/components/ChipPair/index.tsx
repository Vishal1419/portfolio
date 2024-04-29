import { ChipProps } from '@mui/material';
import { LeftChip, RightChip, Root } from './styles';

export interface ChipPairProps {
  labelLeft: string;
  labelRight: string;
  color: ChipProps['color'];
}

function ChipPair({ labelLeft, labelRight, color }: ChipPairProps) {
  return (
    <Root>
      <LeftChip label={labelLeft} color={color} />
      <RightChip label={labelRight} color={color} />
    </Root>
  );
}

export default ChipPair;
