'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  StackProps,
  Typography,
  styled,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import Image from 'next/image';

import ChipPair from '@/components/ChipPair';
import Milestone from '@/components/Milestone';
import Section from '@/components/Section';
import { generateClasses } from '@/utils/ui';
import Chip from '@/components/Chip';

const services = [
  'Frontend Development',
  'Chrome extension Development',
  'Desktop app Development',
  'Backend Development',
  'Full-stack Development',
];

const domains = [
  'Education / Ed-tech',
  'E-Commerce',
  'ERP - Enterprise resource planning',
  'Healthcare',
  'Logistics',
  'Deployment',
];

const clients = [
  { name: 'Acadly', logo: '/acadly.png', height: 26 },
  { name: 'One Village', logo: '/one-village.png', height: 15 },
  { name: 'Gigalixir', logo: '/gigalixir.png', height: 32 },
  { name: 'Confidence Systems', logo: '/confidence-systems.png', height: 26 },
  {
    name: 'Elite Software Automation',
    logo: '/elite-software-automation.png',
    height: 26,
  },
  { name: 'Upforce Tech', logo: '/upforce.png', height: 26 },
  { name: 'Pixometry Infosoft Pvt. Ltd.', logo: '/pixometry.png', height: 26 },
];

const values = [
  { name: 'Cross-browser compatibility', logo: '/cross-browser.jpg' },
  { name: 'Cross-device responsiveness', logo: '/cross-device.png' },
  { name: 'Best performance', logo: '/best-performance.jpeg' },
  {
    name: 'Accessibility for users with varying disabilities',
    logo: '/accessibility.png',
  },
  { name: 'Best code quality', logo: '' },
  { name: 'On-time delivery', logo: '' },
];

const projects = [
  {
    name: 'Acadly',
    logo: '/acadly.png',
    logoHeight: 26,
    domain: 'Ed-tech',
    serviceType: 'SASS',
    duration: 'Dec 2021 - Present',
    myRole: 'Lead frontend developer',
    challenges: [
      'Difficulty in adding new features and fixing bugs due to legacy Inferno codebase',
      'Limited pool of developers familiar with Inferno',
      'Re-implement complex application in React as per provided Figma designs',
    ],
    outcomes: [
      'Successfully complete new project in React with new designs, ensuring maintainable code.',
      'Got maintenance contract and a new project named Pruzent.',
    ],
    clientAvatar: '/avatar.jpeg',
    clientName: 'Prashant Gautam',
    clientDesignation: 'Co-Founder - Acadly',
    testimonials: [
      'I must appreciate your diligence with development process. It is quite remarkable. I enjoy working with you.',
    ],
    concepts: [
      { name: 'Infinite Scroll', color: 'error' },
      { name: 'Virtualization', color: 'error' },
      { name: 'Complex forms', color: 'error' },
      { name: 'Drag & Drop', color: 'error' },
      { name: 'Product tour', color: 'error' },
      { name: 'Chat', color: 'error' },
      { name: 'Real-time updates', color: 'error' },
      { name: 'Zoom integration', color: 'error' },
      { name: 'Video player', color: 'error' },
      { name: 'Rich-text editor', color: 'error' },
      { name: 'Payment wall', color: 'error' },
      { name: 'Responsiveness', color: 'error' },
      { name: 'Multi-laguage support', color: 'error' },
      { name: 'Modular codebase', color: 'error' },
    ] as const,
    techstack: [
      { name: 'React', color: 'error' },
      { name: 'Typescript', color: 'error' },
      { name: 'Material-ui', color: 'error' },
      { name: 'Redux', color: 'error' },
      { name: 'Redux-saga', color: 'error' },
      { name: 'Redux-thunk', color: 'error' },
      { name: 'Zoom SDK', color: 'error' },
      { name: 'Pusher.js', color: 'error' },
      { name: 'Video.js', color: 'error' },
      { name: 'Stripe.js', color: 'error' },
      { name: 'Slate.js', color: 'error' },
      { name: 'Mathjax', color: 'error' },
      { name: 'react-hook-form', color: 'error' },
      { name: 'date-fns', color: 'error' },
      { name: 'react-router', color: 'error' },
      { name: 'reactour', color: 'error' },
      { name: 'react-beautiful-dnd', color: 'error' },
    ] as const,
  },
  {
    name: 'Gigalixir',
    logo: '/gigalixir.png',
    logoHeight: 32,
    domain: 'Deployment',
    serviceType: 'PASS',
    duration: ['Sep 2020 - Dec 2020', 'Apr 2023 - Sep 2023'],
    myRole: 'Senior frontend developer',
    challenges: [
      'Client was an ex-employee of Google, who wanted to have an MVP on frontend to start his business',
      'An expert in React, Typescript, Jest and react-admin was required to finish up the MVP quickly',
    ],
    outcomes: [
      'Product acquired, got maintenance contract from new owner',
      'New owner gave a new project too',
      'Got 2 more clients by referrals from Jesse',
    ],
    clientAvatar: '/avatar.jpeg',
    clientName: 'Jesse S.',
    clientDesignation: 'Ex-Founder - Gigalixir',
    testimonials: [
      'I went through 5 developers before finding Vishal and he is doing great. Best developer I have worked with so far.',
      'Awesome developer and easy to work with. Absolute best experience so far with Vishal.',
    ],
    concepts: [
      { name: 'Infinite Scroll', color: 'error' },
      { name: 'Real-time logs', color: 'error' },
      { name: 'Payment wall', color: 'error' },
      { name: 'Multi-language support', color: 'error' },
      { name: 'Graphs', color: 'error' },
      { name: 'Responsiveness', color: 'error' },
      { name: 'Dark mode', color: 'error' },
      { name: 'Unit / Integration testing', color: 'error' },
      { name: 'Modular codebase', color: 'error' },
    ] as const,
    techstack: [
      { name: 'React', color: 'error' },
      { name: 'Typescript', color: 'error' },
      { name: 'react-admin', color: 'error' },
      { name: 'Material-ui', color: 'error' },
      { name: 'Redux', color: 'error' },
      { name: 'Redux-thunk', color: 'error' },
      { name: 'Stripe.js', color: 'error' },
      { name: 'react-phoenix', color: 'error' },
      { name: 'Jest', color: 'error' },
      { name: '@testing-libaray/react', color: 'error' },
      { name: 'msw', color: 'error' },
      { name: 'react-hook-form', color: 'error' },
      { name: 'date-fns', color: 'error' },
      { name: 'react-router', color: 'error' },
      { name: 'react-i18n', color: 'error' },
    ] as const,
  },
  {
    name: 'One Village',
    logo: '/one-village.png',
    logoHeight: 15,
    domain: 'Ed-tech',
    serviceType: 'SASS',
    duration: 'Mar 2021 - Present',
    myRole: 'Senior frontend developer',
    challenges: [
      'Jason has his own school and wanted to develop an online portal where they can track leads, track scheduled tours and allow parents to schedule it too.',
      'Extend the idea to have a SASS that can be used by other schools as well. With a single click any school can generate their microsite with many customizable options available.',
    ],
    outcomes: [
      "Jason's school is already using it. They got many other schools who are also using this product.",
      'The product is still in progress, with continuous additions of new features to streamline and reduce paperwork.',
    ],
    clientAvatar: '/avatar.jpeg',
    clientName: 'Jason',
    clientDesignation: 'Founder - One Village',
    testimonials: [
      'One of the best experience, not only in terms of development, but also great communication and attention to details.',
    ],
    concepts: [
      { name: 'Server-side rendering', color: 'error' },
      { name: 'Modular codebase', color: 'error' },
      { name: 'Calendar', color: 'error' },
      { name: 'Responsiveness', color: 'error' },
      { name: 'Authentication', color: 'error' },
      { name: 'Chatbot integration', color: 'error' },
      { name: 'Drag & Drop', color: 'error' },
      { name: 'Graphs', color: 'error' },
      { name: 'Payment wall', color: 'error' },
    ] as const,
    techstack: [
      { name: 'React', color: 'error' },
      { name: 'Typescript', color: 'error' },
      { name: 'Next.js', color: 'error' },
      { name: 'Tailwind', color: 'error' },
      { name: 'Material-ui', color: 'error' },
      { name: 'lodash', color: 'error' },
      { name: 'Stripe.js', color: 'error' },
      { name: 'Redux', color: 'error' },
      { name: 'Redux-thunk', color: 'error' },
      { name: 'Redux-toolkit', color: 'error' },
      { name: 'react-beautiful-dnd', color: 'error' },
      { name: 'formik', color: 'error' },
      { name: 'date-fns', color: 'error' },
      { name: 'reactour', color: 'error' },
      { name: 'react-apexcharts', color: 'error' },
      { name: 'react-use-intercom', color: 'error' },
    ] as const,
  },
];

const faqs = [
  {
    question: 'Are you open to sign an NDA - Non-disclosure aggrement?',
    answer:
      "Yes, I'm open to signing an NDA to protect your project's confidentiality. But only after reading and understanding each clause mentioned in your NDA document.",
  },
  {
    question:
      'What is your policy on intellectual property and ownership of the product / project?',
    answer:
      'You (the client) retains full ownership of the intellectual property and product/project.',
  },
  {
    question:
      'Do you provide support outside regular business hours, if needed?',
    answer: 'Yes, I offer support beyond regular hours for urgent matters.',
  },
  {
    question: 'Do you provide maintenance support?',
    answer:
      'Maintenance support post-launch is offered at an additional cost to ensure continued smooth operation.',
  },
  {
    question: 'How do you handle changes or additions to the project scope?',
    answer:
      'Changes or additions to the project scope are handled through clear communication and agreement adjustments.',
  },
];

const homeClasses = generateClasses('Home', [
  'clientAvatar',
  'clientName',
  'clientDesignation',
]);

const Service = styled(({ children, ...props }: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" gap={1}>
    <CheckCircleIcon color="success" sx={{ fontSize: 14 }} />
    <Typography variant="body2">{children}</Typography>
  </Stack>
))();

const Domain = styled(({ children, ...props }: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" gap={1}>
    <CheckCircleIcon color="success" sx={{ fontSize: 14 }} />
    <Typography variant="body2">{children}</Typography>
  </Stack>
))();

const Value = styled(({ children, ...props }: StackProps) => (
  <Stack {...props} direction="row" alignItems="center" gap={1}>
    <CheckCircleIcon color="success" sx={{ fontSize: 14 }} />
    <Typography variant="body2">{children}</Typography>
  </Stack>
))();

enum ClientGridTemplateAreas {
  AVATAR = 'avatar',
  NAME = 'name',
  DESIGNATION = 'designation',
}

const Client = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
    "${ClientGridTemplateAreas.AVATAR} ${ClientGridTemplateAreas.NAME}"
    "${ClientGridTemplateAreas.AVATAR} ${ClientGridTemplateAreas.DESIGNATION}"
  `,
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  gap: theme.spacing(0, 1),
  justifyContent: 'flex-start',
  alignItems: 'center',
  [`& .${homeClasses.clientAvatar}`]: {
    gridArea: ClientGridTemplateAreas.AVATAR,
  },
  [`& .${homeClasses.clientName}`]: {
    gridArea: ClientGridTemplateAreas.NAME,
  },
  [`& .${homeClasses.clientDesignation}`]: {
    gridArea: ClientGridTemplateAreas.DESIGNATION,
  },
}));

export default function Home() {
  return (
    <Stack gap={2}>
      <Stack direction="row" align-items="center" gap={2}>
        <Stack gap={2}>
          <Typography component="h1">
            <Typography variant="body1" component="div">
              Hey there, I&rsquo;m Vishal,
            </Typography>
            <Typography variant="h3" component="div">
              Senior Frontend Engineer
            </Typography>
            <Typography variant="body1" component="span">
              who views coding as an art.
            </Typography>
            &nbsp;
            <Typography variant="body1" component="span">
              I blend logic and creativity to create inventive solutions.
            </Typography>
            <Typography variant="body1" component="div">
              Join me as we transform lines of code into digital masterpieces.
            </Typography>
          </Typography>
          <Stack direction="row" alignItems="center" gap={4}>
            <Milestone count={10} showPlus>
              Years of experience
            </Milestone>
            <Milestone count={15} showPlus>
              Big projects completed
            </Milestone>
            <Milestone count={8} showPlus>
              Projects completed as team lead
            </Milestone>
          </Stack>
          <Section title="Expertise" size="large" hasDivider>
            <Stack gap={1}>
              <Stack direction="row" alignItems="center" gap={1}>
                <ChipPair labelLeft="HTML" labelRight="10y" color="warning" />
                <ChipPair labelLeft="CSS" labelRight="10y" color="primary" />
                <ChipPair
                  labelLeft="Javascript"
                  labelRight="9y"
                  color="secondary"
                />
                <ChipPair labelLeft="React" labelRight="7y" color="primary" />
                <ChipPair labelLeft="Redux" labelRight="7y" color="primary" />
                <ChipPair
                  labelLeft="Typescript"
                  labelRight="4y"
                  color="primary"
                />
                <ChipPair labelLeft="Next.js" labelRight="3y" color="primary" />
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <ChipPair labelLeft="Jest" labelRight="4y" color="warning" />
                <ChipPair
                  labelLeft="@testing-library/react"
                  labelRight="4y"
                  color="primary"
                />
                <ChipPair
                  labelLeft="Pusher.js"
                  labelRight="3y"
                  color="secondary"
                />
                <ChipPair
                  labelLeft="Video.js"
                  labelRight="3y"
                  color="primary"
                />
                <ChipPair
                  labelLeft="Slate.js"
                  labelRight="1y"
                  color="primary"
                />
                <ChipPair labelLeft="D3.js" labelRight="1y" color="primary" />
                <ChipPair
                  labelLeft="Fabric.js"
                  labelRight="1y"
                  color="primary"
                />
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <ChipPair
                  labelLeft="Material-ui"
                  labelRight="6y"
                  color="warning"
                />
                <ChipPair
                  labelLeft="Tailwind"
                  labelRight="3y"
                  color="primary"
                />
                <ChipPair labelLeft="SCSS" labelRight="3y" color="secondary" />
                <ChipPair
                  labelLeft="styled-components"
                  labelRight="4y"
                  color="primary"
                />
                <ChipPair labelLeft="Emotion" labelRight="4y" color="primary" />
                <ChipPair labelLeft="styleX" labelRight="1y" color="primary" />
              </Stack>
            </Stack>
          </Section>
        </Stack>
        <Stack gap={2} margin="auto">
          <Section title="Services" size="large" hasDivider>
            <Stack component="ul">
              {services.map((service) => (
                <Service key={service} component="li">
                  {service}
                </Service>
              ))}
            </Stack>
          </Section>
          <Section title="Domains" size="large" hasDivider>
            <Stack component="ul">
              {domains.map((domain) => (
                <Domain key={domain} component="li">
                  {domain}
                </Domain>
              ))}
            </Stack>
          </Section>
        </Stack>
      </Stack>
      <Section title="Clients" size="large" hasDivider>
        <Stack direction="row" alignItems="center" gap={2}>
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              width={0}
              height={0}
              sizes="100vw"
              alt={`${client.name} logo`}
              style={{ width: 'auto', height: client.height }}
            />
          ))}
        </Stack>
      </Section>
      <Section title="Work" size="large">
        <Stack gap={2}>
          {projects.map((project) => (
            <Stack
              key={project.name}
              direction="row"
              alignItems="center"
              border={(theme) => `1px solid ${theme.palette.grey[300]}`}
              p={2}
            >
              <Stack flex={1} gap={0.5}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Image
                    src={project.logo}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={project.name}
                    style={{ width: 'auto', height: project.logoHeight }}
                  />
                  <ChipPair
                    labelLeft="Domain"
                    labelRight={project.domain}
                    color="success"
                  />
                  <ChipPair
                    labelLeft="Service Type"
                    labelRight={project.serviceType}
                    color="secondary"
                  />
                  <Typography variant="caption" ml="auto">
                    {typeof project.duration === 'string' ? (
                      project.duration
                    ) : (
                      <Stack>
                        {project.duration.map((duration) => (
                          <span key={duration}>{duration}</span>
                        ))}
                      </Stack>
                    )}
                  </Typography>
                </Stack>
                <Typography variant="body2">
                  <strong>My Role</strong>: {project.myRole}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Section title="Challenges & Requirements">
                  <Stack component="ul" pl={2}>
                    {project.challenges.map((challenge) => (
                      <Typography
                        key={challenge}
                        variant="body2"
                        component="li"
                      >
                        {challenge}
                      </Typography>
                    ))}
                  </Stack>
                </Section>
                <Section title="Outcomes">
                  <Stack component="ul" pl={2}>
                    {project.outcomes.map((outcome) => (
                      <Typography key={outcome} variant="body2" component="li">
                        {outcome}
                      </Typography>
                    ))}
                  </Stack>
                </Section>
                <Divider sx={{ my: 1 }} />
                <Stack gap={1}>
                  <Client>
                    <Image
                      src={project.clientAvatar}
                      width={48}
                      height={48}
                      alt=""
                      className={homeClasses.clientAvatar}
                    />
                    <Typography
                      variant="subtitle1"
                      fontSize={20}
                      letterSpacing={1.5}
                      lineHeight={1}
                      className={homeClasses.clientName}
                    >
                      {project.clientName}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={homeClasses.clientDesignation}
                    >
                      {project.clientDesignation}
                    </Typography>
                  </Client>
                  <Stack gap={0.5} maxWidth={400}>
                    {project.testimonials.map((testimonial) => (
                      <Typography key={testimonial} variant="body2">
                        {testimonial}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
              <Stack flex={1} alignItems="center" gap={2}>
                <Section title="Concepts used">
                  <Stack
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={1}
                    maxWidth={524}
                  >
                    {project.concepts.map((concept) => (
                      <Chip key={concept.name} color={concept.color}>
                        {concept.name}
                      </Chip>
                    ))}
                  </Stack>
                </Section>
                <Section title="Techstack">
                  <Stack
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={1}
                    maxWidth={524}
                  >
                    {project.techstack.map((tech) => (
                      <Chip key={tech.name} color={tech.color}>
                        {tech.name}
                      </Chip>
                    ))}
                  </Stack>
                </Section>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Section>
      <Section title="What values I provide" size="large" hasDivider>
        <Stack component="ul">
          {values.map((value) => (
            <Value key={value.name} component="li">
              {value.name}
            </Value>
          ))}
        </Stack>
      </Section>
      <Section title="FAQ - Frequently asked questions" size="large">
        {faqs.map((faq, index) => (
          <Accordion key={faq.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body2">{`${index + 1}. ${
                faq.question
              }`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Section>
    </Stack>
  );
}
