import { useContext } from 'react';

import { themeContext } from './context';
import { ThemeContext } from './theme.types';

export const useTheme = (): ThemeContext => {
  const theme = useContext(themeContext);
  return theme;
};
