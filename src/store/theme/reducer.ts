import { ThemeActions, ThemeContext } from './theme.types';
import { ThemeActionName } from 'src/common/constants/enum/theme';
import { produce } from 'immer';

export const themeReducer = (theme: ThemeContext, action: ThemeActions): ThemeContext => {

  if (action.type === ThemeActionName.changeColor) {
    return produce(theme, (draft) => {
      draft.theme.colorMode = action.payload.colorMode;
      return draft;
    });
  }

  return theme;
};
