import { SvgIcon, SvgIconProps } from '@mui/material';

const ToptalIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width={24}
      height={24}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
    >
      <path
        d="M26.969 13.385l-13.385-13.385-2.719 2.719 5.031 5.026-10.875 10.87 13.391 13.385 2.719-2.719-5.031-5.026 10.88-10.87zM11.068 19.026l8.089-8.083 1.63 1.63-8.083 8.151-1.63-1.682z"
        fill="currentColor"
      />{' '}
    </SvgIcon>
  );
};

export default ToptalIcon;
