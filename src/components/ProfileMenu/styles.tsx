'use client';

import { generateClasses } from '@/utils/ui';
import {
  Box,
  Button,
  ButtonProps,
  Menu,
  Stack,
  StackProps,
  Typography,
  menuClasses,
  styled,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

export const profileMenuClasses = generateClasses('ProfileMenu', [
  'avatar',
  'name',
  'email',
  'qualification',
  'divider',
  'year',
  'university',
]);

export const ProfileMenuPopover = styled(Menu)(({ theme }) => ({
  [`& .${menuClasses.paper}`]: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    marginTop: theme.spacing(1),
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 16,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}));

enum ProfileMenuAnchorGridTemplateAreas {
  AVATAR = 'avatar',
  NAME = 'name',
  EMAIL = 'email',
}

export const ProfileMenuAnchor = styled((props: ButtonProps) => (
  <Button {...props} variant="text" />
))(({ theme }) => ({
  borderRadius: 0,
  color: 'inherit',
  textTransform: 'none',
  display: 'grid',
  gridTemplateAreas: `
    "${ProfileMenuAnchorGridTemplateAreas.AVATAR} ${ProfileMenuAnchorGridTemplateAreas.NAME}"
    "${ProfileMenuAnchorGridTemplateAreas.AVATAR} ${ProfileMenuAnchorGridTemplateAreas.EMAIL}"
  `,
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  gap: theme.spacing(0, 1),
  [`& .${profileMenuClasses.avatar}`]: {
    gridArea: ProfileMenuAnchorGridTemplateAreas.AVATAR,
    borderRadius: 4,
  },
  [`& .${profileMenuClasses.name}`]: {
    gridArea: ProfileMenuAnchorGridTemplateAreas.NAME,
  },
  [`& .${profileMenuClasses.email}`]: {
    gridArea: ProfileMenuAnchorGridTemplateAreas.EMAIL,
  },
}));

enum EducationQualificationGridTemplateAreas {
  QUALIFICATION = 'qualification',
  DIVIDER = 'divider',
  YEAR = 'year',
  UNIVERSITY = 'university',
}

export const EducationQualification = styled('li')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
    "${EducationQualificationGridTemplateAreas.QUALIFICATION} ${EducationQualificationGridTemplateAreas.DIVIDER} ${EducationQualificationGridTemplateAreas.YEAR}"
    "${EducationQualificationGridTemplateAreas.UNIVERSITY} ${EducationQualificationGridTemplateAreas.UNIVERSITY} ${EducationQualificationGridTemplateAreas.UNIVERSITY}"
  `,
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  gap: theme.spacing(0, 1),
  position: 'relative',
  [`& .${profileMenuClasses.qualification}`]: {
    gridArea: EducationQualificationGridTemplateAreas.QUALIFICATION,
  },
  [`& .${profileMenuClasses.divider}`]: {
    gridArea: EducationQualificationGridTemplateAreas.DIVIDER,
  },
  [`& .${profileMenuClasses.year}`]: {
    gridArea: EducationQualificationGridTemplateAreas.YEAR,
  },
  [`& .${profileMenuClasses.university}`]: {
    gridArea: EducationQualificationGridTemplateAreas.UNIVERSITY,
  },
  '&:before': {
    content: '" "',
    position: 'absolute',
    left: -16,
    top: 6,
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[600],
  },
}));

export const Language = styled(({ children, ...props }: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" gap={1}>
    <Box
      sx={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: (theme) => theme.palette.grey[600],
      }}
    />
    <Typography variant="body2">{children}</Typography>
  </Stack>
))();

export const Strength = styled(({ children, ...props }: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" gap={1}>
    <CheckCircleIcon color="success" sx={{ fontSize: 14 }} />
    <Typography variant="body2">{children}</Typography>
  </Stack>
))();
