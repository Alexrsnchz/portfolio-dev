import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@icons/Icons';
import { useTranslation } from 'react-i18next';

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const { t } = useTranslation();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={t('themeButtonAria')}
      className="relative size-5 cursor-pointer"
    >
      <SunIcon
        className={`absolute inset-0 size-5 ${isDark ? 'opacity-0' : 'opacity-100'} text-yellow-500 transition-opacity duration-400`}
      />
      <MoonIcon
        className={`absolute inset-0 size-5 ${isDark ? 'opacity-100' : 'opacity-0'} text-purple-400 transition-opacity duration-400`}
      />
    </button>
  );
}
