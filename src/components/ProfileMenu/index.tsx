'use client';

import { Divider, Menu, Stack, Typography } from '@mui/material';

import {
  EducationQualification,
  Language,
  ProfileMenuAnchor,
  ProfileMenuPopover,
  Strength,
  profileMenuClasses,
} from './styles';
import Image from 'next/image';
import useProfileMenu from './vm';
import StatusChip from '../StatusChip';
import Section from '../Section';

const educationQualifications = [
  {
    qualification: 'B. Tech. Computer Science',
    year: '2009 - 2013',
    university: 'Manavbharti university, Himachal Pradesh, India',
  },
  // {
  //   qualification: '12th Science',
  //   year: '2007 - 2008',
  //   university: 'Swami Vivekanand High School, Gujarat, India',
  // },
  // {
  //   qualification: '1st to 10th',
  //   year: '1996 - 2006',
  //   university: 'Swami Vivekanand School, Gujarat, India',
  // },
];

const languages = [
  'English - Proficient',
  'Hindi - Bilingual',
  'Gujarati - Native',
];

const strengths = [
  'Strong attention to details',
  'Deliver clean and maintainable codebase',
  'Team leading experience',
];

function ProfileMenu() {
  const { anchorEl, open, handleClickAnchorEl, handleCloseMenu } =
    useProfileMenu();

  return (
    <div>
      <ProfileMenuAnchor onClick={handleClickAnchorEl}>
        <Image
          src="/avatar.jpeg"
          width={48}
          height={48}
          alt=""
          className={profileMenuClasses.avatar}
        />
        <Typography
          variant="subtitle1"
          fontSize={20}
          letterSpacing={1.5}
          lineHeight={1}
        >
          Vishal Sherathiya
        </Typography>
        <Typography variant="body2">vishalsherathiya@gmail.com</Typography>
      </ProfileMenuAnchor>
      <ProfileMenuPopover
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Stack px={3} py={2} gap={2.5}>
          <Section title="Availability">
            <Stack direction="row" alignItems="center" gap={1}>
              <StatusChip color="success">Freelance</StatusChip>
              <StatusChip color="success">Contract</StatusChip>
              <StatusChip color="success">Full time</StatusChip>
              <StatusChip color="success">Part time</StatusChip>
            </Stack>
          </Section>
          <Section title="Education">
            <Stack
              gap={1}
              mx={0.5}
              pl={1.5}
              borderLeft="1px solid"
              borderColor="grey.300"
              component="ul"
            >
              {educationQualifications.map(
                ({ qualification, year, university }) => (
                  <EducationQualification key={qualification}>
                    <Typography
                      variant="body2"
                      className={profileMenuClasses.qualification}
                    >
                      {qualification}
                    </Typography>
                    <Divider className={profileMenuClasses.divider} />
                    <Typography
                      variant="caption"
                      fontWeight={400}
                      className={profileMenuClasses.year}
                    >
                      {year}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      fontStyle="italic"
                      className={profileMenuClasses.university}
                      color="grey.500"
                    >
                      {university}
                    </Typography>
                  </EducationQualification>
                )
              )}
            </Stack>
          </Section>
          <Section title="Languages">
            <Stack component="ul">
              {languages.map((language) => (
                <Language key={language} component="li">
                  {language}
                </Language>
              ))}
            </Stack>
          </Section>
          <Section title="Strengths">
            <Stack component="ul">
              {strengths.map((strength) => (
                <Strength key={strength} component="li">
                  {strength}
                </Strength>
              ))}
            </Stack>
          </Section>
        </Stack>
      </ProfileMenuPopover>
    </div>
  );
}

export default ProfileMenu;
