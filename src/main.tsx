import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/style/tailwind-import.css';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { LocaleProvider } from './locale';
import { ThemeProvider } from './store/theme/provider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocaleProvider>
  </StrictMode>,
);
