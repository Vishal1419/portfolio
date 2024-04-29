'use client';

import { Stack, Link, Divider } from '@mui/material';
import {
  Email as EmailIcon,
  PhoneIphone as PhoneIcon,
  GitHub as GithubIcon,
  LinkedIn as LinkedInIcon,
  X as XIcon,
} from '@mui/icons-material';
import CopyButton from '../CopyButton';
import StackoverflowIcon from '@/icons/StackoverflowIcon';
import UpworkIcon from '@/icons/UpworkIcon';
import ToptalIcon from '@/icons/ToptalIcon';
import { SocialMediaLink } from './styles';
import Tooltip from '../Tooltip';

const socialMediaLinks = [
  {
    id: 'github',
    Icon: GithubIcon,
    href: 'https://github.com/vishal1419',
    color: '#1f2328',
    tooltip: 'Github',
  },
  {
    id: 'stackoverflow',
    Icon: StackoverflowIcon,
    href: 'https://github.com/vishal1419',
    color: '#f48023',
    tooltip: 'Stackoverflow',
  },
  {
    id: 'upwork',
    Icon: UpworkIcon,
    href: 'https://github.com/vishal1419',
    color: '#15a900',
    tooltip: 'Upwork',
  },
  {
    id: 'toptal',
    Icon: ToptalIcon,
    href: 'https://github.com/vishal1419',
    color: '#204ecf',
    tooltip: 'Toptal',
  },
  {
    id: 'linkedin',
    Icon: LinkedInIcon,
    href: 'https://github.com/vishal1419',
    color: '#0a66c2',
    tooltip: 'Linked in',
  },
  {
    id: 'x',
    Icon: XIcon,
    href: 'https://github.com/vishal1419',
    color: '#0f1419',
    tooltip: 'X',
  },
];

function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      component="footer"
      borderTop={(theme) => `1px solid ${theme.palette.divider}`}
      px={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        py={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <EmailIcon sx={{ fontSize: 14 }} />
          <Link href="mailto:vishalsherathiya@gmail.com" variant="body2">
            vishalsherathiya@gmail.com
          </Link>
          <CopyButton>vishalsherathiya@gmail.com</CopyButton>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <PhoneIcon sx={{ fontSize: 14 }} />
          <Link href="tel:+919978259999" variant="body2">
            +91 9978259999
          </Link>
          <CopyButton>+919978259999</CopyButton>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1} component="ul">
        {socialMediaLinks.map(({ id, Icon, href, color, tooltip }) => (
          <Tooltip key={id} title={tooltip}>
            <SocialMediaLink href={href} target="_blank">
              <Icon fontSize="small" sx={{ color }} />
            </SocialMediaLink>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}

export default Footer;
