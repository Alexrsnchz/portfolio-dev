import { useTranslation } from 'react-i18next';
import { PaperPlaneIcon } from '@components/ui/icons/Icons';
import * as React from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_MAILER_SERVICE_ID,
        import.meta.env.VITE_MAILER_TEMPLATE_ID,
        form,
        import.meta.env.VITE_MAILER_PUBLIC_KEY,
      );

      alert(t('contact.formSuccessMessage'));
      form.reset();
    } catch (error) {
      alert('contact.formErrorMessage');
    }
  };

  return (
    <article>
      <div className="p-5 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100/30 dark:bg-neutral-900/30">
        <div className="w-full text-center">
          <span className="text-2xl font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
            {t('contact.formTitle')}
          </span>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 mt-8">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-3 flex-1">
              <label
                htmlFor="email"
                className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent"
              >
                Email
              </label>
              <input
                id="email"
                name="reply_to"
                type="email"
                placeholder="name@company.org"
                className="px-4 py-2 w-full rounded-lg border border-gray-400 dark:border-neutral-700 focus:outline-none dark:focus:border-purple-400 bg-gray-100/30 dark:bg-neutral-900/30 placeholder-gray-400 text-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <label
                htmlFor="subject"
                className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent"
              >
                {t('contact.formSubject')}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={`${t('contact.formSubject')}...`}
                className="px-4 py-2 w-full rounded-lg border border-gray-400 dark:border-neutral-700 focus:outline-none dark:focus:border-purple-400 bg-gray-100/30 dark:bg-neutral-900/30 placeholder-gray-400 text-gray-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="body"
              className="font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent"
            >
              {t('contact.formBody')}
            </label>
            <textarea
              id="body"
              name="body"
              rows={5}
              placeholder={`${t('contact.formBodyPlaceholder')}`}
              className="px-4 py-2 w-full rounded-lg border border-gray-400 dark:border-neutral-700 focus:outline-none dark:focus:border-purple-400 bg-gray-100/30 dark:bg-neutral-900/30 placeholder-gray-400 text-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex justify-center items-center px-5 py-2.5 mb-1 gap-3 w-full rounded-md cursor-pointer group border border-gray-500 dark:border-neutral-700 hover:border-amber-400 dark:hover:border-purple-500 hover:bg-amber-400/10 dark:hover:bg-purple-500/10 transition-color duration-200 ease-in-out"
          >
            <PaperPlaneIcon className="size-4.5 text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400" />
            <span className="font-medium text-gray-600 dark:text-gray-200 group-hover:text-amber-400 dark:group-hover:text-purple-400">
              {t('contact.formButton')}
            </span>
          </button>
        </form>
      </div>
    </article>
  );
}
