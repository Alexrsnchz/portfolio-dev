import { useTranslation } from 'react-i18next';
import ContactLinks from '@components/sections/contact/ContactLinks';
import ContactForm from '@components/sections/contact/ContactForm';
import ContactInfo from '@components/sections/contact/ContactInfo';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-10 md:py-20">
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {t('contact.subtitle')}
        </span>

        <h1 className="pb-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
          {t('contact.title')}
        </h1>

        <p className="mt-8 max-w-xl text-center text-gray-600 dark:text-gray-300">
          {t('contact.text')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 md:mt-15">
        <div className="flex flex-col justify-between gap-5 lg:gap-0">
          <ContactLinks />
          <ContactInfo />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
