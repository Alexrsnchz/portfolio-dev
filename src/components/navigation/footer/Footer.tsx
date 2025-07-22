import FooterLinks from '@components/navigation/footer/FooterLinks';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-neutral-700">
      <div className="flex justify-between items-center px-5 md:px-16 py-5 md:py-8 mx-auto max-w-6xl">
        <span className="font-medium text-gray-700 dark:text-gray-400">
          &copy; 2025 Alexrsnchz.
        </span>

        <FooterLinks />
      </div>
    </footer>
  );
}
