import { useTranslation } from 'react-i18next';
import { links } from '@data/navLinksData';
import { NavLinksProps } from '@customTypes/data.types';

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center gap-10">
      {links.map((lnk: NavLinksProps, index) => (
        <li key={index}>
          <a
            href={lnk.url}
            aria-label={t(lnk.aria)}
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out"
          >
            {t(lnk.text)}
          </a>
        </li>
      ))}
    </ul>
  );
}
