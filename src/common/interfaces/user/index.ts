import { Dispatch } from 'react';
import { USER_ACTIONS, USER_TYPES } from 'src/common/constants/user';

export type UserType = typeof USER_TYPES[keyof (typeof USER_TYPES)]

export interface User {
  name: string;
  picture: string;
  type: UserType;
};


export type UserActionKeys = keyof typeof USER_ACTIONS

export interface UserSigninAction {
  action: 'SIGN_IN',
  payload: {
    user?: User
  }
}

export interface UserSignOutAction {
  action: 'SIGN_OUT',
  payload: undefined
}


export type UserActions = UserSigninAction | UserSignOutAction

export interface UserContext {
  user?: User,
  loaded: boolean,
  dispatch: Dispatch<UserActions>
}
