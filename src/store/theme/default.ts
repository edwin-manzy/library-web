import { ThemeColorMode } from 'src/common/constants/enum/theme';

import { ThemeContext } from './theme.types';

export const defaultTheme: ThemeContext = {
  theme: {
    colorMode: ThemeColorMode.auto,
  }
} as ThemeContext;
