import { createContext } from 'react';

import { defaultTheme } from './default';
import { ThemeContext as iThemeContext } from './theme.types';

export const themeContext = createContext<iThemeContext>(defaultTheme);
