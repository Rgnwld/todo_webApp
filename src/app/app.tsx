import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { CustomThemeProvider } from '../hooks/theme';
import Router from '../router';

export function App() {
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider router={Router} />
      </CustomThemeProvider>
    </>
  );
}

export default App;
