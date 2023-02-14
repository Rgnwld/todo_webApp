import React, {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from 'react';
import { getCookie, setCookie } from '../helper/cookies';

export const LightMode: ITheme = {
  name: 'lightMode',
  color: {
    main: '#f9f9f9',
    secondary: '#999999',
    accent: '#363636',
  },
  font: {
    familly: 'inter',
  },
  anim: {
    slower: '1s',
    slow: '0.5s',
    normal: '0.2s',
    fast: '0.1s',
    instant: '0s',
  },
};

export const DarkMode: ITheme = {
  name: 'darkMode',
  color: {
    main: '#363636',
    secondary: '#999999',
    accent: '#f9f9f9',
  },
  font: {
    familly: 'inter',
  },
  anim: {
    slower: '1s',
    slow: '0.5s',
    normal: '0.2s',
    fast: '0.1s',
    instant: '0s',
  },
};

const CustomThemeContext = createContext<IThemeContext | null>(null);

export const CustomThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ITheme>(LightMode);

  useEffect(() => {
    const cookieTheme = getCookie('theme');
    if (cookieTheme) {
      UpdateTheme(cookieTheme);
    }
  }, []);

  function UpdateTheme(name: string) {
    switch (name) {
      case LightMode.name:
        setTheme(LightMode);
        setCookie('theme', LightMode.name);
        break;
      case DarkMode.name:
        setTheme(DarkMode);
        setCookie('theme', DarkMode.name);
        break;
    }
  }

  return (
    <CustomThemeContext.Provider value={{ theme, UpdateTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export function useThemeContext() {
  const context = useContext(CustomThemeContext);

  return [context?.theme, context?.UpdateTheme];
}
