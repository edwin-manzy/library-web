import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/style/tailwind-import.css';
import { RouterProvider } from 'react-router';

import { LocaleProvider } from './locale';
import { router } from './router';
import { ThemeProvider } from './store/theme/provider';
import { UserProvider } from './store/user';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ThemeProvider>
    </LocaleProvider>
  </StrictMode>,
);
