import { ExternalLinkIcon, GitHubIcon } from '@icons/Icons';
import type { ProjectProps } from '@customTypes/projects.types';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({
  thumbnail,
  title,
  description,
  stack,
  source,
  preview,
  reverse,
}: ProjectProps) {
  const { t } = useTranslation();

  return (
    <article
      className={`flex ${reverse ? 'md:flex-row-reverse' : ''} flex-col md:flex-row items-stretch gap-6`}
    >
      <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={`${t(title)} thumbnail`}
          className="size-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
          {t(title)}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-300">{t(description)}</p>

        <div className="flex items-center flex-wrap gap-2 my-6 max-w-lg">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full bg-sky-300/20 dark:bg-purple-600/20 font-medium text-xs text-sky-300 dark:text-purple-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={source}
            aria-label={t('projects.sourceButtonAria')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2.5 gap-2 rounded-md group border border-gray-600 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-purple-500 hover:bg-amber-400/10 dark:hover:bg-purple-500/10 transition-color duration-200 ease-in-out"
          >
            <GitHubIcon className="size-4 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400">
              {t('projects.sourceButtonText')}
            </span>
          </a>

          <a
            href={preview}
            aria-label={t('projects.previewButtonAria')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2.5 gap-2 rounded-md group border border-gray-600 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-purple-500 hover:bg-amber-400/10 dark:hover:bg-purple-500/10 transition-color duration-200 ease-in-out"
          >
            <ExternalLinkIcon className="size-4 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400">
              {t('projects.previewButtonText')}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
