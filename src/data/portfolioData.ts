import type { PersonalInfo, TimelineItemData, Skill, GithubConfig } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Alexis Nava',
  title: 'Software Engineer',
  email: 'alexis.nava.s@outlook.com',
  linkedinUsername: 'alexis-nava',
  githubUsername: 'Nanomixer98',
  cvLink:
    'https://drive.google.com/file/d/1_QOHguGItcrGcz0feTpD4x0wVfRGJYhV/view?usp=sharing',
  contactDescription:
    'If you liked my profile or would like to know more about me, feel free to contact me!',
}

export const timeline: TimelineItemData[] = [
  {
    company: 'Stori',
    url: 'https://www.storicard.com/',
    role: 'Sr. Software Engineer',
    date: 'Aug 2025 - Present',
    side: 'left',
    tags: [
      'AI Tooling (Cursor Rules)',
      'AWS Infrastructure Migration',
      'System Design',
      'Amplitude',
      'E2E Testing',
    ],
  },
  {
    company: 'Stori',
    url: 'https://www.storicard.com/',
    role: 'Software Engineer',
    date: 'Jun 2023 - Aug 2025',
    side: 'left',
    tags: [
      'TypeScript',
      'Vue.js (Composition API, Pinia)',
      'Clean Architecture',
      'TanStack Query',
      'Go (DDD, Hexagonal Architecture)',
      'Sentry',
      'Pre-commit',
      'PostgreSQL',
      'AWS (SQS, SNS, CDK, DynamoDB, Step Functions)',
    ],
  },
  {
    company: 'Stori',
    url: 'https://www.storicard.com/',
    role: 'Software Developer Jr.',
    date: 'Mar 2022 - Jun 2023',
    side: 'left',
    tags: [
      'Python',
      'AWS (Lambda, ECS, ECR, API Gateway, CloudWatch, CloudFormation)',
      'Vue.js (Options API, Pinia)',
      'AWS CDK',
      'Rasa / OpenAI',
      'Pytest',
      'Docker',
      'Redis',
      'Jenkins',
      'Grafana',
    ],
  },
  {
    company: 'Harman de México',
    url: 'https://www.harmanbymexico.com/',
    role: 'Full-stack Developer Jr.',
    date: 'Nov 2020 - Mar 2022',
    side: 'right',
    tags: [
      'PHP',
      'Symfony 3',
      'MySQL',
      'JavaScript',
      'jQuery',
      'HTML/CSS',
      'Docker',
      'RESTful APIs',
      'Linux',
      'Bash',
    ],
  },
  {
    company: 'Instituto Tecnológico de Querétaro',
    url: 'https://queretaro.tecnm.mx/',
    role: 'Computer Systems Engineering',
    date: 'Aug 2016 - May 2021',
    side: 'left',
    tags: [],
  },
]

export const skillsLanguages: Skill[] = [
  { name: 'TypeScript', weight: 5 },
  { name: 'JavaScript', weight: 5 },
  { name: 'Golang', weight: 4 },
  { name: 'Python', weight: 3 },
  { name: 'PHP', weight: 3 },
  { name: 'Bash', weight: 2 },
]

export const skillsFrameworks: Skill[] = [
  { name: 'Vue.js', weight: 5 },
  { name: 'React', weight: 4 },
  { name: 'TanStack Query', weight: 4 },
  { name: 'Quasar Framework', weight: 4 },
  { name: 'Node.js', weight: 3 },
  { name: 'Angular', weight: 2 },
  { name: 'Symfony', weight: 2 },
]

export const skillsTools: Skill[] = [
  { name: 'AI Tooling (Cursor)', weight: 5 },
  { name: 'Clean Architecture', weight: 5 },
  { name: 'AWS Lambda', weight: 4 },
  { name: 'AWS DynamoDB', weight: 4 },
  { name: 'AWS CloudWatch', weight: 4 },
  { name: 'PostgreSQL', weight: 4 },
  { name: 'Redis', weight: 4 },
  { name: 'GitHub', weight: 4 },
  { name: 'Sentry', weight: 4 },
  { name: 'AWS CloudFormation/CDK', weight: 4 },
  { name: 'DDD / Hexagonal Architecture', weight: 4 },
  { name: 'SOLID Principles', weight: 4 },
  { name: 'Docker', weight: 4 },
  { name: 'Pre-commit', weight: 4 },
  { name: 'Git', weight: 4 },
  { name: 'Amplitude', weight: 3 },
  { name: 'AWS ECS', weight: 3 },
  { name: 'AWS Step Functions', weight: 3 },
  { name: 'AWS SQS', weight: 3 },
  { name: 'Swagger/OpenAPI', weight: 3 },
  { name: 'AWS ECR', weight: 3 },
  { name: 'AWS API Gateway', weight: 3 },
  { name: 'MySQL', weight: 3 },
  { name: 'Jenkins', weight: 3 },
  { name: 'Grafana', weight: 3 },
  { name: 'Vitest', weight: 3 },
  { name: 'Firebase', weight: 2 },
]

export const githubConfig: GithubConfig = {
  username: 'Nanomixer98',
  sortBy: 'stars',
  exclude: {
    archived: true,
    forks: true,
    projects: ['insolitum'],
  },
  githubPages: ['sorting_algos', 'character_encoder', 'Nanomixer98.github.io'],
}
