import { PropsWithChildren, useReducer } from 'react';

import { UserContext as IUserContext } from 'src/common/interfaces/user';

import { UserContext } from './user.context';
import { userReducer } from './user.reducer';

export const UserProvider = ({ children }: PropsWithChildren): React.ReactElement => {
  const [user, dispatch] = useReducer(userReducer, {
    loaded: false,
  } as IUserContext);

  return <UserContext.Provider value={{ ...user, dispatch }} >
    {children}
  </UserContext.Provider>;
};
