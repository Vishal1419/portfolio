import { IconButton } from '@mui/material';
import Tooltip from '../Tooltip';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import useCopyButton, { UseCopyButton } from './vm';

export interface CopyButtonProps extends UseCopyButton {
  /** @default 'Copy' */
  tooltipContent?: string;
  /** @default 'Copied' */
  tooltipContentAfterCopy?: string;
  /**
   * time (in milliseconds) after which tooltip hides
   * @default 2000
   */
  timeout?: number;
}

function CopyButton({
  tooltipContent = 'Copy',
  tooltipContentAfterCopy = 'Copied',
  timeout = 2000,
  ...vmOptions
}: CopyButtonProps) {
  const { isCopied, handleCopy, handleTooltipClose } = useCopyButton(vmOptions);

  return (
    <Tooltip
      title={isCopied ? tooltipContentAfterCopy : tooltipContent}
      leaveDelay={isCopied ? timeout : 0}
      onClose={handleTooltipClose}
    >
      <IconButton size="small" onClick={handleCopy}>
        <CopyIcon sx={{ fontSize: 14 }} />
      </IconButton>
    </Tooltip>
  );
}

export default CopyButton;
