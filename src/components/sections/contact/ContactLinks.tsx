import { useState } from 'react';
import { links } from '@data/contactLinks';
import { CopyIcon } from '@components/ui/icons/Icons';
import type { LinkProps } from '@customTypes/contact.types';
import { useTranslation } from 'react-i18next';

export default function ContactLinks() {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (url: string, index: number) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <article className="flex flex-col gap-5 w-full">
      {links.map(({ icon: Icon, text, url }: LinkProps, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100/30 dark:bg-neutral-900/30"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-sky-500/10 dark:bg-purple-500/10">
              <Icon className="size-5 text-sky-300 dark:text-purple-400" />
            </div>

            <div>
              <h4 className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
                {text}
              </h4>
              <span className="text-gray-600 dark:text-gray-400">{url}</span>
            </div>
          </div>

          <button
            onClick={() => handleCopy(url, index)}
            className={`relative group ${copiedIndex === index ? 'copied' : ''}`}
          >
            <CopyIcon className="size-5 cursor-pointer text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400 transition-colors duration-200 ease-in-out" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-neutral-800 text-white opacity-0 group-[.copied]:opacity-100 transition-opacity duration-300 pointer-events-none">
              {t('contact.copyButton')}
            </span>
          </button>
        </div>
      ))}
    </article>
  );
}
