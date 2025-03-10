import { useContext } from 'react';
import { UserContext as IUserContext } from 'src/common/interfaces/user';
import { UserContext } from './user.context';

export const useUser = (): IUserContext => {
  return useContext(UserContext);
};
