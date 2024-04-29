import { Stack, Typography } from '@mui/material';

export interface MilestoneProps {
  count: number;
  /** @default false */
  showPlus?: boolean;
  children: string;
}

function Milestone({ count, showPlus, children }: MilestoneProps) {
  return (
    <Stack alignItems="center">
      <Typography variant="h3" component="div">
        {count}
        <sup>{showPlus ? '+' : ''}</sup>
      </Typography>
      <Typography variant="body1" component="div">
        {children}
      </Typography>
    </Stack>
  );
}

export default Milestone;
