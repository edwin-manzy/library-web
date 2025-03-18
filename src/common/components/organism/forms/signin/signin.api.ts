import { apiFetch } from 'src/common/helpers/api/api-fetch';

import { isBlank, isEmail } from 'src/common/helpers/validators';

import { SigninResponse } from './signin.types';

export const apiSignin = async (email: string, password: string): Promise<void> => {
  isBlank(email);
  isEmail(email);
  isBlank(password);

  const result = await apiFetch<SigninResponse>('/user/signin', {
    credentials: 'include',
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(result);
};
