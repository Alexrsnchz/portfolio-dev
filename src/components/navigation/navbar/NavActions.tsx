import ThemeSwitch from '@components/navigation/navbar/ThemeSwitch';
import LanguageSwitch from '@components/navigation/navbar/LanguageSwitch';

export default function NavActions() {
  return (
    <div className="flex items-center gap-6 md:gap-8">
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  );
}
