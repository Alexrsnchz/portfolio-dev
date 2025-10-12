import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from '@components/ui/icons/Icons';
import { useTranslation } from 'react-i18next';

export default function FooterLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-8">
      <a
        href="https://github.com/Alexrsnchz"
        aria-label={t('gitHubAria')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>

      <a
        href="https://linkedin.com/in/alejandrorsnchz/"
        aria-label={t('linkedInAria')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>

      <a href="mailto:alexrsnchz7@gmail.com" aria-label={t('emailAria')}>
        <EnvelopeIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>
    </div>
  );
}
