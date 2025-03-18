import { apiFetch } from 'src/common/helpers/api/api-fetch';

import { isBlank, isEmail } from 'src/common/helpers/validators';
import { ApiResponse } from 'src/common/interfaces/api';

import { User } from 'src/common/interfaces/user';

export const apiSignin = async (email: string, password: string): Promise<ApiResponse<User>> => {
  isBlank(email);
  isEmail(email);
  isBlank(password);

  return await apiFetch<User>('/user/signin', {
    credentials: 'include',
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
