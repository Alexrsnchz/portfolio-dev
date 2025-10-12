import { ChevronDownIcon, TranslatorIcon } from '@components/ui/icons/Icons';
import { useEffect, useRef, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { list } from '@data/langListData';
import { LangListProps } from '@customTypes/data.types';

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentLang = i18next.language.toUpperCase().slice(0, 2);
  const { t } = useTranslation();

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = async (lang: string) => {
    try {
      await i18next.changeLanguage(lang);
      setIsOpen(false);
    } catch (err) {
      console.error('Error changing language:', err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button onClick={openMenu} className="flex items-center gap-1 cursor-pointer">
        <TranslatorIcon className="size-5 text-gray-600 dark:text-gray-200" />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-200 uppercase">
          {currentLang}
        </span>
        <ChevronDownIcon
          className={`md:mt-0.75 size-4 ${isOpen ? 'rotate-180' : ''} text-gray-800 dark:text-gray-200 transition-transform duration-200 ease-in-out`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-900">
          <ul>
            {list.map(({ flag: Flag, text, code }: LangListProps, index) => (
              <li
                key={index}
                className="first:rounded-t-lg last:rounded-b-lg hover:bg-gray-200 dark:hover:bg-neutral-800"
              >
                <button
                  onClick={() => changeLanguage(code)}
                  aria-label={t('navbar.langItemAria') + text}
                  className="flex items-center px-3 py-2 gap-2"
                >
                  <Flag className="size-5 md:size-6" />
                  <span className="text-sm md:text-md font-medium text-gray-600 dark:text-gray-200">
                    {text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
