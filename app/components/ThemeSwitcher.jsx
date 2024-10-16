'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleThemeSwitch}
      className="p-2 rounded-md text-sm bg-gray-200 dark:bg-customDark-secondColor flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeSwitcher;