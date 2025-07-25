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
  ExpressLogo,
  GithubLogo,
  GitLogo,
  HtmlLogo,
  JavaLogo,
  JavaScriptLogo,
  JestLogo,
  JunitLogo,
  JwtLogo,
  LaravelLogo,
  MysqlLogo,
  NodeLogo,
  PhpLogo,
  PostgreLogo,
  PostmanLogo,
  PrismaLogo,
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
      },
      {
        name: 'Laravel',
        logo: LaravelLogo,
      },
      {
        name: 'Node.js',
        logo: NodeLogo,
      },
      {
        name: 'Express.js',
        logo: ExpressLogo,
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
        name: 'MySQL',
        logo: MysqlLogo,
      },
      {
        name: 'PostgreSQL',
        logo: PostgreLogo,
      },
      {
        name: 'Prisma',
        logo: PrismaLogo,
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
      },
      {
        name: 'Railway',
        logo: RailwayLogo,
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
        name: 'Jest',
        logo: JestLogo,
      },
      {
        name: 'Cypress',
        logo: CypressLogo,
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
