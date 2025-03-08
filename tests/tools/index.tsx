import { RenderOptions, RenderResult, render as reactRender, } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { LocaleProvider } from 'src/locale';
import { ThemeProvider } from 'src/store/theme/provider';


export const render = (ui: ReactNode , options?: RenderOptions):
RenderResult => {
  return reactRender(
    <MemoryRouter>
      <LocaleProvider >
        <ThemeProvider>
          { ui }
        </ThemeProvider>
      </LocaleProvider>
    </MemoryRouter>, options);
};
