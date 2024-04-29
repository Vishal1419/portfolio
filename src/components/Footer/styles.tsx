'use client';

import { Link, styled } from '@mui/material';

export const SocialMediaLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  filter: 'grayscale(1)',
  '&:hover': {
    filter: 'none',
  },
}));
