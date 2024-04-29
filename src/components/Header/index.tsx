'use client';

import { Stack } from '@mui/material';
import { NavMenuItem } from './styles';
import ProfileMenu from '../ProfileMenu';

function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      component="header"
      borderBottom={(theme) => `1px solid ${theme.palette.divider}`}
      px={2}
    >
      <nav>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          component="ul"
          p={0}
          m={0}
        >
          <NavMenuItem>Home</NavMenuItem>
          <NavMenuItem>Experience</NavMenuItem>
          <NavMenuItem>Work</NavMenuItem>
        </Stack>
      </nav>
      <ProfileMenu />
    </Stack>
  );
}

export default Header;
