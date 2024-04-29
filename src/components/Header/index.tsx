'use client';

import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenuItem } from './styles';
import ProfileMenu from '../ProfileMenu';

function Header() {
  const pathname = usePathname();

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
          <NavMenuItem
            component={Link}
            href="/"
            className={pathname === '/' ? 'active' : ''}
          >
            Home
          </NavMenuItem>
          <NavMenuItem
            component={Link}
            href="/work"
            className={pathname === '/work' ? 'active' : ''}
          >
            Work
          </NavMenuItem>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="mailto:vishalsherathiya@gmail.com"
          >
            Contact
          </Button>
        </Stack>
      </nav>
      <ProfileMenu />
    </Stack>
  );
}

export default Header;
