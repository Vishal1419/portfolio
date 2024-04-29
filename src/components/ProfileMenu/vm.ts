'use client';

import { MouseEvent, useState } from 'react';

function useProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClickAnchorEl = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    open,
    handleClickAnchorEl,
    handleCloseMenu,
  };
}

export default useProfileMenu;
