import {
  CloudIcon,
  DatabaseIcon,
  MonitorIcon,
  ServerIcon,
  ShieldIcon,
  ToolIcon,
} from '@icons/Icons';
import {
  CssLogo,
  CypressLogo,
  GithubLogo,
  GitLogo,
  HtmlLogo,
  JavaLogo,
  JavaScriptLogo,
  JunitLogo,
  JwtLogo,
  LaravelLogo,
  PhpLogo,
  PostgreLogo,
  PostmanLogo,
  RailwayLogo,
  ReactLogo,
  SpringBootLogo,
  SwaggerLogo,
  TailwindLogo,
  TypeScriptLogo,
  VercelLogo,
} from '@logos/Logos';

export const stack = [
  {
    icon: MonitorIcon,
    title: 'stack.frontend',
    tech: [
      {
        name: 'HTML',
        logo: HtmlLogo,
      },
      {
        name: 'CSS',
        logo: CssLogo,
      },
      {
        name: 'Tailwind CSS',
        logo: TailwindLogo,
      },
      {
        name: 'JavaScript',
        logo: JavaScriptLogo,
      },
      {
        name: 'TypeScript',
        logo: TypeScriptLogo,
      },
      {
        name: 'React',
        logo: ReactLogo,
      },
    ],
  },
  {
    icon: ServerIcon,
    title: 'stack.backend',
    tech: [
      {
        name: 'PHP',
        logo: PhpLogo,
        colors: 'text-black dark:text-white',
      },
      {
        name: 'Laravel',
        logo: LaravelLogo,
      },
      {
        name: 'Java',
        logo: JavaLogo,
      },
      {
        name: 'Spring Boot',
        logo: SpringBootLogo,
      },
    ],
  },
  {
    icon: DatabaseIcon,
    title: 'stack.database',
    tech: [
      {
        name: 'PostgreSQL',
        logo: PostgreLogo,
      },
    ],
  },
  {
    icon: CloudIcon,
    title: 'stack.cloud',
    tech: [
      {
        name: 'Vercel',
        logo: VercelLogo,
        colors: 'text-black dark:text-white',
      },
      {
        name: 'Railway',
        logo: RailwayLogo,
        colors: 'text-black dark:text-white',
      },
    ],
  },
  {
    icon: ShieldIcon,
    title: 'stack.security',
    tech: [
      {
        name: 'JWT',
        logo: JwtLogo,
      },
      {
        name: 'Cypress',
        logo: CypressLogo,
        colors: 'text-black dark:text-white',
      },
      {
        name: 'JUnit',
        logo: JunitLogo,
      },
    ],
  },
  {
    icon: ToolIcon,
    title: 'stack.devTools',
    tech: [
      {
        name: 'Git',
        logo: GitLogo,
      },
      {
        name: 'GitHub',
        logo: GithubLogo,
        colors: 'text-black dark:text-white',
      },
      {
        name: 'Postman',
        logo: PostmanLogo,
      },
      {
        name: 'Swagger',
        logo: SwaggerLogo,
      },
    ],
  },
];
