import type { StackProps } from '@customTypes/stack.types';
import { useTranslation } from 'react-i18next';
import { TechProps } from '@customTypes/data.types';

export default function StackCard({ title, icon: Icon, tech }: StackProps) {
  const { t } = useTranslation();

  return (
    <article className="p-5 space-y-5 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100/30 dark:bg-neutral-900/30">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-sky-500/10 dark:bg-purple-500/10">
          <Icon className="w-7 h-7 text-sky-300 dark:text-purple-400" />
        </div>

        <h3 className="text-xl font-bold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
          {t(title)}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {tech.map(({ name, logo: Logo, colors }: TechProps, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-3 gap-2 w-full rounded-lg bg-gray-300/50 dark:bg-neutral-800/30"
          >
            <div className="p-2 rounded-lg bg-white dark:bg-neutral-700/20">
              <Logo className={`size-8 ${colors}`} />
            </div>

            <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">{name}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
