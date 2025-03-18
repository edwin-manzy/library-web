import { produce } from 'immer';
import { ThemeActionName } from 'src/common/constants/enum/theme';

import { ThemeActions, ThemeContext } from './theme.types';

export const themeReducer = (theme: ThemeContext, action: ThemeActions): ThemeContext => {

  if (action.type === ThemeActionName.changeColor) {
    return produce(theme, (draft) => {
      draft.theme.colorMode = action.payload.colorMode;
      return draft;
    });
  }

  return theme;
};
