import { Dispatch } from 'react';
import { ThemeActionName, ThemeColorMode, ThemeNames } from 'src/common/constants/enum/theme';
import { Theme } from 'src/common/interfaces/theme';

export interface ChangeThemeColor {
  type: ThemeActionName.changeColor,
  payload: {
    colorMode: ThemeColorMode
  }
}

export interface ChangeThemeScheme {
  type: ThemeActionName.changeTheme,
  payload: {
    themeName: ThemeNames
  }
}

export type ThemeActions = ChangeThemeColor | ChangeThemeScheme;

export interface ThemeContext {
  theme: Theme,
  dispatch: Dispatch<ThemeActions>
}
