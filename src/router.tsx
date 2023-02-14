import React, { PropsWithChildren, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext as useCustomThemeContext } from './hooks/theme';
import { createBrowserRouter } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPageConfiguration/DefaultPageConfiguration.style';
import GlobalStyles from './global/styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from './app/pages/Login.page';

const DefaultPageConfiguration: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme] = useCustomThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultPage>
        <Header />
        {children}
        <Footer />
      </DefaultPage>
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DefaultPageConfiguration>
        <LoginPage />
      </DefaultPageConfiguration>
    ),
  },
]);

export default router;
