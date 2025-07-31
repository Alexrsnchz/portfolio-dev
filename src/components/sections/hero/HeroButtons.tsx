import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, DocumentIcon } from '@icons/Icons';
import i18next from 'i18next';

export default function HeroButtons() {
  const { t } = useTranslation();
  const currentLang = i18next.language.toUpperCase();

  return (
    <div className="flex items-center gap-5 mt-8">
      <a
        href={`/documents/CV_${currentLang}_Alejandro_Ramos_Sanchez.pdf`}
        aria-label={t('hero.cvButtonAria')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-5 py-2.5 gap-2 rounded-md group border border-gray-600 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-purple-500 hover:bg-amber-400/10 dark:hover:bg-purple-500/10 transition-color duration-200 ease-in-out"
      >
        <DocumentIcon className="size-4 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400" />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400">
          {t('hero.cvButton')}
        </span>
      </a>

      <a
        href="/#projects"
        aria-label={t('hero.projectsButtonAria')}
        className="flex items-center px-5 py-2.5 gap-2 rounded-md group border border-gray-600 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-purple-500 hover:bg-amber-400/10 dark:hover:bg-purple-500/10 transition-color duration-200 ease-in-out"
      >
        <span className="text-sm font-medium text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400">
          {t('hero.projectsButton')}
        </span>
        <ArrowRightIcon className="size-4 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400" />
      </a>
    </div>
  );
}
