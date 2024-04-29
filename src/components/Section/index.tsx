import { Divider, Stack, Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export interface SectionProps {
  title?: ReactNode;
  titleColor?: TypographyProps['color'];
  children: ReactNode;
  /**
   * renders large or medium font for title
   * @default 'medium'
   */
  size?: 'large' | 'medium';
  /**
   * renders Divider between title and children
   * @default false
   */
  hasDivider?: boolean;
}

function Section({
  title,
  titleColor,
  children,
  size = 'medium',
  hasDivider = false,
}: SectionProps) {
  return (
    <Stack gap={0.25} component="section">
      {title && (
        <>
          <Typography
            variant="subtitle2"
            fontSize={size === 'medium' ? 14 : 18}
            color={titleColor}
          >
            {title}
          </Typography>
          {hasDivider && <Divider sx={{ mb: 1 }} />}
        </>
      )}
      {children}
    </Stack>
  );
}

export default Section;
