import { ClockIcon, LocationIcon } from '@components/ui/icons/Icons';
import { useTranslation } from 'react-i18next';

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <article className="md:flex justify-between items-center gap-5 space-y-5 md:space-y-0 w-full">
      <div className="px-6 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100/30 dark:bg-neutral-900/30">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-sky-500/10 dark:bg-purple-500/10">
            <LocationIcon className="size-5 text-sky-300 dark:text-purple-400" />
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
              {t('contact.locationTitle')}
            </h4>
            <span className="text-gray-600 dark:text-gray-400">
              Almería, {t('contact.locationCountry')}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-gray-700 dark:text-gray-500 mt-5">{t('contact.locationText')}</p>
        </div>
      </div>

      <div className="px-6 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100/30 dark:bg-neutral-900/30">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-sky-500/10 dark:bg-purple-500/10">
            <ClockIcon className="w-5 h-5 text-sky-300 dark:text-purple-400" />
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
              {t('contact.availabilityTitle')}
            </h4>
            <span className="text-gray-600 dark:text-gray-400">
              {t('contact.availabilityHours')}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-gray-700 dark:text-gray-500">{t('contact.availabilityText')}</p>
        </div>
      </div>
    </article>
  );
}
