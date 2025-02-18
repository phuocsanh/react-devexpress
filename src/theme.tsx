import React, { useCallback, useMemo, useState } from 'react';

const themes = ['light', 'dark'];
const themeClassNamePrefix = 'dx-swatch-';
let currentTheme =  getNextTheme();

function getNextTheme(theme = '') {
  return themes[themes.indexOf(theme) + 1] || themes[0];
}

function getCurrentTheme() {
  return currentTheme;
}

function toggleTheme(prevTheme: string) {
  const isCurrentThemeDark = prevTheme === 'dark';
  const newTheme = getNextTheme(prevTheme);

  document.body.classList.replace(
    themeClassNamePrefix + prevTheme,
    themeClassNamePrefix + newTheme
  );

  const additionalClassNamePrefix = themeClassNamePrefix + 'additional';
  const additionalClassNamePostfix = isCurrentThemeDark ? '-' + prevTheme : '';
  const additionalClassName = `${additionalClassNamePrefix}${additionalClassNamePostfix}`

  document.body
    .querySelector(`.${additionalClassName}`)?.classList
    .replace(additionalClassName, additionalClassNamePrefix + (isCurrentThemeDark ? '' : '-dark'));

  currentTheme = newTheme;

  return newTheme;
}

export function useThemeContext() {
  const [theme, setTheme] = useState(getCurrentTheme());
  const switchTheme = useCallback(() => setTheme((currentTheme) => toggleTheme(currentTheme)), []);
  const isDark = useCallback((): boolean => {
    return currentTheme === 'dark';
  }, []);

  if (!document.body.className.includes(themeClassNamePrefix)) {
    document.body.classList.add(themeClassNamePrefix + theme);
  }

  return useMemo(()=> ({ theme, switchTheme, isDark }), [theme]);
}

export const ThemeContext = React.createContext<ReturnType<typeof useThemeContext> | null>(null);
