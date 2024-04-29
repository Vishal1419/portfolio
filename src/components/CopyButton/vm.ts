'use client';

import { useState } from 'react';

export interface UseCopyButton {
  children: string;
}

function useCopyButton({ children }: UseCopyButton) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setIsCopied(true);
  };

  const handleTooltipClose = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsCopied(false);
  };

  return { isCopied, handleCopy, handleTooltipClose };
}

export default useCopyButton;
