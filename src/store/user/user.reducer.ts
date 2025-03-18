import { produce } from 'immer';
import { USER_ACTIONS } from 'src/common/constants/user';
import { UserActions, UserContext } from 'src/common/interfaces/user';

export const userReducer = (state: UserContext, { action, payload }: UserActions): UserContext => {

  if (action === USER_ACTIONS.SIGN_IN) {
    return produce(state, (draft) => {
      draft.user = payload.user;
      draft.loaded = true;
      return draft;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (action === USER_ACTIONS.SIGN_OUT) {
    return produce(state, (draft) => {
      draft.user = undefined;
      return draft;
    });
  }

  return state;
};
