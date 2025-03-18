import { PropsWithChildren, ReactNode, useReducer } from 'react';

import { themeContext } from './context';
import { defaultTheme } from './default';
import { themeReducer } from './reducer';

export const ThemeProvider = ({ children }: PropsWithChildren): ReactNode => {
  const [ state, dispatch ] = useReducer(themeReducer, defaultTheme);

  return <themeContext.Provider value={{ ...state, dispatch }} >
    { children }
  </themeContext.Provider>;
};
