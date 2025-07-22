import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from '@icons/Icons';

export default function FooterLinks() {
  return (
    <div className="flex items-center gap-8">
      <a
        href="https://github.com/Alexrsnchz"
        aria-label="Go to my GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>

      <a
        href="https://linkedin.com/in/alejandrorsnchz/"
        aria-label="Go to my LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>

      <a href="mailto:alexrsnchz7@gmail.com" aria-label="Send me an email">
        <EnvelopeIcon className="size-5 text-gray-700 dark:text-gray-400 hover:text-sky-300 dark:hover:text-purple-400 transition-color duration-200 ease-in-out" />
      </a>
    </div>
  );
}
