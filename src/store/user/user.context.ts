import { createContext } from 'react';
import { UserContext as IUserContext } from 'src/common/interfaces/user';

export const UserContext = createContext<IUserContext>({
  loaded: false
} as IUserContext);
