import { useTranslation } from 'react-i18next';
import HeroLinks from '@components/sections/hero/HeroLinks';
import HeroButtons from '@components/sections/hero/HeroButtons';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="flex flex-col justify-center min-h-screen">
        <div className="mb-14 text-center md:text-start">
          <span className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-200">
            {t('heroSubtitle')}
          </span>

          <h1 className="mt-3 mb-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>

          <p className="max-w-xl text-md md:text-xl text-gray-600 dark:text-gray-300">
            {t('heroIntroduction')}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <HeroLinks />

          <HeroButtons />
        </div>
      </div>
    </section>
  );
}
