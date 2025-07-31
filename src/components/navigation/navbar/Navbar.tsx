import NavLinks from '@components/navigation/navbar/NavLinks';
import NavActions from '@components/navigation/navbar/NavActions';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="flex justify-center w-full">
      <div
        className={`flex justify-evenly items-center fixed top-0 z-50 px-1 md:px-8 xl:px-0 py-4 mx-auto gap-15 md:gap-28 w-[90%] md:w-[65%] lg:w-[85%] xl:w-[75%] max-w-7xl rounded-lg border transition-all duration-600 ease-in-out
          ${
            scrolled
              ? 'border-gray-300 dark:border-neutral-700 bg-gray-200/30 dark:bg-neutral-800/30 backdrop-blur-md shadow-md translate-y-5'
              : 'border-transparent bg-transparent'
          }`}
      >
        <a
          href="#home"
          aria-label={t('navbar.brandAria')}
          className="text-md md:text-lg leading-none font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent"
        >
          {'<Alexrsnchz />'}
        </a>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <NavActions />
      </div>
    </nav>
  );
}
