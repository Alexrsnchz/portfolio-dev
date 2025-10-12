import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from '@components/ui/icons/Icons';
import { useTranslation } from 'react-i18next';

export default function HeroLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-8 md:ml-1">
      <a
        href="https://github.com/Alexrsnchz"
        aria-label={t('gitHubAria')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 group"
      >
        <GitHubIcon className="size-5 text-gray-600 dark:text-gray-200 group-hover:text-sky-300 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out" />
        <span className="text-gray-600 dark:text-gray-200 group-hover:text-sky-300 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out">
          GitHub
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/alejandrorsnchz/"
        aria-label={t('linkedInAria')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 group transition-color duration-200 ease-in-out"
      >
        <LinkedInIcon className="size-5 text-gray-600 dark:text-gray-200 group-hover:text-rose-300 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out" />
        <span className="text-gray-600 dark:text-gray-200 group-hover:text-rose-300 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out">
          LinkedIn
        </span>
      </a>

      <a
        href="mailto:alexrsnchz7@gmail.com"
        aria-label={t('emailAria')}
        className="flex items-center gap-2 group transition-color duration-200 ease-in-out"
      >
        <EnvelopeIcon className="size-5 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out" />
        <span className="text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400 transition-color duration-200 ease-in-out">
          Email
        </span>
      </a>
    </div>
  );
}
