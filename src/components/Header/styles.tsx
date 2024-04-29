'use client';

import { MenuItem, styled } from '@mui/material';

export const NavMenuItem = styled(MenuItem)(({ theme }) => ({
  borderBottom: '2px solid transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: 'grey',
  },
}));
